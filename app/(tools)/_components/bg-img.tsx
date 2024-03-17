import supabaseUrl from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

const BgImg = () => {
  return (
    <div className=" absolute bottom-0 left-5 w-6 md:w-8 h-6 md:h-8">
      <Image
        src={supabaseUrl('images/watermarker_logo.webp')}
        width={180}
        height={163}
        alt="ezyChinese radical"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  )
}

export default BgImg
