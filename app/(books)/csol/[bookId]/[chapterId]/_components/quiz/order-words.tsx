'use client'
import React, { Dispatch, useEffect, useState } from 'react'
import { SelectWordCSOL } from './select-words'
import { Card, CardContent } from '@/components/ui/card'
import CurrentSelectWord from './current_select-word'

interface OrderWordsProps {
  quiz: any
  setCurrentCompleted: Dispatch<React.SetStateAction<boolean>>
}

const OrderWords = ({ quiz, setCurrentCompleted }: OrderWordsProps) => {
  const [correctAnswers, setCorrectAnswers] = useState<number>(0) //index of question
  const [order_words] = useState<SelectWordCSOL[]>(quiz.order_words)

  useEffect(() => {
    setCurrentCompleted(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Card className='flex animate-fade-left flex-col items-center justify-center py-4 animate-duration-1000 animate-fill-both animate-ease-in-out'>
      <h1 className='pb-4 text-center'>Select the word you hearing</h1>
      <CardContent className='flex flex-col space-y-4'>
        <CurrentSelectWord
          item={order_words[correctAnswers]}
          correctAnswers={correctAnswers}
          setCorrectAnswers={setCorrectAnswers}
          totalNumber={order_words.length}
          setCurrentCompleted={setCurrentCompleted}
        />
      </CardContent>
    </Card>
  )
}

export default OrderWords
