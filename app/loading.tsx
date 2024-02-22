import Image from 'next/image'
import React from 'react'
import LoadingImg from '/public/images/loading.svg'
import { rgbDataURL } from '@/lib/utils'

const Loading = () => {
  return (
    <div className="flex items-center justify-center container m-auto">
      <Image
        src={LoadingImg}
        alt="ezyChinese loading"
        placeholder="blur"
        sizes="33vw"
        blurDataURL={rgbDataURL(216, 222, 233)}
      />
    </div>
  )
}

export default Loading
