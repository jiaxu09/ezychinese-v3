'use client'
import React, { Dispatch, useEffect, useState } from 'react'
import { SelectWordCSOL } from './select-words'
import { ChevronRight, Volume2, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import supabaseUrl, { cn } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'

interface CurrentSelectWordProps {
  item: SelectWordCSOL
  correctAnswers: number
  setCorrectAnswers: Dispatch<React.SetStateAction<number>>
  totalNumber: number
  setCurrentCompleted: Dispatch<React.SetStateAction<boolean>>
}

const CurrentSelectWord = ({
  item,
  correctAnswers,
  setCorrectAnswers,
  totalNumber,
  setCurrentCompleted
}: CurrentSelectWordProps) => {
  const [selectedWords, setSelectedWords] = useState<
    { word: string; index: number }[]
  >([])
  const [isCompleted, setIsCompleted] = useState(false)
  const [isWrongAnswer, setIsWrongAnswer] = useState(false)

  const handleSound = () => {
    if (item.audio) {
      const audio = new Audio(supabaseUrl(item.audio))
      audio.play()
    }
  }

  const handleCheckAnswer = () => {
    const concatenatedWords = selectedWords.map(item => item.word).join('')
    if (concatenatedWords === item.right_answer) {
      setIsCompleted(true)
      if (correctAnswers === totalNumber - 1 && !isWrongAnswer) {
        setCurrentCompleted(true)
      }
    } else {
      setIsWrongAnswer(true)
    }
  }

  useEffect(() => {
    setIsWrongAnswer(false)
  }, [selectedWords])

  useEffect(() => {
    setSelectedWords([])
    setIsCompleted(false)
  }, [correctAnswers])

  return (
    <div className='flex flex-col space-y-4'>
      <div className='my-2 flex h-16 flex-col'>
        <div className='cursor-pointer py-1' onClick={handleSound}>
          <Volume2 className=' h-8 w-8 text-crayola ' />
        </div>
        <div className='flex items-center space-x-4'>
          {selectedWords?.length > 0 &&
            selectedWords?.map((word, index) => (
              <Button
                disabled={isCompleted}
                className={cn(
                  ' transition-all duration-500',
                  selectedWords.includes(word)
                    ? 'animate-fade-up animate-delay-100 animate-ease-in-out'
                    : ''
                )}
                onClick={() => {
                  setSelectedWords(selectedWords => {
                    return selectedWords.filter(x => x !== word)
                  })
                }}
                key={index}
                variant='outline'
              >
                {word.word}
              </Button>
            ))}
        </div>
      </div>
      <Separator />
      <div className='flex items-center space-x-4'>
        {item.choices.map((choice, index) => (
          <Button
            className={cn(
              ' transition-all duration-300',
              selectedWords.some(
                item => item.word === choice && item.index === index
              )
                ? 'animate-fade-down animate-reverse animate-ease-in-out'
                : ''
            )}
            disabled={
              selectedWords.some(
                item => item.word === choice && item.index === index
              ) || isCompleted
            }
            onClick={() =>
              setSelectedWords(() => {
                return [
                  ...selectedWords,
                  {
                    word: choice,
                    index
                  }
                ]
              })
            }
            key={index}
            variant='outline'
          >
            {choice}
          </Button>
        ))}
        {isWrongAnswer && (
          <X className='mt-3 h-5 w-5 animate-ping text-destructive animate-duration-1000 animate-twice animate-ease-linear' />
        )}
      </div>

      <div
        onClick={() => setCorrectAnswers(correctAnswers + 1)}
        className={cn(
          'flex w-full animate-pulse justify-end',
          isCompleted && correctAnswers < totalNumber - 1
            ? ' visible'
            : ' invisible'
        )}
      >
        <Button className=' rounded-full' variant='outline' size='icon'>
          <ChevronRight />
        </Button>
      </div>

      <Button
        disabled={isCompleted}
        variant={isCompleted ? 'success' : 'default'}
        onClick={handleCheckAnswer}
      >
        {isCompleted ? 'Well-Done' : 'Check Answer'}
      </Button>
    </div>
  )
}

export default CurrentSelectWord
