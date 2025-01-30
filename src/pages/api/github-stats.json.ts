import type { APIRoute } from 'astro';
import personalData from '../../data/personal.json';

export const GET: APIRoute = async () => {
  const token = import.meta.env.PUBLIC_GITHUB_TOKEN;
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
          user(login: $userName) {
            contributionsCollection {
              totalCommitContributions
            }
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
        'Content-Type': 'application/json'
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