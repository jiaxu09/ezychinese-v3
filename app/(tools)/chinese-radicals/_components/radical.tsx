import React from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Card, CardContent } from '@/components/ui/card'
import supabaseUrl, { cn, shimmer, toBase64 } from '@/lib/utils'
import Image from 'next/image'
import { useChineseRadicalEdit } from '@/lib/store/radicalEdit'
import RadicalForm from './radical-form'
import Hero from '/public/images/placeholder.webp'
import BlurBg from '@/components/blur-bg'

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
            <h2 className=" absolute top-0 md:top-20 md:left-20  md:-rotate-45 mx-auto bg-skyblue py-1 md:py-2 px-3 rounded-lg text-sm md:text-2xl">
              Chinese Radical
            </h2>
            <div className=" absolute top-0 left-16 md:top-10 md:left-[12%]">
              <div className=" relative w-1/4 md:w-2/3">
                <Image
                  src="/images/logo1.svg"
                  width={101}
                  height={102}
                  alt="ezyChinese radicals"
                />
              </div>
            </div>
            <div className="border rounded-full p-2 md:p-6 bg-card text-lg md:text-6xl flex flex-col justify-center items-center">
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
                })}
              >
                <Card className=" max-w-sm md:w-[10rem]">
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

          <div className=" fixed top-0 right-0 bottom-0 w-full h-full z-0 ">
            <BlurBg />
          </div>

          <p className=" fixed bottom-10 left-10 font-mono italic text-gray-400 text-xs lg:text-lg">
            faye@ezyChinese
          </p>
          <p className=" fixed top-16 rotate-45 font-mono right-6 italic text-gray-400 text-xs lg:text-lg">
            faye@ezyChinese
          </p>
        </DialogContent>
      )}
    </Dialog>
  )
}

export default Radical
