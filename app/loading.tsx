import Image from 'next/image'
import React from 'react'

const Loading = () => {
  return (
    <div className="flex items-center justify-center container m-auto">
      <Image
        src="/images/loading.svg"
        width={512}
        height={512}
        alt="ezyChinese loading"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  )
}

export default Loading
