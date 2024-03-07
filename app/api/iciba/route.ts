import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const url =
    'https://www.iciba.com/_next/data/dTlbEbttstfo-ZBl63u0M/word.json?w=马到成功'
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
          word: { wordInfo },
        },
      },
    } = await res.json()

    //Return the content of the data file in json format
    return NextResponse.json({ wordInfo })
  } catch (error) {
    console.log('[Dictionary_GET]', error)
    return new NextResponse('Internal Error', {
      status: 500,
    })
  }
}

// FIXED DynamicServerError
export async function POST(req: NextRequest) {
  return new NextResponse('', {})
}
