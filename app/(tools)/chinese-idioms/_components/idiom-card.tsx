'use client'
import {
  useDeleteChineseIdiom,
  useSaveChineseIdiom
} from '@/lib/react-query/queries'
import React, { useEffect, useState } from 'react'
import WaterMark from '../../_components/water-mark'
import BgImg from '../../_components/bg-img'
import Image from 'next/image'
import supabaseUrl from '@/lib/utils'
import { IIdiom } from '@/lib/types'
import { useUser } from '@/lib/store/user'
import { DialogClose } from '@/components/ui/dialog'

interface IdiomCardProps {
  isSaved: boolean
  id?: string
  name: string[]
  idiom_pinyin: string[]
  idiom_meaning?: string | undefined | null
  example: string[]
  example_pinyin: string[]
  example_meaning: string
}
const IdiomCard = ({
  isSaved,
  id,
  name,
  idiom_pinyin,
  idiom_meaning,
  example,
  example_pinyin,
  example_meaning
}: IdiomCardProps) => {
  const user = useUser(state => state.user)
  const [isSaveIdiom, setSavedIdiom] = useState(false)

  const {
    mutate: saveChineseIdiom,
    error: createdError,
    isPending: createdPeding
  } = useSaveChineseIdiom(name, user?.id)

  const {
    mutate: deleteChineseIdiom,
    error: deleteError,
    isPending: deletePending
  } = useDeleteChineseIdiom(user?.id)

  useEffect(() => {
    setSavedIdiom(isSaved!)
  }, [isSaved])

  const handleSaveIdiom = async () => {
    if (!user) {
      return
    }
    const item: IIdiom = {
      name,
      idiom_pinyin,
      idiom_meaning,
      example,
      example_pinyin,
      example_meaning,
      user_id: user.id
    }
    await saveChineseIdiom(item)
    setSavedIdiom(true)
  }

  const handleRemoveIdiom = async () => {
    if (user) {
      await deleteChineseIdiom(id)
      setSavedIdiom(false)
    }
  }

  return (
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
            <div className='text-lg italic md:text-2xl'>{idiom_meaning}</div>
          </div>
        </div>
        <div className='flex h-full w-full flex-col items-center justify-start bg-skyblue px-2 py-12'>
          <div className=' flex w-full flex-wrap items-center justify-center gap-4 text-center'>
            {example_pinyin?.length > 0 &&
              example?.map((char, index) => (
                <ruby key={index}>
                  <span className=' inline-block text-lg md:text-4xl'>
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
      {user && (
        <div className=' absolute left-14 top-8 cursor-pointer'>
          {isSaveIdiom ? (
            <DialogClose asChild>
              <button type='button' onClick={handleRemoveIdiom}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='h-6 w-6 text-yellow-400'
                >
                  <path d='m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z' />
                </svg>
              </button>
            </DialogClose>
          ) : (
            <div onClick={handleSaveIdiom}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z'
                />
              </svg>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default IdiomCard
