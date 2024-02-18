import React from 'react'
import LoadingImg from '/public/images/loading.svg'
import Image from 'next/image'

const Loading = () => {
  return (
    <div className="flex justify-center items-center w-full ">
      <Image
        src={LoadingImg}
        width={512}
        height={512}
        alt="ezyChinese loading"
        priority
        sizes="33vw"
      />
    </div>
  )
}

export default Loading
