'use client'
import CollapsibleItems from '@/app/(books)/_components/form/collapsible-items'
import CommonForm from '@/app/(books)/_components/form/common-form'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  useAddCSOLSelectWord,
  useDeleteCSOLSelectWord,
  useGetCSOLSelectWordByChapter
} from '@/lib/react-query/queries'
import { uploadFileToStorage } from '@/lib/supabase/api-client'
import { CSOLSelectOrderWord } from '@/lib/types'
import { SelectOrderWordsValidation } from '@/lib/validation'
import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

interface NewSelectWordProps {
  bookId: string
  chapterId: string
}

const NewSelectWord = ({ bookId, chapterId }: NewSelectWordProps) => {
  const [isLoading, setIsLoading] = useState(false)

  const {
    mutate: addCSOLSelectWord,
    error: addError,
    isPending: addPending
  } = useAddCSOLSelectWord(`${bookId}-${chapterId}`)

  const {
    mutate: deleteSelectWord,
    error: deleteError,
    isPending: deletePending
  } = useDeleteCSOLSelectWord(`${bookId}-${chapterId}`)

  const { data: selectWord } = useQuery(
    useGetCSOLSelectWordByChapter(`${bookId}-${chapterId}`)
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
        is_selected: true,
        choices: value.choices.split(''),
        right_answer: value.rightAnswer,
        source: value.source
      }
      await addCSOLSelectWord(item)
      form.reset()
    }
    setIsLoading(false)
  }

  const handleDeleteSelectWord = async (id: string) => {
    await deleteSelectWord(id)
  }

  return (
    <div className='flex flex-col gap-2'>
      <Card>
        <CardHeader>
          <CardTitle>New - Select the word</CardTitle>
        </CardHeader>
        <CardContent>
          <CommonForm
            form={form}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
            placeholder_1='ie.吃京喜京欢果糖'
            placeholder_2='ie.喜欢'
          />
        </CardContent>
      </Card>
      <CollapsibleItems
        items={selectWord}
        property='right_answer'
        deletePending={deletePending}
        handleDelete={handleDeleteSelectWord}
      />
    </div>
  )
}

export default NewSelectWord
