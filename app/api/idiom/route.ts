import path from 'path'
import { promises as fs } from 'fs'
import { NextRequest, NextResponse } from 'next/server'
import { pinyin } from 'pinyin-pro'

type Idiom = {
  name: string[]
  idiom_pinyin: string[]
  idiom_meaning?: string
  example: string[]
  example_pinyin: string[]
  example_meaning: string
}
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const text = searchParams.get('text')

    const jsonDirectory = path.join(process.cwd(), 'lib')
    //Read the json data file data.json
    const data = await fs.readFile(jsonDirectory + '/idiom.json', 'utf8')

    if (!data) {
      return new NextResponse('idiom file not found', {
        status: 404,
      })
    }

    const idiomJson = JSON.parse(data)

    const result = idiomJson.filter((item: any) =>
      item.word.replace('，', '').includes(text?.replace('，', '').trim())
    )

    if (result.length > 0) {
      const idiom: Idiom = result.slice(0, 1).map((item: any) => ({
        name: item.word.split(''),
        idiom_pinyin: pinyin(item.word, { type: 'array' }),
        idiom_meaning: item.explanation ?? '',
        example: [],
        example_pinyin: [],
        example_meaning: '',
      }))[0]
      //Return the content of the data file in json format
      return NextResponse.json(idiom)
    }
    return NextResponse.json(null)
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
