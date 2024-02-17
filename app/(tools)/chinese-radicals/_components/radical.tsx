'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useChineseRadicalEdit } from '@/lib/store/radicalEdit'
import RadicalForm from './radical-form'
import BgImg from '../../_components/bg-img'
import WaterMark from '../../_components/water-mark'
import { Separator } from '@/components/ui/separator'
import supabaseUrl from '../../../../lib/utils'

interface RadicalProps {
  id: string
  name: string
  radical_pinyin: string | null
  radical_meaning: string | null
  radical_explain: string[] | null
  radical_explain_pinyin: string[] | null
  characters: string[]
  characters_pinyins: string[] | null
  characters_meanings: string[] | null
  background_url?: string | null
}

const Radical = ({
  name,
  radical_pinyin,
  radical_meaning,
  radical_explain,
  radical_explain_pinyin,
  characters,
  characters_pinyins,
  characters_meanings,
  background_url,
  id,
}: RadicalProps) => {
  const edit = useChineseRadicalEdit((state) => state.edit)
  const [isHidden, setHidden] = useState(false) // hide idiom to display background

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">{name}</Button>
      </DialogTrigger>
      {edit ? (
        <DialogContent>
          <div className="container mx-auto p-4 bg-popover ">
            <h2 className=" text-center pb-4">Edit Radical</h2>
            <RadicalForm
              radical={{
                name,
                radical_pinyin,
                radical_meaning,
                characters,
                characters_pinyins,
                characters_meanings,
                background_url,
                radical_explain,
                radical_explain_pinyin,
                id,
              }}
              action="Edit"
            />
          </div>
        </DialogContent>
      ) : (
        <DialogContent className="sm:max-w-md md:max-w-5xl h-[40vh] md:h-[85vh] relative">
          <div className=" relative flex flex-col items-center ">
            <div className="grid grid-rows-2 w-full h-full  rounded-lg">
              <div className="w-full h-full bg-orange">
                <div className="grid grid-cols-3 w-full h-full">
                  <div className=" col-span-2 w-full bg-crayola">
                    <div className=" grid grid-cols-3 w-full h-full">
                      <div className=" col-span-2 w-full flex items-center justify-end ">
                        <div className="w-2/3 relative h-1/2">
                          {background_url && (
                            <Image
                              className=" object-contain"
                              src={supabaseUrl(background_url)}
                              alt="ezyChinese radical background"
                              fill
                              priority
                              sizes="33vw"
                            />
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center ">
                        <ruby>
                          <span className=" text-lg md:text-6xl inline-block">
                            {name}
                          </span>
                          {radical_pinyin && (
                            <rt className=" text-gray-600 md:text-3xl">
                              {radical_pinyin}
                            </rt>
                          )}
                        </ruby>
                        {radical_meaning && (
                          <p className="italic text-sm md:text-lg">
                            {radical_meaning}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex items-center justify-center">
                    <div className="flex items-center justify-center space-x-2 ">
                      {radical_explain?.map((char, index) => (
                        <ruby key={index}>
                          <span className=" text-lg md:text-xl inline-block">
                            {char}
                          </span>
                          {radical_pinyin && radical_explain_pinyin && (
                            <rt className=" text-gray-600 md:text-xl">
                              {radical_explain_pinyin[index]}
                            </rt>
                          )}
                        </ruby>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-full bg-primary py-10 md:py-20">
                <div className="grid grid-cols-4 ">
                  {characters.map((character, index) => (
                    <div key={index}>
                      <div className=" flex flex-col items-center justify-center">
                        <ruby>
                          <span className=" text-lg md:text-6xl inline-block">
                            {character}
                          </span>
                          {characters_pinyins && (
                            <rt className=" text-gray-600 text-sm md:text-3xl">
                              {characters_pinyins[index]}
                            </rt>
                          )}
                        </ruby>
                        {characters_meanings && (
                          <p className="max-w-20 mx-auto italic text-sm md:text-lg">
                            {' '}
                            {characters_meanings[index]}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className=" absolute top-4 left-4 md:top-8 md:left-14">
              <div className=" w-12 md:w-24">
                <Image
                  src="/images/radical.webp"
                  width={188}
                  height={114}
                  alt="ezyChinese idiom"
                  priority
                  sizes="33vw"
                />
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

export default Radical
