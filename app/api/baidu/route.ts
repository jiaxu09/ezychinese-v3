import puppeteer from 'puppeteer'
import { NextRequest, NextResponse } from 'next/server'
import { IIdiom } from '@/lib/types'
import { pinyin } from 'pinyin-pro'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const text = searchParams.get('text')
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(`https://fanyi.baidu.com/#zh/en/${text}`)
  try {
    const eng_meaning = await page.$eval(
      '#cont-hanying > dl > dd > p',
      (el) => el.innerText
    )
    const zh_meaning = await page.$$eval(
      '#cont-zdict> div > ul > li ',
      (options) => {
        return options.map((option) => option.textContent)
      }
    )

    const sample = await page.$$eval(
      '#cont-sample > div > div > ol > li > div',
      (options) => {
        return options.map((option) => ({
          zh: option.querySelector('.sample-source')?.textContent,
          en: option.querySelector('.sample-target')?.textContent,
          src: option.querySelector('.sample-resource')?.textContent,
        }))
      }
    )

    const idiom: IIdiom = {
      name: zh_meaning[0]?.split('[')[0].split('') ?? [], //extract from ie:光明磊落[guāng míng lěi luò]
      idiom_pinyin:
        zh_meaning[0]
          ?.split('[')[1]
          .toString()
          .replace('[', '')
          .replace(']', '')
          .split(' ') ?? [], //extract from ie:光明磊落[guāng míng lěi luò]
      idiom_meaning: zh_meaning
        .filter((zh) => zh?.includes('解释'))[0]
        ?.replace('[解释]', ''), //extract from ie.[解释]磊落：心地光明坦白。胸怀坦白，正大光明。
      eng_meaning: eng_meaning,
      example: sample[0]?.zh?.trim().split('') ?? [],
      example_pinyin: pinyin(sample[0]?.zh?.trim()!, { type: 'array' }),
      example_meaning: sample[0]?.en ?? '',
    }

    return NextResponse.json(idiom)
  } catch (error) {
    console.log('[Baidu_GET]', error)
    await browser.close()
    return new NextResponse('Internal Error', {
      status: 500,
    })
  } finally {
    await browser.close()
  }
}
// FIXED DynamicServerError
export async function POST(req: NextRequest) {
  return new NextResponse('', {})
}
