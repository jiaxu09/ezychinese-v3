import path from 'path'
import { promises as fs } from 'fs'
import { NextRequest, NextResponse } from 'next/server'

interface Word {
  char: string
  strokes: string
  pinyin: string[]
  radicals: string
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const text = searchParams.get('text')

    if (!text) {
      return new NextResponse('No text found', {
        status: 404
      })
    }

    const jsonDirectory = path.join(process.cwd(), 'lib')
    //Read the json data file data.json
    const data = await fs.readFile(jsonDirectory + '/char_base.json', 'utf8')

    if (!data) {
      return new NextResponse('Hanzi file not found', {
        status: 404
      })
    }
    const hanzi: Word[] = JSON.parse(data)
    const result = hanzi.filter(item => item.char === text)
    const { strokes, radicals, pinyin } = result[0]

    //Return the content of the data file in json format
    return NextResponse.json({
      strokes,
      radicals,
      pinyin
    })
  } catch (error) {
    console.log('[Dictionary_GET]', error)
    return new NextResponse('Internal Error', {
      status: 500
    })
  }
}

// FIXED DynamicServerError
export async function POST(req: NextRequest) {
  return new NextResponse('', {})
}