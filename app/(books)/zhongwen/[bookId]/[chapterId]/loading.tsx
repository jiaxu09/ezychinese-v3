import React from 'react'
import Image from 'next/image'
import supabaseUrl from '@/lib/utils'

const Loading = () => {
  return (
    <div className="flex justify-center items-center w-full md:w-2/3 mx-auto ">
      <Image
        src={supabaseUrl('images/loading.svg')}
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
