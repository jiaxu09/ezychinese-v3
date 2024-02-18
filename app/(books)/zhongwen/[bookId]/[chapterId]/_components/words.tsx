'use client'

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from '@/components/ui/carousel'

import { useGetWordsByChapter } from '@/lib/react-query/queries'
import { cn, rgbDataURL } from '@/lib/utils'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

interface WordsProps {
  bookId: string
  chapterId: string
}
const Words = ({ bookId, chapterId }: WordsProps) => {
  const { data, isFetched } = useQuery(
    useGetWordsByChapter(`${bookId}-${chapterId}`)
  )

  const [api, setApi] = React.useState<CarouselApi>()
  const [revealImage, setRevealImage] = useState(false)

  const onClickHandle = () => {
    setRevealImage(true)
  }

  useEffect(() => {
    if (!api) {
      return
    }
 
    api.on("select", () => {
      setRevealImage(false)
    })
  }, [api])

  if (isFetched && data?.words.length === 0) {
    return (
      <div className=" flex items-center justify-center ">
        <h1 className=" text-primary">
          Coming <span className=" text-crayola">soon</span>{' '}
        </h1>
      </div>
    )
  }
  return (
    <div className="flex items-center justify-center space-y-4">
      <Carousel className="w-4/5 mx-auto md:max-w-lg" setApi={setApi}>
        <CarouselContent>
          {data?.words.map((word, index) => (
            <CarouselItem key={index}>
                <Card onClick={onClickHandle}>
                  <CardContent className="grid grid-rows-3 h-[50vh] gap-4 p-8">
                    <span className="text-4xl font-semibold row-span-1 text-center">{word}</span>
                    {data?.wordsImages[index]?.width && (
                      <div className=' row-span-2 relative'>
                      <Image
                        priority
                        sizes="33vw"
                        placeholder="blur"
                        blurDataURL={rgbDataURL(216, 222, 233)}
                        className={cn(
                          ' object-contain w-2/3 mx-auto cursor-pointer',
                          revealImage 
                          ? ' '
                          : 'blur-lg  '
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
    </div>
  )
}

export default Words
