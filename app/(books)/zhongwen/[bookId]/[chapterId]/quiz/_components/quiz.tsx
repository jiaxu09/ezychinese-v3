'use client'

import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'

import WellDone from '@/components/well-done'
import QuizCorrectOrder from './quiz-correct-order'
import QuizRightExplanation from './quiz-right-explanation'
import QuizFormPhrases from './quiz-form-phrases'
import QuizFindDifference from './quiz-find-difference'

import {
  CorrectOrder,
  FindDifference,
  FormPhrases,
  RightExplanation
} from '@/lib/types'
import NoContent from '@/components/no-content'

interface QuizProps {
  correct_order?: CorrectOrder[] | undefined
  find_difference?: FindDifference[] | undefined
  form_phrases?: FormPhrases[] | undefined
  right_explanation?: RightExplanation[] | undefined
}

type Quiz = {
  correct_order?: CorrectOrder[] | undefined
  find_difference?: FindDifference[] | undefined
  form_phrases?: FormPhrases[] | undefined
  right_explanation?: RightExplanation[] | undefined
}

const Quiz = ({
  correct_order,
  find_difference,
  form_phrases,
  right_explanation
}: QuizProps) => {
  const [quiz, setQuiz] = useState<Quiz>()

  //The type of question
  const [index, setIndex] = useState<number>(0)
  const [currentCompleted, setCurrentCompleted] = useState(false)
  const [isAllDone, setAllDone] = useState(false)

  const handleProgress = () => {
    setIndex(index + 1)
  }

  useEffect(() => {
    const result: Quiz = {
      ...(correct_order &&
        correct_order.length > 0 && { correct_order: correct_order }),
      ...(find_difference &&
        find_difference.length > 0 && { find_difference: find_difference }),
      ...(form_phrases &&
        form_phrases.length > 0 && { form_phrases: form_phrases }),
      ...(right_explanation &&
        right_explanation.length > 0 && {
          right_explanation: right_explanation
        })
    }
    setQuiz(result)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (quiz && index === Object.keys(quiz).length && currentCompleted) {
      setAllDone(true)
    }
  }, [currentCompleted, index, quiz])

  if (quiz && Object.keys(quiz).length === 0) {
    return <NoContent />
  }

  return (
    <div className='flex w-full flex-col gap-2  '>
      {quiz && Object.keys(quiz)[index] === 'correct_order' && (
        <QuizCorrectOrder
          quiz={quiz}
          setCurrentCompleted={setCurrentCompleted}
        />
      )}
      {quiz && Object.keys(quiz)[index] === 'right_explanation' && (
        <QuizRightExplanation
          quiz={quiz}
          setCurrentCompleted={setCurrentCompleted}
        />
      )}
      {quiz && Object.keys(quiz)[index] === 'form_phrases' && (
        <QuizFormPhrases
          quiz={quiz}
          setCurrentCompleted={setCurrentCompleted}
        />
      )}
      {quiz && Object.keys(quiz)[index] === 'find_difference' && (
        <QuizFindDifference
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
