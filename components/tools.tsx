import Image from 'next/image'
import React from 'react'
import { Pen, BookOpenText, NotebookPen } from 'lucide-react'
import Link from 'next/link'
import supabaseUrl from '@/lib/utils'

const Tools = () => {
  return (
    <div className="relative w-full py-4 md:pt-16">
      <div className=" relative grid grid-cols-3 md:flex md:flex-col md:items-center md:justify-center">
        <h1 className=" flex flex-col justify-end text-3xl md:text-4xl p-10 md:absolute md:top-10 md:left-16">
          Tools
        </h1>
        <div className=" grid grid-rows-3 md:w-2/3 md:h-52 md:flex md:justify-center md:items-center ">
          <div className=" flex items-center justify-start md:w-1/3 md:h-full lg:translate-x-2 xl:translate-x-20 lg:translate-y-32">
            <Link
              href="/chinese-radicals"
              className=" w-3/4 h-3/4 md:w-2/3 flex flex-col space-y-2 items-center justify-center bg-skyblue rounded-lg shadow-md hover:bg-skyblue/80 "
            >
              <Pen className="w-5 h-5 md:w-8 md:h-8 text-primary" />
              <h1 className=" text-sm md:text-lg text-center font-semibold text-primary ">
                Chinese Radicals
              </h1>
            </Link>
          </div>
          <div className="relative flex items-center justify-center translate-x-6 md:translate-x-0 md:w-1/3 md:h-full md:translate-y-10">
            <Link
              href="/chinese-idioms"
              className="w-3/4 h-3/4 md:w-2/3  flex flex-col items-center justify-center bg-crayola rounded-lg shadow-md rotate-12 hover:bg-crayola/80"
            >
              <BookOpenText className="w-5 h-5 md:w-8 md:h-8  text-primary" />
              <h1 className="text-sm md:text-lg -rotate-12 text-center font-semibold w-2/3 mx-auto text-primary">
                Chinese Idioms
              </h1>
            </Link>
            <div className=" absolute translate-x-16 translate-y-10 md:translate-x-0 md:translate-y-0 md:-bottom-2 md:left-10 ">
              <div className="w-8 h-8 md:w-12 md:h-12 relative">
                <Image
                  src={supabaseUrl('images/circle.webp')}
                  width={48}
                  height={48}
                  alt="circle"
                  priority
                  sizes="33vw"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end translate-x-12 lg:-translate-x-2 xl:-translate-x-20 md:w-1/3 md:h-full ">
            <div className="w-3/4 h-3/4 md:w-2/3 flex flex-col items-center justify-center bg-wuzzy rounded-lg  shadow-md hover:bg-wuzzy/90">
              <NotebookPen className="w-5 h-5 md:w-8 md:h-8  text-primary" />
              <h1 className="text-sm md:text-lg text-center font-semibold  text-primary">
                Pinyin
              </h1>
            </div>
          </div>
        </div>
        <div className="hidden md:flex">
          <Image
            src={supabaseUrl('images/stair-h.webp')}
            width={856}
            height={168}
            quality={75}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="ezyChinese tools"
          />
        </div>
        <div className=" p-2 md:hidden">
          <Image
            src={supabaseUrl('images/stair.webp')}
            width={120}
            height={383}
            quality={75}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="ezyChinese tools"
          />
        </div>
      </div>
    </div>
  )
}

export default Tools
