import Image from 'next/image'
import React from 'react'

const BgImg = () => {
  return (
    <div className=" absolute bottom-5 left-5 w-8 md:w-16 h-8 md:h-16">
      <Image
        src="/images/watermarker_logo.webp"
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
