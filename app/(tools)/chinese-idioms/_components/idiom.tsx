'use client'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import React from 'react'
import BgImg from '../../_components/bg-img'
import WaterMark from '../../_components/water-mark'
import { useChineseIdiomEdit } from '@/lib/store/idiomEdit'
import IdiomForm from './idiom-form'
import Image from 'next/image'
import supabaseUrl from '@/lib/utils'

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
        <DialogContent className="sm:max-w-md md:max-w-5xl ">
          <div className=" relative flex flex-col items-center ">
            <div className="w-full h-full  rounded-lg grid grid-rows-2">
              <div className="w-full h-full bg-orange">
                <div className="flex flex-col space-y-4 items-center justify-center py-16 md:py-20 ">
                  <div className="flex items-center gap-4">
                    {name.map((character, index) => (
                      <ruby key={index}>
                        <span className=" py-1 text-2xl md:text-6xl inline-block">
                          {character}
                        </span>
                        <rt className="text-lg text-gray-600  md:text-3xl">
                          {idiom_pinyin[index]}
                        </rt>
                      </ruby>
                    ))}
                  </div>
                  <div className="text-lg md:text-2xl italic">
                    {idiom_meaning}
                  </div>
                </div>
              </div>
              <div className="w-full h-full bg-skyblue flex flex-col items-center justify-start py-12">
                <div className=" text-center flex items-center justify-center gap-4 w-full flex-wrap">
                  {example.map((char, index) => (
                    <ruby key={index}>
                      <span className=" text-lg md:text-5xl inline-block">
                        {char}
                      </span>
                      <rt className="text-lg text-gray-600  md:text-3xl">
                        {example_pinyin[index]}
                      </rt>
                    </ruby>
                  ))}
                </div>
                <p className=" italic text-lg md:text-2xl py-4 text-center leading-relaxed tracking-wider">
                  {example_meaning}
                </p>
              </div>
            </div>
            <WaterMark />
            <BgImg />
            <div className=" absolute top-8 right-14">
              <div className="w-12 md:w-24">
                <Image
                  src={supabaseUrl('images/idiom.webp')}
                  width={188}
                  height={114}
                  alt="ezyChinese idiom"
                  priority
                  sizes="33vw"
                />
              </div>
            </div>
          </div>
        </DialogContent>
      )}
    </Dialog>
  )
}

export default Idiom
