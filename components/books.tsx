import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'
import supabaseUrl from '@/lib/utils'

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
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <Link aria-label="ezyChinese zhongwen" href="/zhongwen">
            <Button variant="default" aria-label="more">
              中文
            </Button>
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
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <Link aria-label="ezyChinese zhongwen" href="/csol">
            <Button variant="default" aria-label="more">
              CSOL
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Books
