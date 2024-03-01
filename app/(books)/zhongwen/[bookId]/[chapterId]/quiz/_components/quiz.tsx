'use client'

import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronRight, MessageCircleWarning } from 'lucide-react'

import WellDone from '@/components/well-done'
import QuizCorrectOrder from './quiz-correct-order'
import QuizRightExplanation from './quiz-right-explanation'
import QuizFormPhrases from './quiz-form-phrases'
import QuizFindDifference from './quiz-find-difference'
import { useQuery } from '@tanstack/react-query'
import {
  useGetCorrectOrderByChapter,
  useGetFindDifferenceByChapter,
  useGetFormPhrasesByChapter,
  useGetRightExplanationByChapter,
} from '@/lib/react-query/queries'
import {
  CorrectOrder,
  FindDifference,
  FormPhrases,
  RightExplanation,
} from '@/lib/types'
import NoContent from '@/components/no-content'

interface QuizProps {
  bookId: string
  chapterId: string
}

type Quiz = {
  correct_order: CorrectOrder[] | undefined
  find_difference: FindDifference[] | undefined
  form_phrases: FormPhrases[] | undefined
  right_explanation: RightExplanation[] | undefined
}

const Quiz = ({ bookId, chapterId }: QuizProps) => {
  const { data: correct_order } = useQuery(
    useGetCorrectOrderByChapter(`${bookId}-${chapterId}`)
  )

  const { data: find_difference } = useQuery(
    useGetFindDifferenceByChapter(`${bookId}-${chapterId}`)
  )

  const { data: form_phrases } = useQuery(
    useGetFormPhrasesByChapter(`${bookId}-${chapterId}`)
  )

  const { data: right_explanation } = useQuery(
    useGetRightExplanationByChapter(`${bookId}-${chapterId}`)
  )

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
      correct_order: correct_order,
      find_difference: find_difference,
      form_phrases: form_phrases,
      right_explanation: right_explanation,
    }
    setQuiz(result)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (quiz && index === Object.keys(quiz).length && currentCompleted) {
      setAllDone(true)
    }
  }, [currentCompleted, index, quiz])

  if (
    quiz &&
    quiz.correct_order?.length === 0 &&
    quiz.find_difference?.length === 0 &&
    quiz.form_phrases?.length === 0 &&
    quiz.right_explanation?.length === 0
  ) {
    return <NoContent />
  }

  return (
    <div className="flex flex-col gap-2 w-full  ">
      {quiz &&
        Object.keys(quiz).map((key, i) => (
          <div className="w-full " key={i}>
            {key === 'correct_order' && index === i && !isAllDone && (
              <QuizCorrectOrder
                quiz={quiz}
                setCurrentCompleted={setCurrentCompleted}
              />
            )}
            {key === 'right_explanation' && index === i && !isAllDone && (
              <QuizRightExplanation
                quiz={quiz}
                setCurrentCompleted={setCurrentCompleted}
              />
            )}
            {key === 'form_phrases' && index === i && !isAllDone && (
              <QuizFormPhrases
                quiz={quiz}
                setCurrentCompleted={setCurrentCompleted}
              />
            )}
            {key === 'find_difference' && index === i && !isAllDone && (
              <QuizFindDifference
                quiz={quiz}
                setCurrentCompleted={setCurrentCompleted}
              />
            )}
          </div>
        ))}

      {isAllDone && (
        <div className="w-2/3 mx-auto">
          <WellDone />
        </div>
      )}
      {quiz && index < Object.keys(quiz).length && currentCompleted && (
        <Button
          onClick={handleProgress}
          variant="default"
          className="animate-fade-up w-1/3 mx-auto text-center my-6"
        >
          Next <ChevronRight className="w-5 h-5 " />
        </Button>
      )}
    </div>
  )
}

export default Quiz
