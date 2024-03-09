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
import {
  getHanYuMultipleChoiceByChapter,
  getHanYuMultipleChoiceListeningByChapter,
  getHanYuSelectRightPinyinByChapter
} from '@/lib/supabase/api-server'

interface QuizPageProps {
  params: {
    bookId: string
    chapterId: string
  }
}

const QuizPage = async ({ params }: QuizPageProps) => {
  const selectRightPinyin = await getHanYuSelectRightPinyinByChapter(
    `${params.bookId}-${params.chapterId}`
  )

  const multipleChoiceListening =
    await getHanYuMultipleChoiceListeningByChapter(
      `${params.bookId}-${params.chapterId}`
    )
  const multipleChoice = await getHanYuMultipleChoiceByChapter(
    `${params.bookId}-${params.chapterId}`
  )

  return (
    <div className='mx-auto max-w-3xl'>
      <Suspense fallback={null}>
        <Quiz
          select_right_pinyin={selectRightPinyin}
          multiple_choice={multipleChoice}
          multiple_choice_listening={multipleChoiceListening}
        />
      </Suspense>
    </div>
  )
}

export default QuizPage
