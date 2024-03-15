import Image from 'next/image'
import React from 'react'
import {
  Pen,
  BookOpenText,
  NotebookPen,
  Search,
  Eraser,
  GalleryHorizontalEnd
} from 'lucide-react'
import Link from 'next/link'
import supabaseUrl, { rgbDataURL } from '@/lib/utils'

const Tools = () => {
  return (
    <div className='relative w-full py-4 md:py-10'>
      <div className=' relative grid grid-cols-3 md:flex md:flex-col md:items-center md:justify-center'>
        <h1 className=' flex flex-col justify-end p-10 text-3xl md:absolute md:left-20 md:top-10 md:text-4xl'>
          Tools
        </h1>
        <div className=' grid grid-rows-3 md:flex md:h-52 md:w-2/3 md:items-center md:justify-center '>
          <div className=' flex items-center justify-start md:h-full md:w-1/3 md:translate-y-32 lg:translate-x-2 xl:translate-x-20'>
            <Link
              href='/chinese-radicals'
              className=' flex h-3/4 w-3/4 flex-col items-center justify-center space-y-2 rounded-lg bg-skyblue shadow-md hover:bg-skyblue/80 md:w-2/3 '
            >
              <Pen className='h-5 w-5 text-primary md:h-8 md:w-8' />
              <h1 className='mx-auto w-2/3 text-center text-sm font-semibold text-primary md:text-lg '>
                Chinese Radicals
              </h1>
            </Link>
          </div>
          <div className='relative flex translate-x-6 items-center justify-center md:h-full md:w-1/3 md:translate-x-0 md:translate-y-10'>
            <Link
              href='/chinese-idioms'
              className='flex h-3/4 w-3/4  rotate-12 flex-col items-center justify-center rounded-lg bg-crayola shadow-md hover:bg-crayola/80 md:w-2/3'
            >
              <BookOpenText className='h-5 w-5 -rotate-12 text-primary md:h-8  md:w-8' />
              <h1 className='mx-auto w-2/3 -rotate-12 text-center text-sm font-semibold text-primary md:text-lg'>
                Chinese Idioms
              </h1>
            </Link>
            <div className=' absolute translate-x-16 translate-y-10 md:-bottom-2 md:left-10 md:translate-x-0 md:translate-y-0 '>
              <div className='relative h-8 w-8 md:h-10 md:w-10'>
                <Image
                  src={supabaseUrl('images/circle.webp')}
                  width={48}
                  height={48}
                  alt='circle'
                  priority
                  sizes='33vw'
                />
              </div>
            </div>
          </div>
          <div className='flex translate-x-12 items-center justify-end md:h-full md:w-1/3 lg:-translate-x-2 xl:-translate-x-20 '>
            <Link
              href='/pinyin/initials'
              className='flex h-3/4 w-3/4 flex-col items-center justify-center rounded-lg bg-green shadow-md hover:bg-green/80 md:w-2/3'
            >
              <NotebookPen className='h-5 w-5 text-primary md:h-8  md:w-8' />
              <h1 className='text-center text-sm font-semibold text-primary  md:text-lg'>
                Pinyin
              </h1>
            </Link>
          </div>
        </div>
        <div className='hidden md:flex'>
          <div className='relative h-[168px] w-[1200px]'>
            <Image
              className=' object-contain'
              src={supabaseUrl('images/stair-h.webp')}
              fill
              quality={75}
              placeholder='blur'
              blurDataURL={rgbDataURL(248, 247, 242)}
              priority
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              alt='ezyChinese tools'
            />
          </div>
        </div>
        <div className=' p-2 md:hidden'>
          <Image
            src={supabaseUrl('images/stair.webp')}
            width={180}
            height={575}
            quality={75}
            priority
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            alt='ezyChinese tools'
          />
        </div>
      </div>
      <div className='relative grid  grid-cols-3 md:flex md:flex-col md:items-center md:justify-center'>
        <h1 className=' flex -translate-y-72 translate-x-0 flex-col justify-end p-10 text-3xl md:absolute md:left-20 md:top-10 md:hidden md:text-4xl'>
          Tools
        </h1>

        <div className=' grid grid-rows-3 md:flex md:h-52 md:w-2/3 md:items-center md:justify-center '>
          <div className='flex translate-x-12 items-center justify-end md:h-full md:w-1/3 md:-translate-x-16 lg:-translate-x-16 xl:-translate-x-10 '>
            <Link
              href='/vocabulary'
              className='flex h-3/4 w-3/4 flex-col items-center justify-center rounded-lg bg-green shadow-md hover:bg-green/80 md:w-2/3'
            >
              <Search className='h-5 w-5 text-primary md:h-8  md:w-8' />
              <h1 className='text-center text-sm font-semibold text-primary  md:text-lg'>
                Vocabulary
              </h1>
            </Link>
          </div>
          <div className='relative flex translate-x-6 items-center justify-center md:h-full md:w-1/3 md:translate-x-0 md:translate-y-10'>
            <Link
              href='/'
              className='flex h-3/4 w-3/4  -rotate-12 flex-col items-center justify-center rounded-lg bg-crayola shadow-md hover:bg-crayola/80 md:w-2/3'
            >
              <Eraser className='h-5 w-5 rotate-12 text-primary md:h-8  md:w-8' />
              <h1 className='mx-auto w-2/3 rotate-12 text-center text-sm font-semibold text-primary md:text-lg'>
                Chinese Strokes
              </h1>
            </Link>
            <div className=' absolute -translate-y-10 translate-x-[60px] md:-bottom-2 md:right-10 md:translate-x-0 md:translate-y-0 '>
              <div className='relative h-8 w-8 md:h-10 md:w-10'>
                <Image
                  src={supabaseUrl('images/circle.webp')}
                  width={48}
                  height={48}
                  alt='circle'
                  priority
                  sizes='33vw'
                />
              </div>
            </div>
          </div>
          <div className=' flex translate-x-2 items-center justify-start md:h-full md:w-1/3 md:translate-x-28 md:translate-y-32 lg:translate-x-20 xl:translate-x-10'>
            <Link
              href='/'
              className=' flex h-3/4 w-3/4 flex-col items-center justify-center space-y-2 rounded-lg bg-skyblue shadow-md hover:bg-skyblue/80 md:w-2/3 '
            >
              <GalleryHorizontalEnd className='h-5 w-5 text-primary md:h-8 md:w-8' />
              <h1 className='mx-auto w-2/3 text-center text-sm font-semibold text-primary md:text-lg '>
                Flashcards
              </h1>
            </Link>
          </div>
        </div>
        <div className='hidden  md:flex'>
          <div className='relative h-[168px] w-[1200px]'>
            <Image
              className=' object-contain'
              src={supabaseUrl('images/stair-h-2.webp')}
              fill
              quality={75}
              placeholder='blur'
              blurDataURL={rgbDataURL(248, 247, 242)}
              priority
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              alt='ezyChinese tools'
            />
          </div>
        </div>
        <div className=' rotate-180 p-2 md:hidden'>
          <Image
            src={supabaseUrl('images/stair-2.webp')}
            width={180}
            height={575}
            quality={75}
            priority
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            alt='ezyChinese tools'
          />
        </div>
      </div>
    </div>
  )
}

export default Tools
