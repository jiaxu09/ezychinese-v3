'use client'
import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Volume2 } from 'lucide-react'
import Image from 'next/image'

interface CardContentsProps {
  audio: string
  sentence: string
  image: string
}
const CardContents = ({ audio, sentence, image }: CardContentsProps) => {
  const handleSound = (url: string) => {
    const audio = new Audio(url)
    audio.play()
  }
  return (
    <Card>
      <CardContent className='grid h-[60vh] grid-cols-1 place-items-center  gap-4 md:grid-cols-2'>
        <div className='flex flex-col items-center justify-center space-y-4'>
          <div
            aria-label='hanzi sound'
            role='button'
            onClick={() => handleSound(audio)}
          >
            <Volume2 className='h-8 w-8 text-crayola ' />
          </div>

          <p className='whitespace-pre-wrap text-lg leading-[50px] tracking-wider text-gray-600 md:text-[3rem]'>
            {sentence}
          </p>
        </div>
        <div className='relative h-3/4 w-3/4'>
          <Image
            className=' object-contain'
            src={image}
            alt={`ezyChinese ${sentence}`}
            fill
            priority
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
        </div>
      </CardContent>
    </Card>
  )
}

export default CardContents
