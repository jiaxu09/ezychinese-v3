import React, { Suspense } from 'react'
import Quiz from '../_components/quiz/quiz'
import {
  HydrationBoundary,
  QueryClient,
  dehydrate
} from '@tanstack/react-query'
import {
  useGetHanYuMultipleChoiceByChapter,
  useGetHanYuMultipleChoiceListeningByChapter,
  useGetHanYuSelectRightPinyinByChapter
} from '@/lib/react-query/queries'

interface QuizPageProps {
  params: {
    bookId: string
    chapterId: string
  }
}

const QuizPage = async ({ params }: QuizPageProps) => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(
    useGetHanYuSelectRightPinyinByChapter(
      `${params.bookId}-${params.chapterId}`
    )
  )
  await queryClient.prefetchQuery(
    useGetHanYuMultipleChoiceListeningByChapter(
      `${params.bookId}-${params.chapterId}`
    )
  )
  await queryClient.prefetchQuery(
    useGetHanYuMultipleChoiceByChapter(`${params.bookId}-${params.chapterId}`)
  )
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className='mx-auto max-w-3xl'>
        <Suspense fallback={null}>
          <Quiz bookId={params.bookId} chapterId={params.chapterId} />
        </Suspense>
      </div>
    </HydrationBoundary>
  )
}

export default QuizPage
