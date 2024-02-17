import React from 'react'
import LoadingImg from '/public/images/loading.svg'
import Image from 'next/image'
import { rgbDataURL } from '@/lib/utils'

const Loading = () => {
  return (
    <div className="flex justify-center items-center py-8">
      <div className="w-2/3 mx-auto">
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
    </div>
  )
}

export default Loading
