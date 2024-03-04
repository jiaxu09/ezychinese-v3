'use client'
import React, { Dispatch, useState } from 'react'
import { MultipleChoiceListeningHanyu } from '../multiple-choice-listening'
import { Sparkles, Volume2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import ChoiceButton from '../choice-button'
import { Separator } from '@/components/ui/separator'

interface ChoiceProps {
  item: MultipleChoiceListeningHanyu
  correctAnswers: number
  setCorrectAnswers: Dispatch<React.SetStateAction<number>>
  index: number
}
const Choice = ({
  item,
  correctAnswers,
  setCorrectAnswers,
  index
}: ChoiceProps) => {
  const [selectedChoices, setSelectedChoices] = useState<string[]>([])

  const handleSelectedChoice = (choice: string) => {
    setSelectedChoices([...selectedChoices, choice])
    if (choice === item.rightAnswer) {
      setCorrectAnswers(correctAnswers + 1)
    }
  }

  const handleSound = () => {
    if (item.audio) {
      const audio = new Audio(item.audio)
      audio.play()
    }
  }
  return (
    <div className=' flex flex-col items-center justify-center space-y-4 pb-10'>
      <div className='flex items-center space-x-4'>
        <span>{index + 1}.</span>
        <div className=' cursor-pointer' onClick={handleSound}>
          <Volume2 className='h-8 w-8 animate-pulse text-crayola animate-duration-1000 animate-infinite animate-ease-in-out' />
        </div>
      </div>
      <div className='flex flex-wrap items-center gap-4'>
        {item.choices.map((choice, index) => (
          <ChoiceButton
            key={index}
            selectedChoices={selectedChoices}
            choice={choice}
            rightAnswer={item.rightAnswer}
            handleSelectedChoice={handleSelectedChoice}
          />
        ))}
      </div>
      <Separator />
    </div>
  )
}

export default Choice
