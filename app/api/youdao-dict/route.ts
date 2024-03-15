import { IIdiom, Vocabulary } from '@/lib/types'
import { NextRequest, NextResponse } from 'next/server'
import { pinyin } from 'pinyin-pro'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const text = searchParams.get('text')

  if (text?.length === 0) {
    return new NextResponse('No params', {
      status: 400,
    })
  }
  const url_1 = `https://dict.youdao.com/jsonapi_s?doctype=json&jsonversion=4`
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

  let wuguanghua, youdao
  try {
    try {
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
      const res = await fetch(url_1, options)
      const {
        wuguanghua: { dataList },
        ce: { word },
      } = await res.json()
      // let wuguanghua
      wuguanghua = dataList.map((item: any) => ({
        pinyin: item.phone,
        example: item.trs.map((t: any) => ({
          en_meaning: t.tr.en,
          zh_meaning: t.tr.cn ?? '',
          ...(t.sents && {
            sentences: t.sents.map((s: any) => ({
              en: s.en,
              zh: s.cn ?? '',
            })),
          }),
        })),
        source: '《吴光华汉英大辞典》',
      }))[0]

      youdao = {
        pinyin: word.phone,
        example: word.trs.map((item: any) => ({
          en_meaning: item['#text'],
          sentences: item['#tran'],
        })),
        source: '有道词典',
      }
    } catch (error) {}

    const url_2 = `https://dict.youdao.com/suggest?num=5&ver=3.0&doctype=json&cache=false&le=en&q=${text}`
    const options = {
      method: 'GET',
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/json',
      },
    }
    const res = await fetch(url_2, options)

    let explanation
    try {
      const {
        data: { entries },
      } = await res.json()
      explanation = entries
    } catch (error) {}

    const vocabulary: Vocabulary = {
      'brief definition': explanation,
      'dictionary 1': wuguanghua,
      'dictionary 2': youdao,
    }

    return NextResponse.json(vocabulary)

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
