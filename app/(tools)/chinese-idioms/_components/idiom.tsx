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
            <div
              onClick={() => setHidden(!isHidden)}
              className="fixed p-2 top-4 left-[10%]  text-center rounded-lg"
            >
              <p className="bg-green rounded-full p-4">Chinese Idiom</p>
            </div>
            <div className="fixed p-2 top-4 right-[10%]  text-center rounded-lg">
              <h3 className=" bg-primary rounded-full p-2">成语</h3>
            </div>

            <div
              className={cn('w-full h-full', {
                'bg-white/80': background_url && !isHidden,
                hidden: isHidden,
              })}
            >
              <div className="flex flex-col space-y-4 items-center justify-center py-4 md:py-10">
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
              <Separator className="my-3 md:my-6 relative"></Separator>
              <div className="w-full md:w-3/4 mx-auto py-2">
                <div className=" flex items-center gap-4 w-full flex-wrap">
                  {example.map((char, index) => (
                    <ruby key={index}>
                      <span className=" text-lg md:text-3xl inline-block">
                        {char}
                      </span>
                      <rt className="text-lg text-primary md:text-2xl">
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
          <BgImg />
          <WaterMark />
        </DialogContent>
      )}
    </Dialog>
  )
}

export default Idiom
