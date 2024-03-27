import { NextRequest, NextResponse } from 'next/server'
import { pinyin } from 'pinyin-pro'
import path from 'path'
import { promises as fs } from 'fs'
import translate from '@iamtraction/google-translate'

type Word = {
  "No": string,
  "Chinese": string,
  "Pinyin": string,
  "English": string
}
export async function GET(req: NextRequest) { }

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const stories = JSON.parse(body.zh)

    const jsonDirectory = path.join(process.cwd(), 'lib')
    //Read the json data file data.json
    /**************HSK1 */
    const hsk_data = await fs.readFile(jsonDirectory + '/hsk.json', 'utf8')


    const hsk = JSON.parse(hsk_data)

    const result = await Promise.all(stories.map(async (story: string) => {
      const hskItem = hsk.find((item: Word) => story === item.Chinese.split('（')[0]);
      if (hskItem) {
        return {
          zh: story.split(''),
          pinyin: pinyin(story, { type: 'array' }),
          en: hskItem.English,
          hsk: hskItem.HSK > 0 ? hskItem.HSK : ''
        };
      } else {
        return {
          zh: story.split(''),
          pinyin: pinyin(story, { type: 'array' }),
          en: await translateStr(story),
          hsk: ''
        };
      }
    }));

    // for (let i = 0; i < stories.length; i++) {
    //   let found = false;
    //   for (let j = 0; j < hsk.length; j++) {
    //     if (stories[i] === hsk[j].Chinese.split('（')[0]) {
    //       result.push({
    //         zh: stories[i].trim().split(''),
    //         pinyin: pinyin(stories[i], { type: 'array' }),
    //         en: hsk[j].English,
    //         hsk: hsk[j].HSK > 0 ? hsk[j].HSK : ''
    //       });
    //       found = true;
    //       break;
    //     }
    //   }
    //   if (!found) {
    //     result.push({
    //       zh: stories[i],
    //       pinyin: pinyin(stories[i], { type: 'array' }),
    //       en: pinyin(stories[i]),
    //       hsk: ''
    //     });
    //   }
    // }
    return NextResponse.json(result)
  } catch (error) {
    console.log(error)
    return new NextResponse('Internal Error', {
      status: 500,
    })
  }
}

const translateStr = async (str: string) => {
  const result = await translate(str)
  return result.text
}