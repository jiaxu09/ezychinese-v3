'use client'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext
} from '@/components/ui/quiz-carousel'

import WellDone from '@/components/well-done'
import { cn } from '@/lib/utils'
import { Sparkles } from 'lucide-react'
import React, { useEffect, useState } from 'react'

interface ExercisesProps {
  exercises: {
    type: string
    question: string
    options: string[]
    answer: number
  }[]
}

const Exercises = ({ exercises }: ExercisesProps) => {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)
  const [isDone, setDone] = useState(false)
  const [isNextShow, setNextShow] = useState(false)

  const [selectedOptions, setSelectedOptions] = useState<number[]>([])

  useEffect(() => {
    if (!api) {
      return
    }
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  useEffect(() => {
    setNextShow(false)
    setSelectedOptions([])
  }, [current])

  const handleOption = (index: number, answer: number) => {
    if (!api) {
      return
    }

    setSelectedOptions([...selectedOptions, index])

    if (index + 1 === answer) {
      setNextShow(true)
      if (current === count) setDone(true)
    }
  }

  return (
    <div className='flex w-full items-center'>
      {!isDone && (
        <Carousel
          setApi={setApi}
          opts={{ dragFree: true }}
          className='h-full w-[90%] md:w-full'
        >
          <CarouselContent>
            {exercises.map((item, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className='flex flex-col p-1 md:p-6'>
                    <h3 className=' py-2 text-lg italic '>{item.type} - </h3>
                    <p className='text-lg font-medium md:ml-4'>
                      {item.question}
                    </p>
                    <div className='flex flex-wrap items-center gap-3 py-6 md:ml-6 md:gap-6'>
                      {item.options.map((option, i) => (
                        <button
                          key={i}
                          role='button'
                          aria-label='ezyChinese hanyu'
                          onClick={() => handleOption(i, item.answer)}
                          className={cn(
                            'relative flex cursor-pointer items-center justify-center rounded-lg border border-primary px-4 py-2 text-lg md:text-xl',
                            selectedOptions.includes(i)
                              ? item.answer === i + 1
                                ? 'animate-wiggle bg-success animate-duration-1000 animate-once animate-ease-in-out'
                                : ' bg-red-600'
                              : ''
                          )}
                        >
                          {option}
                          {selectedOptions.includes(i) &&
                            item.answer === i + 1 && (
                              <Sparkles className=' absolute left-1 top-0 animate-ping text-yellow-400 animate-duration-1000 animate-infinite  animate-ease-in-out' />
                            )}
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          {isNextShow && <CarouselNext />}
        </Carousel>
      )}

      {isDone && (
        <div className=' mx-auto w-2/3'>
          <WellDone />
        </div>
      )}
    </div>
  )
}

export default Exercises
