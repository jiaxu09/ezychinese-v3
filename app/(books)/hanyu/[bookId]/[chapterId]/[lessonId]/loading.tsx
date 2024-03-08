import React from 'react'
import Image from 'next/image'
import supabaseUrl, { rgbDataURL } from '@/lib/utils'

const Loading = () => {
  return (
    <div className="flex justify-center items-center w-full md:w-2/5 mx-auto">
      <Image
        src={supabaseUrl('images/loading.svg')}
        width={1600}
        height={1600}
        alt="ezyChinese loading"
        priority
        sizes="33vw"
        placeholder="blur"
        blurDataURL={rgbDataURL(247, 246, 241)}
      />
    </div>
  )
}

export default Loading
