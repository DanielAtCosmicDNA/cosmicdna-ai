import { NextResponse } from 'next/server'

export async function GET() {
  const hftoken = process.env.HF_TOKEN;

  return NextResponse.json({ hftoken })
}