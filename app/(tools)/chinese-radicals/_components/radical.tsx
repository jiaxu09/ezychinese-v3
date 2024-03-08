'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import Image from 'next/image'
import { useChineseRadicalEdit } from '@/lib/store/radicalEdit'
import RadicalForm from './radical-form'
import BgImg from '../../_components/bg-img'
import WaterMark from '../../_components/water-mark'
import supabaseUrl, { rgbDataURL } from '../../../../lib/utils'

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
  id
}: RadicalProps) => {
  const edit = useChineseRadicalEdit(state => state.edit)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>{name}</Button>
      </DialogTrigger>
      {edit ? (
        <DialogContent>
          <div className='container mx-auto bg-popover p-4 '>
            <h2 className=' pb-4 text-center'>Edit Radical</h2>
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
                id
              }}
              action='Edit'
            />
          </div>
        </DialogContent>
      ) : (
        <DialogContent className=' h-[40vh] sm:max-w-md md:h-[85vh] md:max-w-5xl'>
          <div className=' relative flex flex-col items-center '>
            <div className='grid h-full w-full grid-rows-2  rounded-lg'>
              <div className='h-full w-full bg-pastelblue'>
                <div className='grid h-full w-full grid-cols-3'>
                  <div className=' col-span-2 w-full bg-crayola'>
                    <div className=' grid h-full w-full grid-cols-3'>
                      <div className=' col-span-2 flex w-full items-center justify-end '>
                        <div className='relative h-1/2 w-2/3'>
                          {background_url && (
                            <Image
                              className=' object-contain'
                              src={supabaseUrl(background_url)}
                              alt='ezyChinese radical background'
                              fill
                              priority
                              placeholder='blur'
                              blurDataURL={rgbDataURL(216, 222, 233)}
                              sizes='33vw'
                            />
                          )}
                        </div>
                      </div>
                      <div className='flex flex-col items-center justify-center '>
                        <ruby>
                          <span className=' inline-block text-xl md:text-6xl'>
                            {name}
                          </span>
                          {radical_pinyin && (
                            <rt className=' text-lg text-gray-600 md:text-3xl'>
                              {radical_pinyin}
                            </rt>
                          )}
                        </ruby>
                        {radical_meaning && (
                          <p className='text-sm italic md:text-lg'>
                            {radical_meaning}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className='flex w-full items-center justify-center'>
                    <div className='flex items-center justify-center space-x-2 '>
                      {radical_explain?.map((char, index) => (
                        <ruby key={index}>
                          <span className=' inline-block text-lg md:text-xl'>
                            {char}
                          </span>
                          {radical_pinyin && radical_explain_pinyin && (
                            <rt className=' text-lg text-gray-600 md:text-xl'>
                              {radical_explain_pinyin[index]}
                            </rt>
                          )}
                        </ruby>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className='h-full w-full bg-green py-10 md:py-20'>
                <div className='grid grid-cols-4 '>
                  {characters.map((character, index) => (
                    <div key={index}>
                      <div className=' flex flex-col items-center justify-center'>
                        <ruby>
                          <span className=' inline-block text-xl md:text-6xl'>
                            {character}
                          </span>
                          {characters_pinyins && (
                            <rt className=' text-sm text-gray-600 md:text-3xl'>
                              {characters_pinyins[index]}
                            </rt>
                          )}
                        </ruby>
                        {characters_meanings && (
                          <span className='mx-auto flex max-w-30 text-sm italic md:text-lg'>
                            {characters_meanings[index]}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className=' absolute left-4 top-4 md:left-14 md:top-8'>
              <div className=' w-12 md:w-24'>
                <Image
                  src={supabaseUrl('images/radical.webp')}
                  width={188}
                  height={114}
                  alt='ezyChinese idiom'
                  priority
                  sizes='33vw'
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
