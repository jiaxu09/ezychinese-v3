'use client'
import { Card, CardContent } from '@/components/ui/card'
import React, { Dispatch, useEffect, useState } from 'react'

import { HanYuMultipleChoice } from '@/lib/types'
import Choice from './multiple-choice/choice'

interface MultipleChoiceProps {
  quiz: any
  setCurrentCompleted: Dispatch<React.SetStateAction<boolean>>
}

export type MultipleChoiceHanyu = {
  audio: string
  choices: string[]
  rightAnswer: string
}

const MultipleChoice = ({ quiz, setCurrentCompleted }: MultipleChoiceProps) => {
  const [correctAnswers, setCorrectAnswers] = useState<number>(0) //index of question

  const [multipleChoice_hanyu] = useState<HanYuMultipleChoice[]>(
    quiz.multiple_choice
  )

  useEffect(() => {
    if (correctAnswers === multipleChoice_hanyu.length) {
      setCurrentCompleted(true)
    }
  }, [correctAnswers, multipleChoice_hanyu.length, setCurrentCompleted])

  useEffect(() => {
    setCurrentCompleted(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Card className='flex animate-fade-left flex-col items-center justify-center py-4 animate-duration-1000 animate-fill-both animate-ease-in-out'>
      <h1 className='pb-4 text-center'>Select right answer</h1>
      <CardContent>
        {multipleChoice_hanyu.map((item, index) => (
          <Choice
            key={index}
            item={item}
            correctAnswers={correctAnswers}
            setCorrectAnswers={setCorrectAnswers}
          />
        ))}
      </CardContent>
    </Card>
  )
}

export default MultipleChoice
