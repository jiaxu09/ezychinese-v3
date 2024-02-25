import { NextRequest, NextResponse } from 'next/server'
const pinyin_v1 = require('pinyin-tone')
export async function GET(req: NextRequest) {}

// FIXED DynamicServerError
export async function POST(req: NextRequest) {
  const data = await req.json()

  const convertedPinyin = data.map((pinyin: string) => {
    return pinyin_v1(pinyin)
  })

  return NextResponse.json(convertedPinyin)
}
