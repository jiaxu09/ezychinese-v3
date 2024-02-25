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
        sizes="33vw"
        width={1600}
        height={1600}
        placeholder="blur"
        blurDataURL={rgbDataURL(247, 246, 241)}
      />
    </div>
  )
}

export default Loading
