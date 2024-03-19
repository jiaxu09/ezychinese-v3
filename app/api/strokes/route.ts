import path from 'path'
import { promises as fs } from 'fs'
import { NextRequest, NextResponse } from 'next/server'
import { Strokes } from '@/lib/types'

export async function GET(req: NextRequest) {
  try {
    const jsonDirectory = path.join(process.cwd(), 'lib')
    //Read the json data file data.json
    const data = await fs.readFile(jsonDirectory + '/strokes.json', 'utf8')

    if (!data) {
      return new NextResponse('Strokes file not found', {
        status: 404,
      })
    }
    const strokes: Strokes = JSON.parse(data)
    //Return the content of the data file in json format
    return NextResponse.json(strokes)
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
