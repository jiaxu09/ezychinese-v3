import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const text = searchParams.get('text')
  const url = `https://fanyi.iflyrec.com/TJHZTranslationService/v2/textTranslation`
  const options = {
    method: 'POST',
    headers: {
      Accept: '*/*',
      'Content-Type': 'application/json',
      Referer: 'https://fanyi.iflyrec.com/text-translate',
      Origin: 'https://fanyi.iflyrec.com',
    },
    body: JSON.stringify({
      from: 1,
      contents: [
        {
          text: `${text}`,
          prefix: '',
        },
      ],
      to: 2,
      domain: 'other',
      type: 1,
      openTerminology: true,
    }),
  }
  try {
    const res = await fetch(url, options)
    const data = await res.json()

    // if (result.code === 200) {
    //   return NextResponse.json(entries)
    // } else {
    //   return new NextResponse('Internal Error', {
    //     status: result.code,
    //   })
    // }
    return NextResponse.json(data)
    //Return the content of the data file in json format
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
