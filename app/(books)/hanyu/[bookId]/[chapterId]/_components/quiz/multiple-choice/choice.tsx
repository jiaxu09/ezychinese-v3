'use client'
import React, { Dispatch, useState } from 'react'
import { MultipleChoiceHanyu } from '../multiple-choice'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Sparkles } from 'lucide-react'

interface ChoiceProps {
  item: MultipleChoiceHanyu
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
          <Button
            aria-label='ezyChinese hanyu'
            variant='outline'
            disabled={selectedChoices.includes(choice)}
            onClick={() => handleSelectedChoice(choice)}
            className={cn(
              'relative flex cursor-pointer items-center justify-center rounded-lg border border-primary p-6 text-xl',
              selectedChoices.includes(choice)
                ? choice === item.rightAnswer
                  ? 'animate-bounce bg-green animate-duration-1000 animate-once animate-ease-in-out'
                  : ' bg-destructive'
                : ''
            )}
            key={j}
          >
            {choice}
            {selectedChoices.includes(choice) &&
              choice === item.rightAnswer && (
                <Sparkles className=' absolute left-1 top-0 animate-ping text-yellow-400 animate-duration-1000 animate-infinite  animate-ease-in-out' />
              )}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default Choice
