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
        sizes="33vw"
      />
    </div>
  )
}

export default Loading
