import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import supabaseUrl, { rgbDataURL } from '@/lib/utils'
import { ChevronRight } from 'lucide-react'

const Books = () => {
  return (
    <div className=' grid w-full grid-cols-1 pt-6 md:grid-cols-2'>
      <div className='w-full bg-crayola py-10'>
        <div className='flex flex-col items-center justify-center space-y-2'>
          <div className='object-container relative flex w-2/3 justify-center'>
            <Image
              src={supabaseUrl('images/zhongwen.webp')}
              width={315}
              height={163}
              alt='ezyChinese Zhongwen'
              priority
              // placeholder="blur"
              // blurDataURL={rgbDataURL(235, 202, 137)}
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            />
          </div>
          <Link
            aria-label='ezyChinese zhongwen'
            href='/zhongwen'
            className='group flex items-center space-x-2 text-primary hover:text-primary/80'
          >
            explore all books{' '}
            <ChevronRight className=' transition-all duration-500 group-hover:scale-75' />
          </Link>
        </div>
      </div>
      <div className='w-full bg-pewterblue py-10'>
        <div className='flex flex-col items-center justify-center space-y-2'>
          <div className='object-container relative flex w-2/3 justify-center'>
            <Image
              src={supabaseUrl('images/csol.webp')}
              width={289}
              height={162}
              alt='ezyChinese CSOL'
              priority
              // placeholder="blur"
              // blurDataURL={rgbDataURL(143, 188, 187)}
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            />
          </div>
          <Link
            className='group flex items-center space-x-2 text-primary hover:text-primary/80'
            aria-label='ezyChinese zhongwen'
            href='/csol'
          >
            explore all books{' '}
            <ChevronRight className=' transition-all duration-500 group-hover:scale-75' />
          </Link>
        </div>
      </div>
      <div className='w-full bg-green py-10'>
        <div className='flex flex-col items-center justify-center space-y-2'>
          <div className='object-container relative flex w-2/3 justify-center'>
            <Image
              src={supabaseUrl('images/hanyu.webp')}
              width={304}
              height={163}
              alt='ezyChinese HanYu'
              priority
              // placeholder="blur"
              // blurDataURL={rgbDataURL(163, 180, 140)}
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            />
          </div>
          <Link
            aria-label='ezyChinese zhongwen'
            href='/hanyu'
            className='group flex items-center space-x-2 text-primary hover:text-primary/80'
          >
            explore all books{' '}
            <ChevronRight className=' transition-all duration-500 group-hover:scale-75' />
          </Link>
        </div>
      </div>
      <div className='w-full bg-skyblue py-10'>
        <div className='flex flex-col items-center justify-center space-y-2'>
          <div className='object-container relative flex w-2/3 justify-center'>
            <Image
              src={supabaseUrl('images/others.webp')}
              width={313}
              height={162}
              alt='ezyChinese other books'
              priority
              // placeholder="blur"
              // blurDataURL={rgbDataURL(136, 192, 208)}
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            />
          </div>
          <Link
            className='group flex items-center space-x-2 text-primary hover:text-primary/80'
            aria-label='ezyChinese zhongwen'
            href='/csol'
          >
            explore all books{' '}
            <ChevronRight className=' transition-all duration-500 group-hover:scale-75' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Books
