import { convertChineseToEnglishPartsOfSpeech } from '@/lib/utils'
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
            wordInfo: { baesInfo, new_sentence, bidce },
          },
        },
      },
    } = await res.json()

    if (!new_sentence) {
      return new NextResponse('Not Found', {
        status: 404,
      })
    }
    const { sentences } = new_sentence[0]

    const example = sentences
      ? sentences.map((sentence: any) => ({
          cn: sentence.cn,
          en: sentence.en,
        }))
      : []

    const { symbols: bisymbols } = bidce

    const meaning_bisymbols = bisymbols.filter(
      (item: any) => item.parts.length > 0
    )

    let meaning
    let meaning_1
    if (meaning_bisymbols.length > 0) {
      meaning_1 = meaning_bisymbols.map((item: any) => ({
        pinyin: item.word_symbol,
        mp3: '',
        explanation: item.parts.map((i: any) => ({
          partsOfSpeech: `(${convertChineseToEnglishPartsOfSpeech(
            i.part_name
          )})`,
          en_mean: i.means[0].word_mean ?? '',
        })),
      }))
    }
    const { symbols } = baesInfo
    const meaning_2 = symbols.map((item: any) => ({
      pinyin: item.word_symbol ?? '',
      mp3: item.symbol_mp3 ?? '',
      explanation: item.parts.map((i: any) => ({
        partsOfSpeech: `(${convertChineseToEnglishPartsOfSpeech(i.part)})`,
        en_mean: i.means.join(';'),
      })),
    }))

    if (
      meaning_2.some((i: any) =>
        i.explanation.some((j: any) => j.partsOfSpeech === '(unknown)')
      )
    ) {
      meaning = meaning_1
    } else {
      meaning = meaning_2
    }

    //Return the content of the data file in json format
    return NextResponse.json({
      sentences: example,
      meaning,
    })
  } catch (error) {
    console.log('[Iciba_GET]', error)
    return new NextResponse('Internal Error', {
      status: 500,
    })
  }
}

// FIXED DynamicServerError
export async function POST(req: NextRequest) {
  return new NextResponse('', {})
}
