import React from 'react'
import Zhongwen from '/public/images/zhongwen.webp'
import CSOL from '/public/images/csol.webp'
import Image from 'next/image'
import { Button } from './ui/button'

const Books = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 w-full pt-6">
      <div className="w-full bg-success py-10">
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="w-2/3 object-container relative flex justify-center">
            <Image
              src={Zhongwen}
              alt="ezyChinese Zhongwen"
              width={415}
              height={215}
              placeholder="blur"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <Button variant="default" aria-label="more">
            more
          </Button>
        </div>
      </div>
      <div className="w-full bg-primary py-10">
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="w-2/3 object-container relative flex justify-center">
            <Image
              src={CSOL}
              alt="ezyChinese CSOL"
              width={333}
              height={215}
              placeholder="blur"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <Button variant="secondary" aria-label="more">
            more
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Books
