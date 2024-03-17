import { IIdiom } from '@/lib/types'
import { NextRequest, NextResponse } from 'next/server'
import { pinyin } from 'pinyin-pro'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const text = searchParams.get('text')
  const url = `https://dict.youdao.com/jsonapi_s?doctype=json&jsonversion=4`
  const details = {
    q: text,
    le: 'en',
    t: 1,
    client: 'web',
    sign: 'aecdcfcc6337a9eae265d7c44e4cc07e',
    keyfrom: 'webdict',
  }
  const formBody = Object.entries(details)
    .map(
      ([key, value]) =>
        //@ts-ignore
        encodeURIComponent(key) + '=' + encodeURIComponent(value)
    )
    .join('&')
  const options = {
    method: 'POST',
    headers: {
      Accept: '*/*',
      'Content-Type': 'application/x-www-form-urlencoded',
      'User-Agent':
        'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
      Referer: 'https://www.youdao.com/',
      Origin: 'https://www.youdao.com',
      Connection: 'keep-alive',
    },
    body: formBody,
  }
  try {
    const res = await fetch(url, options)
    const {
      simple: { query, word },
      wuguanghua,
      newhh,
      blng_sents_part,
    } = await res.json()

    if (!(query && word && wuguanghua && newhh && blng_sents_part)) {
      return new NextResponse('Not found', {
        status: 404,
      })
    }

    const idiom: IIdiom = {
      name: query.split(''),
      idiom_pinyin: word[0].phone.split(' '),
      idiom_meaning: newhh.dataList[0].sense[0].def.toString() ?? '',
      eng_meaning: wuguanghua.dataList[0].trs[0].tr.en ?? '',
      example:
        blng_sents_part['sentence-pair'][0].sentence.trim().split('') ?? [],
      example_pinyin:
        pinyin(blng_sents_part['sentence-pair'][0].sentence.trim(), {
          type: 'array',
        }) ?? [],
      example_meaning:
        blng_sents_part['sentence-pair'][0]['sentence-translation']
          .trim()
          .replaceAll('<b>', '')
          .replaceAll('</b>', '') ?? '',
    }

    return NextResponse.json(idiom)

    //Return the content of the data file in json format
  } catch (error) {
    console.log('[Youdao-idiom_GET]', error)
    return new NextResponse('Internal Error', {
      status: 500,
    })
  }
}

// FIXED DynamicServerError
export async function POST(req: NextRequest) {
  return new NextResponse('', {})
}
