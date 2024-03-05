'use client'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import MultipleChoice from './multiple-choice'
import MultipleChoiceListening from './multiple-choice-listening'
import SlecteRightPinyin from './selecte-right-pinyin'
import WellDone from '@/components/well-done'
import NoContent from '@/components/no-content'
import { useSuspenseQueries } from '@tanstack/react-query'
import {
  useGetHanYuMultipleChoiceByChapter,
  useGetHanYuMultipleChoiceListeningByChapter,
  useGetHanYuSelectRightPinyinByChapter
} from '@/lib/react-query/queries'
import {
  HanYuMultipleChoice,
  HanYuMultipleChoiceListening,
  HanYuSelectRightPinyin
} from '@/lib/types'

interface QuizProps {
  bookId: string
  chapterId: string
}

type Quiz = {
  select_right_pinyin?: HanYuSelectRightPinyin[] | undefined
  multiple_choice_listening?: HanYuMultipleChoiceListening[] | undefined
  multiple_choice?: HanYuMultipleChoice[] | undefined
}

const Quiz = ({ bookId, chapterId }: QuizProps) => {
  const [index, setIndex] = useState<number>(0)
  const [currentCompleted, setCurrentCompleted] = useState(false)
  const [isAllDone, setAllDone] = useState(false)
  const [quiz, setQuiz] = useState<Quiz>()
  const [
    { data: select_right_pinyin },
    { data: multiple_choice_listening },
    { data: multiple_choice }
  ] = useSuspenseQueries({
    queries: [
      useGetHanYuSelectRightPinyinByChapter(`${bookId}-${chapterId}`),
      useGetHanYuMultipleChoiceListeningByChapter(`${bookId}-${chapterId}`),
      useGetHanYuMultipleChoiceByChapter(`${bookId}-${chapterId}`)
    ]
  })

  const handleProgress = () => {
    setIndex(index + 1)
  }

  useEffect(() => {
    if (quiz && index === Object.keys(quiz).length && currentCompleted) {
      setAllDone(true)
    }
  }, [currentCompleted, index, quiz])

  useEffect(() => {
    const result: Quiz = {
      ...(select_right_pinyin &&
        select_right_pinyin.length > 0 && {
          select_right_pinyin: select_right_pinyin
        }),
      ...(multiple_choice_listening &&
        multiple_choice_listening.length > 0 && {
          multiple_choice_listening: multiple_choice_listening
        }),
      ...(multiple_choice &&
        multiple_choice.length > 0 && { multiple_choice: multiple_choice })
    }
    setQuiz(result)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (quiz && Object.keys(quiz).length === 0) {
    return <NoContent />
  }
  return (
    <div className='flex w-full flex-col gap-2  '>
      {quiz && Object.keys(quiz)[index] === 'multiple_choice' && (
        <MultipleChoice quiz={quiz} setCurrentCompleted={setCurrentCompleted} />
      )}
      {quiz && Object.keys(quiz)[index] === 'multiple_choice_listening' && (
        <MultipleChoiceListening
          quiz={quiz}
          setCurrentCompleted={setCurrentCompleted}
        />
      )}
      {quiz && Object.keys(quiz)[index] === 'select_right_pinyin' && (
        <SlecteRightPinyin
          quiz={quiz}
          setCurrentCompleted={setCurrentCompleted}
        />
      )}

      {isAllDone && (
        <div className='mx-auto w-2/3'>
          <WellDone />
        </div>
      )}
      {quiz && index < Object.keys(quiz).length && currentCompleted && (
        <Button
          onClick={handleProgress}
          variant='default'
          className='mx-auto my-6 w-1/3 animate-fade-up text-center'
        >
          Next <ChevronRight className='h-5 w-5 ' />
        </Button>
      )}
    </div>
  )
}

export default Quiz
