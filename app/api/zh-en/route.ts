import { Vocabulary } from '@/lib/types'
import { convertChineseToEnglishPartsOfSpeech, extractIciba } from '@/lib/utils'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const text = searchParams.get('text')

  if (!text || text?.length === 0) {
    return new NextResponse('No params', {
      status: 400,
    })
  }
  const details = {
    q: text,
    le: 'en',
    t: 1,
    client: 'web',
    sign: 'aecdcfcc6337a9eae265d7c44e4cc07e',
    keyfrom: 'webdict',
  }
  const formBody = Object.entries(details)
    .map(
      ([key, value]) =>
        //@ts-ignore
        encodeURIComponent(key) + '=' + encodeURIComponent(value)
    )
    .join('&')

  try {
    //youdao dictionary
    const youdao_dict_url = `https://dict.youdao.com/jsonapi_s?doctype=json&jsonversion=4`
    const options_youdao_dict = {
      method: 'POST',
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent':
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        Referer: 'https://www.youdao.com/',
        Origin: 'https://www.youdao.com',
        Connection: 'keep-alive',
      },
      body: formBody,
    }

    //youdao suggestion dictionary brief
    const youdao_url_brief = `https://dict.youdao.com/suggest?num=5&ver=3.0&doctype=json&cache=false&le=en&q=${text}`
    const options_youdao_brief = {
      method: 'GET',
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/json',
      },
    }

    const fanyi_360_url = `https://fanyi.so.com/index/search?eng=0&validate=&ignore_trans=0&query=${text}`

    const options_360_fanyi = {
      method: 'POST',
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent':
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        Referer: 'https://fanyi.so.com/',
        Origin: 'https://fanyi.so.com',
        Connection: 'keep-alive',
        authority: 'fanyi.so.com',
        pro: 'fanyi',
        'accept-language':
          'en-NZ,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,en-GB;q=0.6,en-US;q=0.5',
      },
    }

    const iciba_url = `https://www.iciba.com/_next/data/dTlbEbttstfo-ZBl63u0M/word.json?w=${text}`
    const options_iciba = {
      method: 'GET',
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/json',
      },
    }

    // Execute the fetch calls simultaneously
    const responses = await Promise.all([
      fetch(fanyi_360_url, options_360_fanyi),
      fetch(youdao_url_brief, options_youdao_brief),
      fetch(youdao_dict_url, options_youdao_dict),
      fetch(iciba_url, options_iciba),
    ])

    // Extract data from responses
    const [
      fanyiResponse,
      youdaoBriefResponse,
      youdaoDictResponse,
      icibaResponse,
    ] = responses

    console.log(
      fanyiResponse,
      youdaoBriefResponse,
      youdaoDictResponse,
      icibaResponse
    )
    let wuguanghua, youdao //youdao dictionary
    try {
      const { wuguanghua: wRes, ce } = await youdaoDictResponse.json()
      if (wRes && wRes.dataList && ce.word) {
        // let wuguanghua
        wuguanghua = wRes.dataList.map((item: any) => ({
          pinyin: item.phone,
          example: item.trs.map((t: any) => ({
            en_meaning: t.tr.en,
            zh_meaning: t.tr.cn ?? '',
            ...(t.sents && {
              sentences: t.sents.map((s: any) => ({
                en: s.en,
                zh: s.cn ?? '',
              })),
            }),
          })),
          source: '《吴光华汉英大辞典》',
        }))
        youdao = {
          pinyin: ce.word.phone,
          example: ce.word.trs.map((item: any) => ({
            en_meaning: item['#text'],
            sentences: item['#tran'],
          })),
          source: '有道词典',
        }
      }
    } catch (error) {
      console.log('[youdao_dict_zh-en_GET]', error)
    }

    let explanation // youdao brief explanation
    try {
      const {
        data: { entries },
      } = await youdaoBriefResponse.json()
      explanation = entries
    } catch (error) {
      console.log('[youdao_brief_zh-en_GET]', error)
    }

    let fanyi360
    try {
      const {
        data: { explain },
      } = await fanyiResponse.json()
      if (explain.newcentury) {
        const { newcentury } = explain

        const pinyins = Object.keys(newcentury).map(
          (item) => newcentury[`${item}`]
        )
        fanyi360 = pinyins.map((pinyin) => ({
          ...(pinyin.entrys && { entries: pinyin.entrys }),
          ...(pinyin.subentry && { subentry: pinyin.subentry }),
        }))[0]

        const f: any = []
        if (fanyi360.entries) {
          fanyi360.entries.map((item: any, index: number) => {
            f.push({
              parts: item.category?.cat
                ? convertChineseToEnglishPartsOfSpeech(
                    item.category?.cat.replaceAll('〈', '').replaceAll('〉', '')
                  )
                : '',
              sentences: item.category?.sense
                .map((se: any) => ({
                  meaning: se.description,
                  example: se.example
                    ? se.example
                        .map((ex: any) => ({
                          cn: ex.source
                            .replaceAll('<b>', '')
                            .replaceAll('</b>', ''),
                          en: ex.target,
                        }))
                        .slice(0, 2)
                    : [],
                }))
                .slice(0, 3),
            })
          })
        }
        if (fanyi360.subentry) {
          fanyi360.subentry.map((item: any, index: number) => {
            f.push({
              parts: item.category?.cat
                ? convertChineseToEnglishPartsOfSpeech(
                    item.category?.cat.replaceAll('〈', '').replaceAll('〉', '')
                  )
                : '',
              sentences: item.category?.sense
                .map((se: any) => ({
                  meaning: se.description,
                  example: se.example
                    ? se.example
                        .map((ex: any) => ({
                          cn: ex.source
                            .replaceAll('<b>', '')
                            .replaceAll('</b>', ''),
                          en: ex.target,
                        }))
                        .slice(0, 2)
                    : [],
                }))
                .slice(0, 3),
            })
          })
        }
        fanyi360 = f.slice(0, 5)
      }
    } catch (error) {
      console.log(error)
      console.log('[fanyi360_zh-en_GET]', error)
    }

    let iciba
    try {
      const {
        pageProps: {
          initialReduxState: {
            word: {
              wordInfo: { baesInfo, new_sentence, bidce },
            },
          },
        },
      } = await icibaResponse.json()

      if (baesInfo && new_sentence && bidce) {
        const { sentences } = new_sentence[0]
        const { example, meaning } = extractIciba(baesInfo, sentences, bidce)
        iciba = {
          sentences: example,
          meaning,
        }
      }
    } catch (error) {
      console.log('[iciba_zh-en_GET]', error)
    }

    const vocabulary: Vocabulary = {
      'brief definition': explanation,
      'dictionary 1': iciba,
      'dictionary 2': youdao,
      'dictionary 3': fanyi360,
      'dictionary 4': wuguanghua,
    }

    return NextResponse.json(vocabulary)

    //Return the content of the data file in json format
  } catch (error) {
    console.log('[zh-en_GET]', error)
    return new NextResponse('Internal Error', {
      status: 500,
    })
  }
}

// FIXED DynamicServerError
export async function POST(req: NextRequest) {
  return new NextResponse('', {})
}
