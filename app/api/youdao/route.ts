import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const text = searchParams.get('text')
  const url = `https://dict.youdao.com/suggest?num=5&ver=3.0&doctype=json&cache=false&le=en&q=${text}`
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
      result,
      data: { entries },
    } = await res.json()

    if (result.code === 200) {
      return NextResponse.json(entries)
    } else {
      return new NextResponse('Internal Error', {
        status: result.code,
      })
    }

    //Return the content of the data file in json format
  } catch (error) {
    console.log('[Youdao_GET]', error)
    return new NextResponse('Internal Error', {
      status: 500,
    })
  }
}

// FIXED DynamicServerError
export async function POST(req: NextRequest) {
  return new NextResponse('', {})
}
