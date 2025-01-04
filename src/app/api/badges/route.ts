import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const response = await fetch('https://www.credly.com/users/alexey-gain/badges.json')
    const data = await response.json()
    
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch badges' }, { status: 500 })
  }
} 