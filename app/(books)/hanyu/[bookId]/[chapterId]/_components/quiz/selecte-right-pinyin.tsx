'use client'
import { Card, CardContent } from '@/components/ui/card'
import React, { Dispatch, useEffect, useState } from 'react'
import Choice from '../../../../../_components/quiz/choice'

interface SelecteRightPinyinProps {
  quiz: any
  setCurrentCompleted: Dispatch<React.SetStateAction<boolean>>
}

export type SelecteRightPinyinHanyu = {
  audio: string
  choices: string[]
  right_answer: string
}

const SlecteRightPinyin = ({
  quiz,
  setCurrentCompleted
}: SelecteRightPinyinProps) => {
  const [correctAnswers, setCorrectAnswers] = useState<number>(0)

  const [selectedRightPinyin_hanyu] = useState<SelecteRightPinyinHanyu[]>(
    quiz.select_right_pinyin
  )
  useEffect(() => {
    setCurrentCompleted(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (correctAnswers === selectedRightPinyin_hanyu.length) {
      setCurrentCompleted(true)
    }
  }, [correctAnswers, selectedRightPinyin_hanyu.length, setCurrentCompleted])

  return (
    <Card className='flex animate-fade-left flex-col items-center justify-center py-4 animate-duration-1000 animate-fill-both animate-ease-in-out'>
      <h1 className='pb-4 text-center'>选出听到的拼音.</h1>
      <CardContent>
        {selectedRightPinyin_hanyu?.map((item, index) => (
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

export default SlecteRightPinyin
