import supabaseUrl from '@/lib/utils'
import { Tv } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Videos = () => {
  return (
    <div className="flex flex-col py-4 md:pt-16 bg-foreground">
      <div className="flex items-center justify-center space-x-2">
        <h1 className="  md:pl-28 ">Learning by Watching</h1>
        <Tv className="w-8 h-8 text-destructive" />
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 py-10 gap-10">
        <div className="">
          <Link
            aria-label="ezyChinese Hikaru No Go"
            href="/hikaru-no-go"
            className=" relative w-full bg-white hover:bg-white/20 p-4 border border-primary shadow-sm transition-all duration-300 rounded-lg flex items-center justify-start pl-6 md:pl-10"
          >
            <div className="flex items-center space-x-3">
              <div className=''>
                <ruby>
                  <span className="text-lg md:text-3xl text-gray-600 px-2 inline-block">
                    棋
                  </span>
                  <rt className=" text-lg ">qí</rt>
                </ruby>
                <ruby>
                  <span className="text-lg md:text-3xl text-gray-600 px-2 inline-block">
                    魂
                  </span>
                  <rt className=" text-lg ">hún</rt>
                </ruby>
              </div>
              <div className=" text-sm md:text-xl">(Hikaru No Go)</div>
            </div>
            <div className="w-1/5 absolute right-3 md:right-5">
              <Image
                className=" object-contain rounded-md hover:scale-110 transition-all duration-300"
                src={supabaseUrl('images/qihun.webp')}
                width={220}
                height={330}
                alt="ezyChinese QiHun"
                priority
                sizes="33vw"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Videos
