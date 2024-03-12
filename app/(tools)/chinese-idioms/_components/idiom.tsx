'use client'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import React from 'react'
import IdiomForm from './idiom-form'
import IdiomCard from './idiom-card'

interface IdiomProps {
  isEdit: boolean
  isSaved: boolean
  background_url?: string | null
  example: string[]
  example_meaning: string
  example_pinyin: string[]
  idiom_meaning?: string | undefined | null
  idiom_pinyin: string[]
  eng_meaning: string
  name: string[]
  id?: string
}
const Idiom = ({
  isEdit,
  background_url,
  example,
  example_meaning,
  example_pinyin,
  idiom_meaning,
  idiom_pinyin,
  eng_meaning,
  name,
  id,
  isSaved
}: IdiomProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>{name.join('')}</Button>
      </DialogTrigger>
      {isEdit ? (
        <DialogContent className='animate-fade animate-duration-500'>
          <>
            <h2 className=' py-4 text-center'>Edit Radical</h2>
            <IdiomForm
              action='Edit'
              idiom={{
                eng_meaning,
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
          <IdiomCard
            isSaved={isSaved}
            id={id}
            name={name}
            idiom_pinyin={idiom_pinyin}
            idiom_meaning={idiom_meaning}
            example={example}
            example_pinyin={example_pinyin}
            example_meaning={example_meaning}
            eng_meaning={eng_meaning}
          />
        </DialogContent>
      )}
    </Dialog>
  )
}

export default Idiom
