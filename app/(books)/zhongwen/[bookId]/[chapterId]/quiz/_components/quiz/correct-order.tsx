'use client'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import React, { Dispatch, useEffect, useState } from 'react'
import QuestionIndex from './question-index'
import { cn } from '@/lib/utils'
import { X } from 'lucide-react'

interface CorrectOrderProps {
  index: number
  question: string[]
  answer: string
  setCurrentCompleted: Dispatch<React.SetStateAction<boolean>>
  numberOfQuestions: number
}
const CorrectOrder = ({
  question,
  answer,
  index,
  setCurrentCompleted,
  numberOfQuestions
}: CorrectOrderProps) => {
  const [isCompleted, setCompleted] = useState(false)
  const [selectedBtn, setSelectedBtn] = useState<number[]>([])
  const [isIncorrect, setIsIncorrect] = useState(false)

  useEffect(() => {
    const selectedAnswer = selectedBtn.map(i => question[i]).join('')
    if (selectedAnswer === answer) {
      setCompleted(true)
    }
  }, [question, selectedBtn, answer])

  useEffect(() => {
    if (index === numberOfQuestions - 1 && isCompleted) {
      setCurrentCompleted(true)
    }
  }, [index, numberOfQuestions, isCompleted, setCurrentCompleted])

  useEffect(() => {
    setIsIncorrect(false)
    if (question.length === selectedBtn.length && !isCompleted) {
      setIsIncorrect(true)
    }
  }, [isCompleted, question.length, selectedBtn.length])

  return (
    <div className='flex w-full flex-col items-center justify-center gap-6 pb-2 md:w-2/3'>
      <div className='no-scrollbar flex h-16 w-full gap-4 overflow-x-auto overflow-y-hidden pt-4'>
        <QuestionIndex index={index} isCompleted={isCompleted} />
        {selectedBtn?.length > 0 &&
          selectedBtn?.map(n => (
            <Button
              disabled={isCompleted}
              className={cn(
                ' transition-all duration-500',
                selectedBtn.includes(n)
                  ? 'animate-fade-up animate-delay-200 animate-ease-in-out'
                  : ''
              )}
              onClick={() => {
                setSelectedBtn(selectedBtn => {
                  return selectedBtn.filter(x => x !== n)
                })
              }}
              key={n}
              variant='outline'
            >
              {question[n]}
            </Button>
          ))}
        {isIncorrect && (
          <X className='mt-3 h-5 w-5 animate-ping text-destructive animate-duration-1000 animate-twice animate-ease-linear' />
        )}
      </div>
      <Separator />
      <div className='flex flex-wrap items-center justify-start gap-2'>
        {question.map((s, i) => (
          <Button
            className={cn(
              ' transition-all duration-500',
              selectedBtn.includes(i)
                ? 'animate-fade-down animate-reverse animate-ease-in-out'
                : ''
            )}
            disabled={selectedBtn.includes(i) || isCompleted}
            onClick={() =>
              setSelectedBtn(() => {
                return [...selectedBtn, i]
              })
            }
            key={s}
            variant='outline'
          >
            {s}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default CorrectOrder
