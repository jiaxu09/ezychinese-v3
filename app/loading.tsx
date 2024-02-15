import { rgbDataURL } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import LoadingImg from '/public/images/loading.svg'

const Loading = () => {
  return (
    <div className="flex items-center justify-center container m-auto">
      <Image
        src={LoadingImg}
        width={512}
        height={512}
        alt="ezyChinese loading"
        priority
        placeholder="blur"
        blurDataURL={rgbDataURL(94, 129, 172)}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  )
}

export default Loading
