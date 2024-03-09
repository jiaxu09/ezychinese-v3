import React, { Suspense } from 'react'
import Quiz from './_components/quiz'
import AddButton from './_components/add-button'
import {
  HydrationBoundary,
  QueryClient,
  dehydrate
} from '@tanstack/react-query'

import {
  getCorrectOrderByChapter,
  getFindDifferenceByChapter,
  getFormPhrasesByChapter,
  getRightExplanationByChapter
} from '@/lib/supabase/api-server'

interface QuizProps {
  params: {
    bookId: string
    chapterId: string
  }
}

const QuizPage = async ({ params }: QuizProps) => {
  const queryClient = new QueryClient()
  const correctOrder = await getCorrectOrderByChapter(
    `${params.bookId}-${params.chapterId}`
  )

  const findDifference = await getFindDifferenceByChapter(
    `${params.bookId}-${params.chapterId}`
  )

  const formPhrases = await getFormPhrasesByChapter(
    `${params.bookId}-${params.chapterId}`
  )

  const rightExplanation = await getRightExplanationByChapter(
    `${params.bookId}-${params.chapterId}`
  )

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className='relative mx-auto flex min-h-[80vh] max-w-3xl flex-col '>
        <div className=' absolute bottom-4 right-0 hidden space-x-4 md:flex'>
          <AddButton params={params} />
        </div>
        <Suspense fallback={null}>
          <Quiz
            correct_order={correctOrder}
            find_difference={findDifference}
            form_phrases={formPhrases}
            right_explanation={rightExplanation}
          />
        </Suspense>
      </div>
    </HydrationBoundary>
  )
}

export default QuizPage
