import Image from 'next/image'
import React from 'react'
import { Star } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import supabaseUrl from '@/lib/utils'

const Hero = () => {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 py-4 md:py-10 gap-2">
      <div className="flex flex-col justify-center p-6 md:p-0 w-full md:w-4/5 mx-auto">
        <h1 className=" text-3xl md:text-4xl text-left animate-fade-right animate-once animate-duration-1000 animate-ease-in-out">
          “A man who knows two languages is worth two men.”{' '}
        </h1>
        <p className="text-lg md:text-2xl text-right animate-fade-left animate-once animate-duration-1000 animate-delay-100 animate-ease-in-out">
          {' '}
          - French Proverb
        </p>
      </div>
      <div className="relative w-2/3 md:w-1/2 mx-auto">
        <Image
          src={supabaseUrl('images/hero.webp')}
          width={559}
          height={510}
          alt="ezyChinese Hero "
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <Badge variant="outline" className=" absolute bottom-0 left-0 ">
          Reading
        </Badge>
        <Badge
          variant="outline"
          className=" absolute top-10 md:top-20 -right-10 "
        >
          Writing
        </Badge>
        <Badge variant="outline" className=" absolute top-10 -left-10 ">
          Listening
        </Badge>
        <Badge variant="outline" className=" absolute -bottom-4 right-10 ">
          Speaking
        </Badge>
        <Star className="animate-pulse animate-infinite animate-ease-in-out  w-4 h-4 text-yellow-400 rotate-12 absolute left-0 bottom-32" />
        <Star className="animate-pulse animate-infinite animate-ease-in-out  w-5 h-5 text-yellow-300 rotate-45 absolute right-5 top-32" />
        <Star className="animate-pulse animate-infinite animate-ease-in-out  w-6 h-6 text-yellow-100 rotate-45 absolute right-16 top-2" />
        <Star className="animate-pulse animate-infinite animate-ease-in-out  w-6 h-6 text-yellow-200 rotate-45 absolute right-16 bottom-2" />
      </div>
    </div>
  )
}

export default Hero
