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
  id
}: IdiomProps) => {
  const edit = useChineseIdiomEdit(state => state.edit)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>{name.join('')}</Button>
      </DialogTrigger>
      {edit ? (
        <DialogContent className='animate-fade animate-duration-500'>
          <>
            <h2 className=' pb-4 text-center'>Edit Radical</h2>
            <IdiomForm
              action='Edit'
              idiom={{
                name,
                idiom_meaning,
                idiom_pinyin,
                example,
                example_meaning,
                example_pinyin,
                background_url,
                id
              }}
            />
          </>
        </DialogContent>
      ) : (
        <DialogContent className='animate-fade animate-duration-500 sm:max-w-md md:max-w-5xl '>
          <div className=' relative flex flex-col items-center '>
            <div className='grid h-full  w-full grid-rows-2 rounded-lg'>
              <div className='h-full w-full bg-pastelblue'>
                <div className='flex flex-col items-center justify-center space-y-4 py-16 md:py-20 '>
                  <div className='flex items-center gap-4'>
                    {name.map((character, index) => (
                      <ruby key={index}>
                        <span className=' inline-block py-1 text-2xl md:text-6xl'>
                          {character}
                        </span>
                        <rt className='text-lg text-gray-600  md:text-3xl'>
                          {idiom_pinyin[index]}
                        </rt>
                      </ruby>
                    ))}
                  </div>
                  <div className='text-lg italic md:text-2xl'>
                    {idiom_meaning}
                  </div>
                </div>
              </div>
              <div className='flex h-full w-full flex-col items-center justify-start bg-skyblue py-12'>
                <div className=' flex w-full flex-wrap items-center justify-center gap-4 text-center'>
                  {example.map((char, index) => (
                    <ruby key={index}>
                      <span className=' inline-block text-lg md:text-5xl'>
                        {char}
                      </span>
                      <rt className='text-lg text-gray-600  md:text-3xl'>
                        {example_pinyin[index]}
                      </rt>
                    </ruby>
                  ))}
                </div>
                <p className=' py-4 text-center text-lg italic leading-relaxed tracking-wider md:text-2xl'>
                  {example_meaning}
                </p>
              </div>
            </div>
            <WaterMark />
            <BgImg />
            <div className=' absolute right-14 top-8'>
              <div className='w-12 md:w-24'>
                <Image
                  src={supabaseUrl('images/idiom.webp')}
                  width={188}
                  height={114}
                  alt='ezyChinese idiom'
                  priority
                  sizes='33vw'
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
