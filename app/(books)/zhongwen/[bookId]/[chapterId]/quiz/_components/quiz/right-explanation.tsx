'use client'
import React, { Dispatch, useEffect, useState } from 'react'
import QuestionIndex from './question-index'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Sparkles } from 'lucide-react'

interface RightExplanationProps {
  sentence: string
  choices: string[]
  answer: string
  question: string
  index: number
  numberOfQuestions: number
  setCurrentCompleted: Dispatch<React.SetStateAction<boolean>>
}
const RightExplanation = ({
  sentence,
  choices,
  answer,
  question,
  index,
  setCurrentCompleted,
  numberOfQuestions
}: RightExplanationProps) => {
  const [isCompleted, setCompleted] = useState(false)

  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([])

  useEffect(() => {
    if (index === numberOfQuestions - 1 && isCompleted) {
      setCurrentCompleted(true)
    }
  }, [index, numberOfQuestions, isCompleted, setCurrentCompleted])

  const handleAnswer = (ci: string) => {
    if (ci === answer) {
      setCompleted(true)
    }
    setSelectedAnswers([...selectedAnswers, ci])
  }

  return (
    <div className='flex w-full flex-col items-center justify-center gap-6 pb-2 '>
      <div className='flex items-center justify-start gap-8'>
        <div className='mb-6'>
          <QuestionIndex index={index} isCompleted={isCompleted} />
        </div>
        <div className=' text-xl '>
          {sentence.split('').map((char, index) => (
            <ruby key={index}>
              {char === question && <span className=' inline-block'>.</span>}

              <rt className=' text-lg md:text-2xl'>{char}</rt>
            </ruby>
          ))}
        </div>
      </div>
      <div className='flex flex-wrap items-center justify-start gap-4 md:justify-center'>
        {choices.map((ci, index) => (
          <div className='flex items-center' key={index}>
            {index === 0 && (
              <span className='mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-crayola'>
                A
              </span>
            )}
            {index === 1 && (
              <span className='mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-skyblue'>
                B
              </span>
            )}
            {index === 2 && (
              <span className='mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-pastelblue'>
                C
              </span>
            )}
            {index === 3 && (
              <span className='mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-pewterblue'>
                D
              </span>
            )}

            <Button
              disabled={selectedAnswers.includes(ci) || isCompleted}
              onClick={() => handleAnswer(ci)}
              className=' relative'
              variant={
                isCompleted && ci == answer
                  ? 'success'
                  : selectedAnswers.includes(ci)
                    ? 'destructive'
                    : 'outline'
              }
            >
              {ci}
              {isCompleted && ci === answer && (
                <Sparkles className='absolute left-0 top-[8%] h-4 w-4 animate-ping text-yellow-300 animate-duration-1000 animate-twice animate-ease-linear' />
              )}
            </Button>
          </div>
        ))}
      </div>
      <Separator />
    </div>
  )
}

export default RightExplanation
