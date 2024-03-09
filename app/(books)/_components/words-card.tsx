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

import WordHeader from './word-header'

interface WordsCardProps {
  data: IWords | undefined
}

const WordsCard = ({ data }: WordsCardProps) => {
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
    <Carousel className='mx-auto w-4/5 md:max-w-lg' setApi={setApi}>
      <CarouselContent>
        {data?.words.map((word, index) => (
          <CarouselItem key={index}>
            <Card>
              <CardContent className='grid h-[50vh] grid-rows-3 gap-4 p-8'>
                <WordHeader word={word} />
                {data?.wordsImages[index]?.width && (
                  <div onClick={onClickHandle} className=' relative row-span-2'>
                    <Image
                      priority
                      sizes='33vw'
                      placeholder='blur'
                      blurDataURL={rgbDataURL(216, 222, 233)}
                      className={cn(
                        ' mx-auto w-2/3 cursor-pointer object-contain',
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
