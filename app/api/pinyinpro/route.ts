import { NextRequest, NextResponse } from 'next/server'
import { pinyin } from 'pinyin-pro'
export async function GET(req: NextRequest) {}

// FIXED DynamicServerError
export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    const pinyins = pinyin(data, { type: 'array' })

    return NextResponse.json(pinyins)
  } catch (error) {
    return new NextResponse('Internal Error', {
      status: 500,
    })
  }
}
