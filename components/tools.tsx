import Image from 'next/image'
import React from 'react'
import { Pen, BookOpenText, NotebookPen } from 'lucide-react'
import Link from 'next/link'

const Tools = () => {
  return (
    <div className="relative w-full py-4 md:pt-16">
      <div className=" relative grid grid-cols-3 md:flex md:flex-col md:items-center md:justify-center">
        <h1 className=" flex flex-col justify-end text-3xl md:text-4xl p-10 md:absolute md:top-10 md:left-16">
          Tools
        </h1>
        <div className=" grid grid-rows-3 md:w-2/3 md:h-52 md:flex md:justify-center md:items-center ">
          <div className=" flex items-center justify-start md:w-1/3 md:h-full lg:translate-x-2 xl:translate-x-28 lg:translate-y-32">
            <Link
              href="/chinese-radicals"
              className=" w-3/4 h-3/4 md:w-2/3 flex flex-col space-y-2 items-center justify-center bg-info rounded-lg shadow-md hover:bg-info/80"
            >
              <Pen className="w-5 h-5 md:w-8 md:h-8 " />
              <h1 className=" text-sm md:text-lg text-center font-semibold ">
                Chinese Radicals
              </h1>
            </Link>
          </div>
          <div className="flex items-center justify-center translate-x-6 md:translate-x-0 md:w-1/3 md:h-full md:translate-y-10">
            <div className="w-3/4 h-3/4 md:w-2/3  flex flex-col items-center justify-center bg-secondary rounded-lg shadow-md rotate-12">
              <BookOpenText className="w-5 h-5 md:w-8 md:h-8 " />
              <h1 className="text-sm md:text-lg text-center font-semibold w-2/3 mx-auto">
                Chinese Idioms
              </h1>
            </div>
          </div>
          <div className="flex items-center justify-end translate-x-12 lg:-translate-x-2 xl:-translate-x-28 md:w-1/3 md:h-full ">
            <div className="w-3/4 h-3/4 md:w-2/3 flex flex-col items-center justify-center bg-accent rounded-lg  shadow-md hover:bg-white/50">
              <NotebookPen className="w-5 h-5 md:w-8 md:h-8 " />
              <h1 className="text-sm md:text-lg text-center font-semibold ">
                Pinyin
              </h1>
            </div>
          </div>
        </div>
        <div className="hidden md:flex">
          <Image
            className=""
            src="/images/stair-h.svg"
            width={856}
            height={168}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="ezyChinese tools"
          />
        </div>
        <div className=" p-2 md:hidden">
          <Image
            className=""
            src="/images/stair.svg"
            width={120}
            height={383}
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
