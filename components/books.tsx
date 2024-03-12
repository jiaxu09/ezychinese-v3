import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import supabaseUrl from '@/lib/utils'
import { ChevronRight } from 'lucide-react'

const Books = () => {
  return (
    <div className='grid w-full grid-cols-1 pt-6 md:grid-cols-2'>
      <div className='w-full bg-crayola py-10'>
        <div className='flex flex-col items-center justify-center space-y-2'>
          <div className=' relative h-44 w-2/3'>
            <Image
              src={supabaseUrl('images/zhongwen.webp')}
              fill
              className='object-contain'
              alt='ezyChinese Zhongwen'
              priority
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
          <div className=' relative h-44 w-2/3'>
            <Image
              src={supabaseUrl('images/csol.webp')}
              fill
              className=' object-contain'
              alt='ezyChinese CSOL'
              priority
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
          <div className='relative h-44 w-2/3'>
            <Image
              src={supabaseUrl('images/hanyu.webp')}
              fill
              className=' object-contain'
              alt='ezyChinese HanYu'
              priority
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
          <div className=' relative h-44 w-2/3 '>
            <Image
              src={supabaseUrl('images/others.webp')}
              fill
              className=' object-contain'
              alt='ezyChinese other books'
              priority
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            />
          </div>
          <Link
            className='group flex items-center space-x-2 text-primary hover:text-primary/80'
            aria-label='ezyChinese zhongwen'
            href='/'
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
