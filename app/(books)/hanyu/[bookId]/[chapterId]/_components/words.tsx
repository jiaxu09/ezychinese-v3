'use client'
import { Card, CardContent } from '@/components/ui/card'
import { CarouselItem } from '@/components/ui/carousel'
import { Volume2 } from 'lucide-react'
import React from 'react'
import CarouselItems from './Carousel-items'

const words = [
  {
    hanzi: '你',
    pinyin: 'ni',
    english: 'you',
    audio:
      'https://jyemvxshpznmgnzoxuhp.supabase.co/storage/v1/object/public/ezyChinese/mp3/ni3.mp3'
  },
  {
    hanzi: '好',
    pinyin: 'hao',
    english: 'good',
    audio:
      'https://jyemvxshpznmgnzoxuhp.supabase.co/storage/v1/object/public/ezyChinese/mp3/hao3.mp3'
  }
]

const Words = () => {
  const handleSound = (url: string) => {
    const audio = new Audio(url)
    audio.play()
  }
  return (
    <CarouselItems>
      {words.map((word, index) => (
        <CarouselItem key={index}>
          <Card>
            <CardContent className='flex flex-col items-center justify-center space-y-4 md:h-[60vh]'>
              <div
                aria-label='hanzi sound'
                role='button'
                onClick={() => handleSound(word.audio)}
              >
                <Volume2 className='h-8 w-8 text-crayola ' />
              </div>
              <ruby>
                <span className=' inline-block text-xl md:text-[6rem]'>
                  {word.hanzi}
                </span>
                <rt className=' text-lg text-gray-600 md:text-[5rem]'>
                  {word.pinyin}
                </rt>
              </ruby>
              <p className=' text-lg text-gray-600 md:text-[3rem]'>
                {word.english}
              </p>
            </CardContent>
          </Card>
        </CarouselItem>
      ))}
    </CarouselItems>
  )
}

export default Words
