'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { SelectOrderWordsValidation } from '@/lib/validation'
import { CSOLSelectOrderWord } from '@/lib/types'
import {
  useAddCSOLOrderWords,
  useDeleteCSOLOrderWords,
  useGetCSOLOrderWordsByChapter
} from '@/lib/react-query/queries'
import { useQuery } from '@tanstack/react-query'

import { uploadFileToStorage } from '@/lib/supabase/api-client'
import CommonForm from '@/app/(books)/_components/form/common-form'
import CollapsibleItems from '@/app/(books)/_components/form/collapsible-items'

interface NewOrderWordsProps {
  bookId: string
  chapterId: string
}

const NewOrderWords = ({ bookId, chapterId }: NewOrderWordsProps) => {
  const [isLoading, setIsLoading] = useState(false)

  const {
    mutate: addCSOLOrderWords,
    error: addError,
    isPending: addPending
  } = useAddCSOLOrderWords(`${bookId}-${chapterId}`)

  const {
    mutate: deleteOrderWord,
    error: deleteError,
    isPending: deletePending
  } = useDeleteCSOLOrderWords(`${bookId}-${chapterId}`)

  const { data: orderWords } = useQuery(
    useGetCSOLOrderWordsByChapter(`${bookId}-${chapterId}`)
  )

  const form = useForm<z.infer<typeof SelectOrderWordsValidation>>({
    resolver: zodResolver(SelectOrderWordsValidation),
    defaultValues: {
      audio: undefined,
      choices: '',
      rightAnswer: '',
      source: `${bookId}-${chapterId}`
    }
  })

  const handleSubmit = async (
    value: z.infer<typeof SelectOrderWordsValidation>
  ) => {
    setIsLoading(true)
    const audioFile = value.audio[0]

    const audio = await uploadFileToStorage(audioFile, 'mp3')

    if (audio) {
      const item: CSOLSelectOrderWord = {
        audio,
        is_selected: false,
        choices: value.choices.split(''),
        right_answer: value.rightAnswer,
        source: value.source
      }

      await addCSOLOrderWords(item)
      form.reset()
    }
    setIsLoading(false)
  }

  const handleDeleteOrderWord = async (id: string) => {
    await deleteOrderWord(id)
  }

  return (
    <div className='flex flex-col gap-2'>
      <Card>
        <CardHeader>
          <CardTitle>New - Order the words</CardTitle>
        </CardHeader>
        <CardContent>
          <CommonForm
            form={form}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
            placeholder_1='ie.吃京喜京欢果糖'
            placeholder_2='ie.京京喜欢吃糖果'
          />
        </CardContent>
      </Card>
      <CollapsibleItems
        items={orderWords}
        property='right_answer'
        deletePending={deletePending}
        handleDelete={handleDeleteOrderWord}
      />
    </div>
  )
}

export default NewOrderWords
