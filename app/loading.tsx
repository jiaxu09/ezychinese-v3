import Image from 'next/image'
import React from 'react'
import supabaseUrl, { rgbDataURL } from '@/lib/utils'

const Loading = () => {
  return (
    <div className="flex items-center justify-center container m-auto">
      <Image
        className="w-full md:w-1/3 mx-auto"
        src={supabaseUrl('images/loading.svg')}
        alt="ezyChinese loading"
        placeholder="blur"
        sizes="33vw"
        width={1600}
        height={1600}
        blurDataURL={rgbDataURL(216, 222, 233)}
      />
    </div>
  )
}

export default Loading
