'use client'
import { Card, CardContent } from '@/components/ui/card'
import { CarouselItem } from '@/components/ui/carousel'
import { Volume2 } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import CarouselItems from './Carousel-items'
import CardContents from './card-contents'

const texts = [
  {
    sentence: '小华:你好!\n小红:你好!',
    image:
      'https://jyemvxshpznmgnzoxuhp.supabase.co/storage/v1/object/public/ezyChinese/hanyu-images/Screenshot%20from%202024-03-01%2010-27-55.png',
    audio:
      'https://jyemvxshpznmgnzoxuhp.supabase.co/storage/v1/object/public/ezyChinese/mp3/nihao-zaijian.mp3'
  }
]
const Text = () => {
  const handleSound = (url: string) => {
    const audio = new Audio(url)
    audio.play()
  }
  return (
    <CarouselItems>
      {texts.map((item, index) => (
        <CarouselItem key={index}>
          <CardContents
            audio={item.audio}
            image={item.image}
            sentence={item.sentence}
          />
        </CarouselItem>
      ))}
    </CarouselItems>
  )
}

export default Text
