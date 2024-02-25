import React, { Suspense } from 'react'
import Quiz from './_components/quiz'
import AddButton from './add-button'
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query'
import {
  useGetCorrectOrderByChapter,
  useGetFindDifferenceByChapter,
  useGetFormPhrasesByChapter,
  useGetRightExplanationByChapter,
} from '@/lib/react-query/queries'

interface QuizProps {
  params: {
    bookId: string
    chapterId: string
  }
}

const QuizPage = async ({ params }: QuizProps) => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(
    useGetCorrectOrderByChapter(`${params.bookId}-${params.chapterId}`)
  )
  await queryClient.prefetchQuery(
    useGetFindDifferenceByChapter(`${params.bookId}-${params.chapterId}`)
  )
  await queryClient.prefetchQuery(
    useGetFormPhrasesByChapter(`${params.bookId}-${params.chapterId}`)
  )
  await queryClient.prefetchQuery(
    useGetRightExplanationByChapter(`${params.bookId}-${params.chapterId}`)
  )

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="relative flex flex-col min-h-[80vh]">
        <div className=" absolute bottom-0 right-0 md:flex justify-end space-x-4 hidden">
          <AddButton params={params} />
        </div>
        <Suspense fallback={null}>
          <Quiz bookId={params.bookId} chapterId={params.chapterId} />
        </Suspense>
      </div>
    </HydrationBoundary>
  )
}

export default QuizPage
