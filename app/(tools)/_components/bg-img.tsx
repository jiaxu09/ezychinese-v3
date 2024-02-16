import BlurBg from '@/components/blur-bg'
import supabaseUrl, { cn, rgbDataURL } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

const BgImg = () => {
  return (
    <div className=" fixed top-0 right-0 bottom-0 w-full h-full z-0 ">
      <div className=" backdrop-blur-lg flex items-center justify-center w-full h-full">
        <Image
          className=" blur-sm"
          src="/images/watermark_logo.webp"
          width={350}
          height={350}
          alt="ezyChinese radical"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  )
}

export default BgImg
