import Image from 'next/image'
import React from 'react'

const Loading = () => {
  return (
    <div className="flex items-center justify-center container m-auto">
      <Image
        src="/images/loading.svg"
        width={512}
        height={512}
        priority
        alt="ezyChinese loading"
      />
    </div>
  )
}

export default Loading
