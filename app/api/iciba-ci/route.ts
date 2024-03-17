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

    //Return the content of the data file in json format
    return NextResponse.json({ ci, baesInfo, new_sentence })
  } catch (error) {
    console.log('[Iciba_ci_GET]', error)
    return new NextResponse('Internal Error', {
      status: 500,
    })
  }
}

// FIXED DynamicServerError
export async function POST(req: NextRequest) {
  return new NextResponse('', {})
}
