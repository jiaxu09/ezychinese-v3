'use client'
import { Card, CardContent } from '@/components/ui/card'
import React, { Dispatch, useEffect, useState } from 'react'
import Choice from '../../../../../_components/quiz/choice'
import { HanYuMultipleChoiceListening } from '@/lib/types'

interface MultipleChoiceListeningProps {
  quiz: any
  setCurrentCompleted: Dispatch<React.SetStateAction<boolean>>
}

export type MultipleChoiceListeningHanyu = {
  audio: string
  choices: string[]
  rightAnswer: string
}

const MultipleChoiceListening = ({
  quiz,
  setCurrentCompleted
}: MultipleChoiceListeningProps) => {
  const [correctAnswers, setCorrectAnswers] = useState<number>(0) //index of question

  const [multipleChoiceListening_hanyu] = useState<
    HanYuMultipleChoiceListening[]
  >(quiz.multiple_choice_listening)

  useEffect(() => {
    if (correctAnswers === multipleChoiceListening_hanyu.length) {
      setCurrentCompleted(true)
    }
  }, [
    correctAnswers,
    multipleChoiceListening_hanyu.length,
    setCurrentCompleted
  ])

  useEffect(() => {
    setCurrentCompleted(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Card className='flex animate-fade-left flex-col items-center justify-center py-4 animate-duration-1000 animate-fill-both animate-ease-in-out'>
      <h1 className='pb-4 text-center'>听一听,选择哪个是对的</h1>
      <CardContent>
        {multipleChoiceListening_hanyu.map((item, index) => (
          <Choice
            key={index}
            index={index}
            item={item}
            correctAnswers={correctAnswers}
            setCorrectAnswers={setCorrectAnswers}
          />
        ))}
      </CardContent>
    </Card>
  )
}

export default MultipleChoiceListening
