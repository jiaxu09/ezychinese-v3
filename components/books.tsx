import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import supabaseUrl, { rgbDataURL } from '@/lib/utils'
import { ChevronRight } from 'lucide-react'

const Books = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 w-full pt-6">
      <div className="w-full bg-crayola py-10">
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="w-2/3 object-container relative flex justify-center">
            <Image
              src={supabaseUrl('images/zhongwen.webp')}
              width={415}
              height={215}
              alt="ezyChinese Zhongwen"
              priority
              placeholder="blur"
              blurDataURL={rgbDataURL(235, 202, 137)}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <Link
            aria-label="ezyChinese zhongwen"
            href="/zhongwen"
            className="group flex items-center space-x-2 text-primary hover:text-primary/80"
          >
            explore all books{' '}
            <ChevronRight className=" group-hover:scale-75 transition-all duration-500" />
          </Link>
        </div>
      </div>
      <div className="w-full bg-pastelblue py-10">
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="w-2/3 object-container relative flex justify-center">
            <Image
              src={supabaseUrl('images/csol.webp')}
              width={333}
              height={215}
              alt="ezyChinese CSOL"
              priority
              placeholder="blur"
              blurDataURL={rgbDataURL(93, 129, 172)}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <Link
            className="group flex items-center space-x-2 text-primary hover:text-primary/80"
            aria-label="ezyChinese zhongwen"
            href="/csol"
          >
            explore all books{' '}
            <ChevronRight className=" group-hover:scale-75 transition-all duration-500" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Books
