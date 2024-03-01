'use client'

import { CarouselItem } from '@/components/ui/carousel'
import React from 'react'
import CarouselItems from './Carousel-items'
import CardContents from './card-contents'

const sentences = [
  {
    sentence: '你好！\n谢谢！\n不客气!\n再见! ',
    audio:
      'https://jyemvxshpznmgnzoxuhp.supabase.co/storage/v1/object/public/ezyChinese/mp3/nihao-zaijian.mp3',
    image:
      'https://jyemvxshpznmgnzoxuhp.supabase.co/storage/v1/object/public/ezyChinese/hanyu-images/Screenshot%20from%202024-03-01%2009-21-16.png'
  },
  {
    sentence:
      '我是王小华.\n他是我爸爸.\n她是我妈妈.\n我爱妈妈.\n妈妈爱我.\n我爱爸爸妈妈. ',
    audio:
      'https://jyemvxshpznmgnzoxuhp.supabase.co/storage/v1/object/public/ezyChinese/mp3/nihao-zaijian.mp3',
    image:
      'https://jyemvxshpznmgnzoxuhp.supabase.co/storage/v1/object/public/ezyChinese/hanyu-images/Screenshot%20from%202024-03-01%2009-27-16.png'
  }
]

const Sentences = () => {
  return (
    <CarouselItems>
      {sentences.map((item, index) => (
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

export default Sentences
