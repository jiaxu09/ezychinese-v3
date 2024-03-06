import { type Metadata } from 'next'
import React from 'react'
import Quiz from '../_components/quiz/quiz'
import {
  getCSOLOrderWordsByChapter,
  getCSOLSelectRightChoiceByChapter,
  getCSOLSelectWordByChapter
} from '@/lib/supabase/api-server'

interface CSOLQuizProps {
  params: {
    bookId: string
    chapterId: string
  }
}

export async function generateMetadata({
  params
}: CSOLQuizProps): Promise<Metadata> {
  const id = params.bookId

  if (!id) {
    return {}
  }

  return {
    metadataBase: new URL('https://ezychinese.app'),
    title: `CSOL | ${id} - Quiz`,
    description: ''
  }
}

const QuizPage = async ({ params }: CSOLQuizProps) => {
  const select_right_choice = await getCSOLSelectRightChoiceByChapter(
    `${params.bookId}-${params.chapterId}`
  )
  const select_word = await getCSOLSelectWordByChapter(
    `${params.bookId}-${params.chapterId}`
  )
  const order_words = await getCSOLOrderWordsByChapter(
    `${params.bookId}-${params.chapterId}`
  )
  return (
    <main className='mx-auto max-w-3xl '>
      <Quiz
        selectRightChoice={select_right_choice}
        selectWord={select_word}
        orderWords={order_words}
      />
    </main>
  )
}

export default QuizPage
