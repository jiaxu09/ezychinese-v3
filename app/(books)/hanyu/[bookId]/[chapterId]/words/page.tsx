import { type Metadata } from 'next'
import React from 'react'
import Words from '../_components/words'

interface WordsPageProps {
  params: {
    bookId: string
    chapterId: string
  }
}
export async function generateMetadata({
  params
}: WordsPageProps): Promise<Metadata> {
  const id = params.bookId

  if (!id) {
    return {}
  }

  return {
    metadataBase: new URL('https://ezychinese.app'),
    title: `汉语 第${params.bookId}册 第${params.chapterId}单元`,
    description: '生字'
  }
}

const WordsPage = () => {
  return (
    <div className='flex items-center justify-center '>
      <Words />
    </div>
  )
}

export default WordsPage
