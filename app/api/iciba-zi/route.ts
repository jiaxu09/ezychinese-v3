import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const text = searchParams.get('text')

  const url = `https://www.iciba.com/_next/data/dTlbEbttstfo-ZBl63u0M/word.json?w=${text}`
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
            wordInfo: { new_sentence },
          },
        },
      },
    } = await res.json()

    if (!new_sentence) {
      return new NextResponse('Not Found', {
        status: 404,
      })
    }

    const { sentences } = new_sentence[0]

    const example = sentences.map((sentence: any) => ({
      cn: sentence.cn,
      en: sentence.en,
    }))

    //Return the content of the data file in json format
    return NextResponse.json(example)
  } catch (error) {
    console.log('[Iciba_GET]', error)
    return new NextResponse('Internal Error', {
      status: 500,
    })
  }
}

// FIXED DynamicServerError
export async function POST(req: NextRequest) {
  return new NextResponse('', {})
}
