import path from 'path'
import { promises as fs } from 'fs'
import { NextRequest, NextResponse } from 'next/server'
import { parse } from '@plussub/srt-vtt-parser'
import { pinyin } from 'pinyin-pro'

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const text = searchParams.get('text')

    const jsonDirectory = path.join(process.cwd(), 'lib')

    const data = await fs.readFile(jsonDirectory + '/idiom.json', 'utf8')

    if (!data) {
      return new NextResponse('idiom.json file not found', {
        status: 404,
      })
    }

    const result = JSON.parse(data)

    console.log(result)

    //Return the content of the data file in json format
    return NextResponse.json({
      //   english,
    })
  } catch (error) {
    console.log('[ENGLISH_ERROR]', error)
    return new NextResponse('Internal Error', {
      status: 500,
    })
  }
}

// FIXED DynamicServerError
export async function POST(req: NextRequest) {
  return new NextResponse('', {})
}
