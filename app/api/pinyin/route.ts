import { NextRequest, NextResponse } from 'next/server'
import { convert } from 'pinyin-pro'

export async function GET(req: NextRequest) {}

// FIXED DynamicServerError
export async function POST(req: NextRequest) {
  const data = await req.json()

  const convertedPinyin = data.map((pinyin: string) => {
    return convert(pinyin)
  })

  return NextResponse.json(convertedPinyin)
}
