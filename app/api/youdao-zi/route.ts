import { IIdiom } from '@/lib/types'
import { convertChineseToEnglishPartsOfSpeech } from '@/lib/utils'
import { NextRequest, NextResponse } from 'next/server'
import { pinyin } from 'pinyin-pro'

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url)
    const text = searchParams.get('text')
    const url = `https://dict.youdao.com/jsonapi_s?doctype=json&jsonversion=4`
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
    const options = {
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
    let sentences, meaning = []
    try {
        const res = await fetch(url, options)
        const { wuguanghua, blng_sents_part } = await res.json()

        if (wuguanghua && blng_sents_part && wuguanghua.dataList && blng_sents_part['sentence-pair']) {
            sentences = blng_sents_part['sentence-pair'].map((item: any, index: number) => (
                {
                    cn: item.sentence,
                    en: item['sentence-translation']
                }
            ))

            meaning = wuguanghua.dataList.map((item: any, index: number) => ({
                pinyin: item.phone,
                explanation: item.trs.map((tr: any) => ({
                    partsOfSpeech: `(${convertChineseToEnglishPartsOfSpeech(tr.pos)})`,
                    en_mean: tr.tr.en,
                }))
            }))
        } else {
            return new NextResponse('Not found', {
                status: 404,
            })
        }



        return NextResponse.json({
            sentences,
            meaning,
        })

        //Return the content of the data file in json format
    } catch (error) {
        console.log('[Youdao-idiom_GET]', error)
        return new NextResponse('Internal Error', {
            status: 500,
        })
    }
}

// FIXED DynamicServerError
export async function POST(req: NextRequest) {
    return new NextResponse('', {})
}
