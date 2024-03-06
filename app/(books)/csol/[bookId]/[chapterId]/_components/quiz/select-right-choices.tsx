'use client'
import Choice from '@/app/(books)/_components/quiz/choice'
import { Card, CardContent } from '@/components/ui/card'
import React, { Dispatch, useEffect, useState } from 'react'

interface SelectRightChoiceProps {
  quiz: any
  setCurrentCompleted: Dispatch<React.SetStateAction<boolean>>
}

export type SelectRightChoiceCSOL = {
  question: string
  audio: string
  choices: string[]
  right_answer: string
}
const SelectRightChoices = ({
  quiz,
  setCurrentCompleted
}: SelectRightChoiceProps) => {
  const [correctAnswers, setCorrectAnswers] = useState<number>(0) //index of question

  const [select_right_choice] = useState<SelectRightChoiceCSOL[]>(
    quiz.select_right_choice
  )

  useEffect(() => {
    if (correctAnswers === select_right_choice.length) {
      setCurrentCompleted(true)
    }
  }, [correctAnswers, select_right_choice.length, setCurrentCompleted])

  useEffect(() => {
    setCurrentCompleted(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Card className='flex animate-fade-left flex-col items-center justify-center py-4 animate-duration-1000 animate-fill-both animate-ease-in-out'>
      <h1 className='pb-4 text-center'>Select the right choice</h1>
      <CardContent>
        {select_right_choice.map((item, index) => (
          <Choice
            word={item.question}
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

export default SelectRightChoices
