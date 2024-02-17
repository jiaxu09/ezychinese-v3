import path from 'path'
import { promises as fs } from 'fs'
import { NextRequest, NextResponse } from 'next/server'

interface Word {
  word: string
  explanation: string
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const text = searchParams.get('text')

    const jsonDirectory = path.join(process.cwd(), 'lib')
    //Read the json data file data.json
    const data = await fs.readFile(jsonDirectory + '/word.json', 'utf8')

    if (!data) {
      return new NextResponse('word file not found', {
        status: 404,
      })
    }

    const hanzi: Word[] = JSON.parse(data)

    const result = hanzi.filter((item) => item.word === text)
    const { explanation } = result[0]

    //Return the content of the data file in json format
    return NextResponse.json({
      explanation,
    })
  } catch (error) {
    console.log('[EXPLANATION_ERROR]', error)
    return new NextResponse('Internal Error', {
      status: 500,
    })
  }
}

// FIXED DynamicServerError
export async function POST(req: NextRequest) {
  return new NextResponse('', {})
}
