import React from 'react'
import Image from 'next/image'
import supabaseUrl from '@/lib/utils'

const Loading = () => {
  return (
    <div className="flex justify-center items-center w-full ">
      <Image
        src={supabaseUrl('images/loading.webp')}
        width={1600}
        height={1600}
        alt="ezyChinese loading"
        priority
        sizes="33vw"
      />
    </div>
  )
}

export default Loading
