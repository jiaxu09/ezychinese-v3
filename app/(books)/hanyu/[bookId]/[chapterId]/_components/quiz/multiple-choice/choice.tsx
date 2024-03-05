'use client'
import React, { Dispatch, useState } from 'react'

import ChoiceButton from '../choice-button'
import { HanYuMultipleChoice } from '@/lib/types'

interface ChoiceProps {
  item: HanYuMultipleChoice
  correctAnswers: number
  setCorrectAnswers: Dispatch<React.SetStateAction<number>>
}

const Choice = ({ item, correctAnswers, setCorrectAnswers }: ChoiceProps) => {
  const [selectedChoices, setSelectedChoices] = useState<string[]>([])

  const handleSelectedChoice = (choice: string) => {
    setSelectedChoices([...selectedChoices, choice])
    if (choice === item.rightAnswer) {
      setCorrectAnswers(correctAnswers + 1)
    }
  }
  return (
    <div className='flex flex-col items-center justify-center space-y-4 '>
      <div className='flex items-center justify-center space-x-2 text-lg md:text-3xl'>
        <span>Q:</span> <p>{item.question}</p>
      </div>
      <div className='flex items-center justify-center space-x-8'>
        {item.choices.map((choice, j) => (
          <ChoiceButton
            key={j}
            selectedChoices={selectedChoices}
            choice={choice}
            rightAnswer={item.rightAnswer}
            handleSelectedChoice={handleSelectedChoice}
          />
        ))}
      </div>
    </div>
  )
}

export default Choice
