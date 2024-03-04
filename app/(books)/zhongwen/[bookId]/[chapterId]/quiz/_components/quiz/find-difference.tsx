import { Button } from '@/components/ui/button'
import React, { Dispatch, useEffect, useState } from 'react'
import QuestionIndex from './question-index'
import { Sparkles } from 'lucide-react'

interface FindDifferenceProps {
  setCurrentCompleted: Dispatch<React.SetStateAction<boolean>>
  numberOfQuestions: number
  question: string[]
  answer: string
  index: number
}
const FindDifference = ({
  setCurrentCompleted,
  numberOfQuestions,
  question,
  answer,
  index
}: FindDifferenceProps) => {
  const [isCompleted, setIsCompleted] = useState(false)

  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([])

  const handleCheckAnswer = (char: string) => {
    if (char === answer) {
      setIsCompleted(true)
    }
    setSelectedAnswers([...selectedAnswers, char])
  }

  useEffect(() => {
    if (index === numberOfQuestions - 1 && isCompleted) {
      setCurrentCompleted(true)
    }
  }, [index, numberOfQuestions, isCompleted, setCurrentCompleted])

  return (
    <div className='flex w-full flex-col items-center justify-center gap-6 pb-2'>
      <div className='flex w-full flex-wrap items-center justify-center gap-2 py-4 md:gap-6'>
        <QuestionIndex index={index} isCompleted={isCompleted} />
        {question.map(q => (
          <div key={q}>
            <Button
              disabled={selectedAnswers.includes(q) || isCompleted}
              className=' relative'
              onClick={() => handleCheckAnswer(q)}
              variant={
                isCompleted && q == answer
                  ? 'success'
                  : selectedAnswers.includes(q)
                    ? 'destructive'
                    : 'outline'
              }
            >
              {q}
              {isCompleted && q === answer && (
                <Sparkles className='absolute left-0 top-[8%] h-4 w-4 animate-ping text-yellow-300 animate-duration-1000 animate-twice animate-ease-linear' />
              )}
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FindDifference
