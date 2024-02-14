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

interface RadicalProps {
  id: string
  name: string
  radical_pinyin: string | null
  radical_meaning: string | null
  characters: string[]
  characters_pinyins: string[] | null
  characters_meanings: string[] | null
  background_url?: string | null
}

const Radical = ({
  name,
  radical_pinyin,
  radical_meaning,
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
                id,
              }}
              action="Edit"
            />
          </>
        </DialogContent>
      ) : (
        <DialogContent className="sm:max-w-md md:max-w-5xl h-[70vh] md:h-[85vh]">
          <div className="z-10 relative container flex items-center justify-center ">
            <div
              onClick={() => setHidden(!isHidden)}
              className="absolute top-0 left-10 md:top-10 md:left-[12%]"
            >
              <div className=" relative w-2/5 md:w-2/3">
                <Image
                  src="/images/radical.svg"
                  width={226}
                  height={178}
                  alt="ezyChinese radicals"
                  priority
                  sizes="33vw"
                />
              </div>
            </div>

            <div
              className={cn(
                'border rounded-full p-2 md:p-6 text-lg md:text-6xl flex flex-col justify-center items-center bg-white/80',
                {
                  hidden: isHidden,
                }
              )}
            >
              <ruby>
                <span className=" text-lg md:text-6xl inline-block">
                  {name}
                </span>
                {radical_pinyin && (
                  <rt className=" text-primary md:text-3xl">
                    {radical_pinyin}
                  </rt>
                )}
              </ruby>
              {radical_meaning && (
                <p className="italic text-wuzzy text-sm md:text-lg">
                  {radical_meaning}
                </p>
              )}
            </div>
            {characters.map((character, index) => (
              <div
                key={index}
                className={cn(' absolute', {
                  'right-[0%] md:right-[20%]': index === 0,
                  'left-[0%] md:left-[20%]': index === 1,
                  'top-[8%]': index === 2,
                  'bottom-[8%]': index === 3,
                  hidden: isHidden,
                })}
              >
                <Card className=" max-w-sm md:w-[10rem] bg-white/80">
                  <CardContent className="text-sm md:text-3xl p-1 md:px-2">
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
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          <BgImg background_url={background_url} hiddenContent={isHidden} />
          <WaterMark />
        </DialogContent>
      )}
    </Dialog>
  )
}

export default Radical
