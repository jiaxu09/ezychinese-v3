import * as cheerio from 'cheerio'
import path from 'path'
import { promises as fs } from 'fs'
import { NextRequest, NextResponse } from 'next/server'
import { IIdiom } from '@/lib/types'
import { pinyin } from 'pinyin-pro'

export async function GET(req: NextRequest) {
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

  const result = idiomJson.filter(
    (item: any) =>
      item.word.replace('，', '').trim() === text?.replace('，', '').trim()
  )

  if (result.length === 0) {
    return new NextResponse('Not Found', {
      status: 404,
    })
  }

  try {
    const url = `http://dict.cn/${text}`
    const response = await fetch(url)
    const body = await response.text()
    const $ = cheerio.load(body)

    const example: any = []
    const en_meaning: any = []

    $('.cn > ul > li').map((i, el) => {
      const mean = $(el).find('a').text().trim()
      en_meaning.push(mean)
    })
    $('.sort > ol > li').map((i, el) => {
      const zh = $(el).contents().first().text().trim()
      const en = $(el).contents().last().text().trim()
      example.push({ zh, en })
    })

    const en_ref = $('.ref >dl> dd> ul > li > div').text()

    const idiom: IIdiom = result
      .slice(0, 1)
      .map((item: any, index: number) => ({
        name: item.word.split(''),
        idiom_pinyin: item.pinyin.split(' '),
        idiom_meaning: item.explanation ?? '',
        eng_meaning: en_meaning.toString() ?? '',
        example: example.length > 0 ? example[0].zh.split('') : [],
        example_pinyin:
          example.length > 0 ? pinyin(example[0].zh, { type: 'array' }) : [],
        example_meaning: example.length > 0 ? example[0].en : '',
      }))[0]
    return NextResponse.json(idiom)
  } catch (error) {
    console.log('[Dictcn]', error)
    return new NextResponse('Internal Error', {
      status: 500,
    })
  }
}
// FIXED DynamicServerError
export async function POST(req: NextRequest) {
  return new NextResponse('', {})
}
