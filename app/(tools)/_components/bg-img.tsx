import BlurBg from '@/components/blur-bg'
import supabaseUrl, { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

interface BgImgProps {
  background_url: string | null | undefined
  hiddenContent: boolean
}
const BgImg = ({ background_url, hiddenContent }: BgImgProps) => {
  return (
    <div className=" fixed top-0 right-0 bottom-0 w-full h-full z-0 ">
      {background_url ? (
        <Image
          className={cn({
            'blur-md': !hiddenContent,
            'blur-none': hiddenContent,
          })}
          src={supabaseUrl(background_url)}
          fill
          alt="ezyChinese radical"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      ) : (
        <BlurBg />
      )}
    </div>
  )
}

export default BgImg
