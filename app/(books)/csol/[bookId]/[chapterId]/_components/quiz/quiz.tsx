'use client'
import NoContent from '@/components/no-content'
import { Button } from '@/components/ui/button'
import WellDone from '@/components/well-done'
import { ChevronRight } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import SelectWord from './select-words'
import OrderWords from './order-words'
import SelectRightChoices from './select-right-choices'
import { CSOLSelectOrderWord, CSOLSelectRightChoice } from '@/lib/types'

interface QuizProps {
  selectRightChoice: CSOLSelectRightChoice[] | undefined
  selectWord: CSOLSelectOrderWord[] | undefined
  orderWords: CSOLSelectOrderWord[] | undefined
}

type Quiz = {
  order_words?: CSOLSelectOrderWord[] | undefined
  select_word?: CSOLSelectOrderWord[] | undefined
  select_right_choice?: CSOLSelectRightChoice[] | undefined
}

const Quiz = ({ selectRightChoice, selectWord, orderWords }: QuizProps) => {
  const [index, setIndex] = useState<number>(0)
  const [currentCompleted, setCurrentCompleted] = useState(false)
  const [isAllDone, setAllDone] = useState(false)

  const [quiz, setQuiz] = useState<Quiz>()

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
      ...(selectRightChoice &&
        selectRightChoice.length > 0 && {
          select_right_choice: selectRightChoice
        }),
      ...(selectWord &&
        selectWord.length > 0 && {
          select_word: selectWord
        }),
      ...(orderWords && orderWords.length > 0 && { order_words: orderWords })
    }
    setQuiz(result)
  }, [orderWords, selectRightChoice, selectWord])

  if (quiz && Object.keys(quiz).length === 0) {
    return <NoContent />
  }
  return (
    <div className='flex w-full flex-col gap-2  '>
      {quiz && Object.keys(quiz)[index] === 'select_right_choice' && (
        <SelectRightChoices
          quiz={quiz}
          setCurrentCompleted={setCurrentCompleted}
        />
      )}
      {quiz && Object.keys(quiz)[index] === 'select_word' && (
        <SelectWord quiz={quiz} setCurrentCompleted={setCurrentCompleted} />
      )}
      {quiz && Object.keys(quiz)[index] === 'order_words' && (
        <OrderWords quiz={quiz} setCurrentCompleted={setCurrentCompleted} />
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
