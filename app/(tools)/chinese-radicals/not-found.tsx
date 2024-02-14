import Image from 'next/image'
import React from 'react'
import NotFoundImg from '/public/images/notfound.svg'
const NotFound = () => {
  return (
    <div className=" container mx-auto py-20 flex flex-col items-center">
      <div className="w-1/3 mx-auto">
        <Image
          src={NotFoundImg}
          width={512}
          height={256}
          alt="ezyChinese error"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
      <h1 className=" text-center w-2/3 tracking-wide text-2xl py-6">
        There&apos;s nothing here...
      </h1>
    </div>
  )
}

export default NotFound
