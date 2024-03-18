import path from 'path'
import { promises as fs } from 'fs'
import { NextRequest, NextResponse } from 'next/server'
import { stringify } from 'querystring'

export async function GET(req: NextRequest) {
  try {
    const jsonDirectory = path.join(process.cwd(), 'lib')
    //Read the json data file data.json
    const data = await fs.readFile(jsonDirectory + '/idiom.json', 'utf8')

    if (!data) {
      return new NextResponse('Hanzi file not found', {
        status: 404,
      })
    }

    const hanzi = JSON.parse(data)
    let result: any = []
    for (const item of hanzi) {
      await delay(1000)
      console.log(item.word)
      try {
        const url = `https://www.iciba.com/_next/data/dTlbEbttstfo-ZBl63u0M/word.json?w=${item.word}`
        const options = {
          method: 'GET',
          headers: {
            Accept: '*/*',
            'Content-Type': 'application/json',
          },
        }
        const res = await fetch(url, options)
        const {
          pageProps: {
            initialReduxState: {
              word: {
                wordInfo: {
                  baesInfo: { symbols },
                },
              },
            },
          },
        } = await res.json()
        if (symbols) {
          const { parts } = symbols[0]
          const { means } = parts[0]
          const eng_meaning = means[0]
          result.push({ ...item, eng_meaning })
        }
      } catch (error) {
        //   const url = `https://dict.youdao.com/jsonapi_s?doctype=json&jsonversion=4`
        //   const details = {
        //     q: item.word,
        //     le: 'en',
        //     t: 1,
        //     client: 'web',
        //     sign: 'aecdcfcc6337a9eae265d7c44e4cc07e',
        //     keyfrom: 'webdict',
        //   }
        //   const formBody = Object.entries(details)
        //     .map(
        //       ([key, value]) =>
        //         //@ts-ignore
        //         encodeURIComponent(key) + '=' + encodeURIComponent(value)
        //     )
        //     .join('&')
        //   const options = {
        //     method: 'POST',
        //     headers: {
        //       Accept: '*/*',
        //       'Content-Type': 'application/x-www-form-urlencoded',
        //       'User-Agent':
        //         'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        //       Referer: 'https://www.youdao.com/',
        //       Origin: 'https://www.youdao.com',
        //       Connection: 'keep-alive',
        //     },
        //     body: formBody,
        //   }
        try {
          const url = `https://fanyi.so.com/index/search?eng=0&validate=&ignore_trans=0&query=${item.word}`
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

          const res = await fetch(url, options)
          const {
            data: { explain },
          } = await res.json()
          if (explain.newcentury) {
            const { entrys } = explain.newcentury[
              Object.keys(explain.newcentury)[0]
            ]

            const {
              category: { sense },
            } = entrys[0]

            const { description, example } = sense[0]
            const eng_meaning = description
            result.push({ ...item, eng_meaning })
          }
        } catch (error) {}
      }
      console.log(result.length)
    }
    await fs.writeFile(
      jsonDirectory + '/idiom_new.json',
      JSON.stringify(result)
    )
    //Return the content of the data file in json format
    return NextResponse.json(result)
  } catch (error) {
    console.log('[Dictionary_GET]', error)
    return new NextResponse('Internal Error', {
      status: 500,
    })
  }
}

function delay(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time))
}

// FIXED DynamicServerError
export async function POST(req: NextRequest) {
  return new NextResponse('', {})
}
