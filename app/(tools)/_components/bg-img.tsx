import BlurBg from '@/components/blur-bg'
import supabaseUrl, { cn, rgbDataURL } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

const BgImg = () => {
  return (
    <div className=" absolute bottom-5 left-5 w-8 md:w-16 h-8 md:h-16">
      <Image
        className=" "
        src="/images/logo.webp"
        width={350}
        height={350}
        alt="ezyChinese radical"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  )
}

export default BgImg
