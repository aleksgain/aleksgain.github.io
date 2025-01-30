import type { APIRoute } from 'astro';
import personalData from '../../data/personal.json';

// Simple in-memory rate limiting
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 10; // 10 requests per minute
const requestLog: { timestamp: number }[] = [];

function isRateLimited() {
  const now = Date.now();
  // Remove old requests
  const windowStart = now - RATE_LIMIT_WINDOW;
  while (requestLog.length && requestLog[0].timestamp < windowStart) {
    requestLog.shift();
  }
  // Check if we're over the limit
  if (requestLog.length >= MAX_REQUESTS) {
    return true;
  }
  // Log this request
  requestLog.push({ timestamp: now });
  return false;
}

export const GET: APIRoute = async () => {
  if (isRateLimited()) {
    return new Response(JSON.stringify({ error: 'Rate limit exceeded' }), {
      status: 429,
      headers: {
        'Content-Type': 'application/json',
        'Retry-After': '60'
      }
    });
  }

  const token = import.meta.env.GITHUB_TOKEN;
  const username = personalData.githubUsername;

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `query($userName:String!) { 
          user(login: $userName){
            avatarUrl
          }
        }`,
        variables: { userName: username }
      })
    });

    if (!response.ok) {
      return new Response(JSON.stringify({ error: 'GitHub API request failed' }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600' // Cache for 1 hour since avatar rarely changes
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
} 