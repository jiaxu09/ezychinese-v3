import { convertChineseToEnglishPartsOfSpeech, extractIciba } from '@/lib/utils'
import { NextRequest, NextResponse } from 'next/server'

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
            wordInfo
          },
        },
      },
    } = await res.json()
    let sentences, meaningRes = []
    if (wordInfo.baesInfo, wordInfo.sentences, wordInfo.bidce) {
      const { example, meaning } = extractIciba(wordInfo.baesInfo, wordInfo.sentences, wordInfo.bidce)
      sentences = example
      meaningRes = meaning
    } else {
      return new NextResponse('Not Found', {
        status: 404,
      })
    }

    return NextResponse.json({ sentences, meaning: meaningRes })
  } catch (error) {
    console.log('[Iciba_zi_GET]', error)
    return new NextResponse('Internal Error', {
      status: 500,
    })
  }
}

// FIXED DynamicServerError
export async function POST(req: NextRequest) {
  return new NextResponse('', {})
}
