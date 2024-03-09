import React from 'react'
import QuizFormTabs from '../_components/quiz-form-tabs'
import {
  HydrationBoundary,
  QueryClient,
  dehydrate
} from '@tanstack/react-query'
import { useGetCorrectOrderByChapter } from '@/lib/react-query/queries'

interface QuizFormProps {
  params: {
    bookId: string
    chapterId: string
  }
}

const QuizFormPage = async ({ params }: QuizFormProps) => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(
    useGetCorrectOrderByChapter(`${params.bookId}-${params.chapterId}`)
  )

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className='grid w-full grid-cols-3 '>
        <div className=' col-span-2'>
          <QuizFormTabs bookId={params.bookId} chapterId={params.chapterId} />
        </div>
      </div>
    </HydrationBoundary>
  )
}

export default QuizFormPage
