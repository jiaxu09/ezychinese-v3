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
          <>
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
          </>
        </DialogContent>
      ) : (
        <DialogContent className="sm:max-w-md md:max-w-5xl h-[70vh] md:h-[85vh] relative">
          <div className=" relative flex flex-col items-center justify-center space-y-8 pb-20 z-10">
            <div className="w-full flex items-center justify-center gap-8">
              <div className="flex flex-col items-center border border-secondary p-4 rounded-lg">
                <ruby>
                  <span className=" text-lg md:text-6xl inline-block">
                    {name}
                  </span>
                  {radical_pinyin && (
                    <rt className=" md:text-3xl">{radical_pinyin}</rt>
                  )}
                </ruby>
                {radical_meaning && (
                  <p className="italic text-sm md:text-lg">{radical_meaning}</p>
                )}
              </div>
              <div className="flex items-center justify-center space-x-2 border border-primary p-8 rounded-full">
                {radical_explain?.map((char, index) => (
                  <ruby key={index}>
                    <span className=" text-lg md:text-xl inline-block">
                      {char}
                    </span>
                    {radical_pinyin && radical_explain_pinyin && (
                      <rt className=" md:text-xl">
                        {radical_explain_pinyin[index]}
                      </rt>
                    )}
                  </ruby>
                ))}
              </div>
            </div>
            <Separator className="my-3 md:my-6 relative"></Separator>
            <div className="flex items-center justify-center gap-20 rounded-lg px-20 py-10 bg-primary/50">
              {characters.map((character, index) => (
                <div key={index}>
                  <div className=" flex flex-col items-center justify-center">
                    <ruby>
                      <span className=" text-lg md:text-6xl inline-block">
                        {character}
                      </span>
                      {characters_pinyins && (
                        <rt className=" text-primary text-sm md:text-3xl">
                          {characters_pinyins[index]}
                        </rt>
                      )}
                    </ruby>
                    {characters_meanings && (
                      <p className="text-wuzzy max-w-20 mx-auto italic text-sm md:text-lg">
                        {' '}
                        {characters_meanings[index]}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className=" absolute top-[5%] right-[10%] w-24">
              <Image
                src="/images/radical.webp"
                width={250}
                height={171}
                alt="ezyChinese radical"
                priority
                sizes="33vw"
              />
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
