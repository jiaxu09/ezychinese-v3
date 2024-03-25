import { NextRequest, NextResponse } from 'next/server'
import translate from '@iamtraction/google-translate'
import { pinyin } from 'pinyin-pro'

export async function GET(req: NextRequest) { }

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const stories = JSON.parse(body.zh)



    const zh_en = await Promise.all(
      stories.map(async (story: any, index: number) => ({
        zh: story.split(''),
        pinyin: pinyin(story, { type: 'array' }),
        // en: story.en
        en: await translateStr(story),
      }))
    )
    return NextResponse.json(zh_en)
  } catch (error) {
    console.log(error)
    return new NextResponse('Internal Error', {
      status: 500,
    })
  }
}

const translateStr = async (str: string) => {
  const result = await translate(str)
  return result.text.toLowerCase()
}
