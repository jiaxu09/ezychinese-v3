'use client'

import React, { useEffect, useState } from 'react'

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from '@/components/ui/carousel'
import { IWords } from '@/lib/types'
import Image from 'next/image'
import { cn, rgbDataURL } from '@/lib/utils'

interface WordsCardProps {
    data:IWords | undefined
}

const WordsCard = ({data}:WordsCardProps) => {
  const [api, setApi] = React.useState<CarouselApi>()
  const [revealImage, setRevealImage] = useState(false)

  const onClickHandle = () => {
    setRevealImage(true)
  }

  useEffect(() => {
    if (!api) {
      return
    }

    api.on('select', () => {
      setRevealImage(false)
    })
  }, [api])
  return (
      <Carousel className="w-4/5 mx-auto md:max-w-lg" setApi={setApi}>
        <CarouselContent>
          {data?.words.map((word, index) => (
            <CarouselItem key={index}>
              <Card onClick={onClickHandle}>
                <CardContent className="grid grid-rows-3 h-[50vh] gap-4 p-8">
                  <span className="text-4xl font-semibold row-span-1 text-center">
                    {word}
                  </span>
                  {data?.wordsImages[index]?.width && (
                    <div className=" row-span-2 relative">
                      <Image
                        priority
                        sizes="33vw"
                        placeholder="blur"
                        blurDataURL={rgbDataURL(216, 222, 233)}
                        className={cn(
                          ' object-contain w-2/3 mx-auto cursor-pointer',
                          revealImage ? ' ' : 'blur-lg  '
                        )}
                        src={data.wordsImages[index]?.url}
                        fill
                        alt={`ezyChinese ${word}`}
                      />
                    </div>
                  )}
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
  )
}

export default WordsCard
