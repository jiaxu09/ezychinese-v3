import path from 'path'
import { promises as fs } from 'fs'
import { NextRequest, NextResponse } from 'next/server'
import { parse } from '@plussub/srt-vtt-parser'
import { pinyin } from 'pinyin-pro'

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const text = searchParams.get('text')

    const jsonDirectory = path.join(process.cwd(), 'lib')

    //English

    const data_en = await fs.readFile(jsonDirectory + '/eng.vtt', 'utf8')

    if (!data_en) {
      return new NextResponse('zh_vvt file not found', {
        status: 404,
      })
    }

    const { entries: entries_en } = parse(data_en.toString())

    const res_en = entries_en.map(({ from, to, text, id }) => {
      return {
        from: from / 1000,
        to: to / 1000,
        text: text.replace('[', '').replace(']', ''),
      }
    })

    await fs.writeFile(jsonDirectory + '/eng.json', JSON.stringify(res_en))

    //Read the json data file data.json
    const data_zh = await fs.readFile(jsonDirectory + '/zh.vtt', 'utf8')

    if (!data_zh) {
      return new NextResponse('zh_vvt file not found', {
        status: 404,
      })
    }

    const { entries } = parse(data_zh.toString())

    const res_zh = entries.map(({ from, to, text, id }) => {
      return {
        from: from / 1000,
        to: to / 1000,
        text: text.replace(/\s+/g, '').replace('[', '').replace(']', ''),
      }
    })

    await fs.writeFile(jsonDirectory + '/chn.json', JSON.stringify(res_zh))

    //Pinyin

    const { entries: entries_py } = parse(data_zh.toString())

    const res_py = entries_py.map(({ from, to, text, id }) => {
      return {
        from: from / 1000,
        to: to / 1000,
        text: pinyin(
          text.replace(/\s+/g, '').replace('[', '').replace(']', '')
        ),
      }
    })

    await fs.writeFile(jsonDirectory + '/pinyin.json', JSON.stringify(res_py))

    //Return the content of the data file in json format
    return NextResponse.json({
      //   english,
    })
  } catch (error) {
    console.log('[ENGLISH_ERROR]', error)
    return new NextResponse('Internal Error', {
      status: 500,
    })
  }
}

// FIXED DynamicServerError
export async function POST(req: NextRequest) {
  return new NextResponse('', {})
}
