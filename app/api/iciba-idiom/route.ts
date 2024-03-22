import { IIdiom } from '@/lib/types'
import { NextRequest, NextResponse } from 'next/server'
import { pinyin } from 'pinyin-pro'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const text = searchParams.get('text')
  const url = `https://www.iciba.com/_next/data/Oo2lhUMf85DZ7OJMbFn8g/word.json?w=${text}`
  const options = {
    method: 'GET',
    headers: {
      Accept: '*/*',
      'Content-Type': 'application/json',
    },
  }
  try {
    const res = await fetch(url, options)
    const {
      pageProps: {
        initialReduxState: {
          word: {
            wordInfo: {
              chinese: { ci },
              baesInfo,
              new_sentence,
            },
          },
        },
      },
    } = await res.json()

    if (!ci) {
      return new NextResponse('Not Found', {
        status: 404,
      })
    }

    const { jieshi, pinyin: pinyin_org } = ci
    const { symbols, word_name } = baesInfo
    const { parts } = symbols[0]
    const { means } = parts[0]
    const { sentences } = new_sentence[0]
    const { cn, en } = sentences[0]

    const idiom: IIdiom = {
      name: word_name.split(''),
      idiom_pinyin: pinyin_org.split(' '),
      idiom_meaning: jieshi,
      eng_meaning: means.toString(),
      example: cn.split(''),
      example_pinyin: pinyin(cn, { type: 'array' }),
      example_meaning: en,
    }

    //Return the content of the data file in json format
    return NextResponse.json(idiom)
  } catch (error) {
    console.log('[Iciba_idiom_GET]', error)
    return new NextResponse('Internal Error', {
      status: 500,
    })
  }
}

// FIXED DynamicServerError
export async function POST(req: NextRequest) {
  return new NextResponse('', {})
}
