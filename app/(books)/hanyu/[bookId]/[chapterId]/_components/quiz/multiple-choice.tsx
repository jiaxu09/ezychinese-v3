'use client'
import React, { Dispatch, useEffect, useState } from 'react'
import Choice from './multiple-choice/choice'
import { Card, CardContent } from '@/components/ui/card'

interface MultipleChoiceProps {
  quiz: any
  setCurrentCompleted: Dispatch<React.SetStateAction<boolean>>
}

export type MultipleChoiceHanyu = {
  question: string
  choices: string[]
  rightAnswer: string
}

const MultipleChoice = ({ quiz, setCurrentCompleted }: MultipleChoiceProps) => {
  const [correctAnswers, setCorrectAnswers] = useState<number>(0) //index of question
  const [multipleChoice_hanyu] = useState<MultipleChoiceHanyu[]>(
    quiz.multipleChoice_hanyu
  )

  useEffect(() => {
    if (correctAnswers === multipleChoice_hanyu.length) {
      setCurrentCompleted(true)
    }
  }, [correctAnswers, multipleChoice_hanyu.length, setCurrentCompleted])

  if (!quiz.hasOwnProperty('multipleChoice_hanyu')) {
    return <></>
  }

  return (
    <Card className='flex animate-fade-left flex-col items-center justify-center py-4 animate-duration-1000 animate-fill-both animate-ease-in-out'>
      <h1 className='pb-4 text-center'>选择哪个是对的</h1>
      <CardContent className='flex flex-col gap-10 '>
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
