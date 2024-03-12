import { NextRequest, NextResponse } from 'next/server'

//360 fanyi
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const text = searchParams.get('text')
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
  try {
    const res = await fetch(url, options)
    const {
      data: {
        explain: { newcentury },
      },
    } = await res.json()

    const { entrys } = newcentury[Object.keys(newcentury)[0]]

    const {
      category: { sense },
    } = entrys[0]

    const { description, example } = sense[0]

    return NextResponse.json({ description, example })

    //Return the content of the data file in json format
  } catch (error) {
    console.log('[Fanyi_GET]', error)
    return new NextResponse('Internal Error', {
      status: 500,
    })
  }
}

// FIXED DynamicServerError
export async function POST(req: NextRequest) {
  return new NextResponse('', {})
}
