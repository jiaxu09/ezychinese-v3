import path from 'path'
import { promises as fs } from 'fs'
import { NextRequest, NextResponse } from 'next/server'
import { pinyin } from 'pinyin-pro'
import { IIdiom } from '@/lib/types'

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

    //Get example from 360 fanyi
    let eng_meaning: any = undefined
    let source_example: any = undefined
    try {
      const url = `https://fanyi.so.com/index/search?eng=0&validate=&ignore_trans=0&query=${text}`
      const options = {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'accept-language':
            'en-NZ,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,en-GB;q=0.6,en-US;q=0.5',
          'Content-Type': 'application/json',
          origin: 'https://fanyi.so.com',
          pro: 'fanyi',
          authority: 'fanyi.so.com',
        },
      }

      const fanyiRes = await fetch(url, options)
      const {
        data: {
          explain: { newcentury },
        },
      } = await fanyiRes.json()

      const { entrys } = newcentury[Object.keys(newcentury)[0]]

      const {
        category: { sense },
      } = entrys[0]

      const { description, example } = sense[0]
      eng_meaning = description
      source_example = example
    } catch (error) {}

    const idiomJson = JSON.parse(data)

    const result = idiomJson.filter((item: any) =>
      item.word.replace('，', '').includes(text?.replace('，', '').trim())
    )

    const idiom: IIdiom = result.slice(0, 1).map((item: any) => ({
      name: item.word.split(''),
      idiom_pinyin: pinyin(item.word, { type: 'array' }),
      idiom_meaning: item.explanation ?? '',
      eng_meaning: eng_meaning ?? '',
      example:
        (source_example &&
          source_example[0].source
            .replace('<b>', '')
            .replace('</b>', '')
            .split('')) ??
        [],
      example_pinyin:
        pinyin(
          source_example &&
            source_example[0].source.replace('<b>', '').replace('</b>', ''),
          {
            type: 'array',
          }
        ) ?? [],
      example_meaning: (source_example && source_example[0].target) ?? '',
    }))[0]
    //Return the content of the data file in json format
    return NextResponse.json(idiom)
  } catch (error) {
    console.log('[Idiom_ERROR]', error)
    return new NextResponse('Internal Error', {
      status: 500,
    })
  }
}

// FIXED DynamicServerError
export async function POST(req: NextRequest) {
  return new NextResponse('', {})
}
