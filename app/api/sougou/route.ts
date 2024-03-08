import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const text = searchParams.get('text')
  const url = `https://fanyi.sogou.com/api/transpc/text/result`
  const options = {
    method: 'POST',
    headers: {
      Accept: '*/*',
      'Content-Type': 'application/json',
      Cookie:
        'ABTEST=7|1709842898|v17; SNUID=9EC794017C7A6F6CA9E76DC37C2A5E70; SUID=E5BBEF7DD756A00A0000000065EA21D2; wuid=1709842898893; FQV=c45bbf54eed7659bd0fbbc2aa79db3b9; translate.sess=bcb2c36f-1e6b-44d9-9e1c-1b7ae9c6c517; SUV=1709842899884; SGINPUT_UPSCREEN=1709842899897',
      Origin: 'https://fanyi.sogou.com',
      Referer:
        'https://fanyi.sogou.com/text?keyword=%E4%BA%91&transfrom=auto&transto=en&model=general',
      'User-Agent':
        'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    },
    body: JSON.stringify({
      from: 'auto',
      to: 'en',
      text: `${text}`,
      client: 'pc',
      fr: 'browser_pc',
      needQc: 1,
      s: '4e8ff2d25a63522950798e393a2aab31',
      uuid: '7380a341-d69c-4c14-8790-ffba8cf6774c',
      exchange: false,
    }),
  }
  try {
    const res = await fetch(url, options)
    const {
      data: { detail, sentences },
      info,
      status,
    } = await res.json()

    if (info === 'success' && status === '0') {
      return NextResponse.json({ detail, sentences })
    } else {
      return new NextResponse('Internal Error', {
        status: info,
      })
    }

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
