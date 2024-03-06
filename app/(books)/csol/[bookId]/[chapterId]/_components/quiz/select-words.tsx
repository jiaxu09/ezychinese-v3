'use client'

import { Card, CardContent } from '@/components/ui/card'
import React, { Dispatch, useEffect, useState } from 'react'
import CurrentSelectWord from './current_select-word'

interface SelectWordProps {
  quiz: any
  setCurrentCompleted: Dispatch<React.SetStateAction<boolean>>
}

export type SelectWordCSOL = {
  audio: string
  choices: string[]
  right_answer: string
}
const SelectWords = ({ quiz, setCurrentCompleted }: SelectWordProps) => {
  const [correctAnswers, setCorrectAnswers] = useState<number>(0) //index of question
  const [select_word] = useState<SelectWordCSOL[]>(quiz.select_word)

  useEffect(() => {
    setCurrentCompleted(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Card className='flex animate-fade-left flex-col items-center py-4 animate-duration-1000 animate-fill-both animate-ease-in-out'>
      <h1 className='pb-4 text-center'>Select the word you hearing</h1>
      <CardContent className='flex w-[300px] flex-col space-y-4 '>
        <CurrentSelectWord
          item={select_word[correctAnswers]}
          correctAnswers={correctAnswers}
          setCorrectAnswers={setCorrectAnswers}
          totalNumber={select_word.length}
          setCurrentCompleted={setCurrentCompleted}
        />
      </CardContent>
    </Card>
  )
}

export default SelectWords
