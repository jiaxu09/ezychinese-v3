'use client'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import Image from 'next/image'
import React, { useState } from 'react'
import BgImg from '../../_components/bg-img'
import WaterMark from '../../_components/water-mark'
import { Separator } from '@/components/ui/separator'
import { useChineseIdiomEdit } from '@/lib/store/idiomEdit'
import IdiomForm from './idiom-form'
import { cn } from '@/lib/utils'

interface IdiomProps {
  background_url: string | null
  example: string[]
  example_meaning: string
  example_pinyin: string[]
  idiom_meaning: string | null
  idiom_pinyin: string[]
  name: string[]
  id: string
}
const Idiom = ({
  background_url,
  example,
  example_meaning,
  example_pinyin,
  idiom_meaning,
  idiom_pinyin,
  name,
  id,
}: IdiomProps) => {
  const edit = useChineseIdiomEdit((state) => state.edit)
  const [isHidden, setHidden] = useState(false) // hide idiom to display background

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">{name.join('')}</Button>
      </DialogTrigger>
      {edit ? (
        <DialogContent>
          <>
            <h2 className=" text-center pb-4">Edit Radical</h2>
            <IdiomForm
              action="Edit"
              idiom={{
                name,
                idiom_meaning,
                idiom_pinyin,
                example,
                example_meaning,
                example_pinyin,
                background_url,
                id,
              }}
            />
          </>
        </DialogContent>
      ) : (
        <DialogContent className="sm:max-w-md md:max-w-5xl h-[70vh] md:h-[85vh]">
          <div className="z-10 relative flex flex-col items-center">
            <div className=" absolute top-0 left-4 md:top-12 md:left-16  md:rotate-45 mx-auto py-1 md:py-2 px-3 rounded-lg text-sm md:text-2xl">
              <div
                className=" relative w-2/5 md:w-4/5 z-20"
                onClick={() => setHidden(!isHidden)}
              >
                <Image
                  src="/images/idiom.svg"
                  width={167}
                  height={135}
                  alt="ezyChinese idiom"
                  priority
                  sizes="33vw"
                />
              </div>
            </div>
            <div
              className={cn('w-full h-full', {
                'bg-white/80': background_url && !isHidden,
                hidden: isHidden,
              })}
            >
              <div className="flex flex-col space-y-4 items-center justify-center py-10">
                <div className="flex items-center gap-4">
                  {name.map((character, index) => (
                    <ruby key={index}>
                      <span className=" text-2xl md:text-6xl inline-block">
                        {character}
                      </span>
                      <rt className="text-lg text-primary md:text-3xl">
                        {idiom_pinyin[index]}
                      </rt>
                    </ruby>
                  ))}
                </div>
                <div className="text-lg md:text-2xl ">{idiom_meaning}</div>
              </div>
              <Separator className="my-6 relative">
                <div className="-translate-y-5 flex items-center justify-center">
                  <div className="w-16 h-16">
                    <Image
                      src="/images/example.svg"
                      width={215}
                      height={145}
                      alt="ezyChinese example"
                    />
                  </div>
                </div>
              </Separator>
              <div className="w-3/4 mx-auto py-2">
                <div className=" flex items-center gap-4 w-full flex-wrap">
                  {example.map((char, index) => (
                    <ruby key={index}>
                      <span className=" text-lg md:text-3xl inline-block">
                        {char}
                      </span>
                      <rt className=" text-primary md:text-2xl">
                        {example_pinyin[index]}
                      </rt>
                    </ruby>
                  ))}
                </div>
                <p className=" text-gray-600 text-lg md:text-2xl py-4 text-center leading-relaxed tracking-wider">
                  {example_meaning}
                </p>
              </div>
            </div>
          </div>
          <BgImg background_url={background_url} hiddenContent={isHidden} />
          <WaterMark />
        </DialogContent>
      )}
    </Dialog>
  )
}

export default Idiom
