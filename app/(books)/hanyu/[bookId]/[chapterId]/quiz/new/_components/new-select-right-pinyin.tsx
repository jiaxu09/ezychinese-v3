'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { AudioChoiceRightAnswerValidation } from '@/lib/validation'

import { HanYuSelectRightPinyin } from '@/lib/types'
import {
  useAddHanYuSelectRightPinyin,
  useDeleteHanYuSelectRightPinyin,
  useGetHanYuSelectRightPinyinByChapter
} from '@/lib/react-query/queries'
import { useQuery } from '@tanstack/react-query'

import { uploadFileToStorage } from '@/lib/supabase/api-client'
import CollapsibleItems from '@/app/(books)/_components/form/collapsible-items'
import CommonForm from '@/app/(books)/_components/form/common-form'
import ImageDialog from '@/app/(books)/_components/image-dialog'

interface NewSelectRightPinyinProps {
  bookId: string
  chapterId: string
}

const NewSelectRightPinyin = ({
  bookId,
  chapterId
}: NewSelectRightPinyinProps) => {
  const [isLoading, setIsLoading] = useState(false)

  const {
    mutate: addSelectRightPinyin,
    error: addError,
    isPending: addPending
  } = useAddHanYuSelectRightPinyin(`${bookId}-${chapterId}`)

  const {
    mutate: deleteSelectRightPinyin,
    error: deleteError,
    isPending: deletePending
  } = useDeleteHanYuSelectRightPinyin(`${bookId}-${chapterId}`)

  const { data: selectRightPinyin } = useQuery(
    useGetHanYuSelectRightPinyinByChapter(`${bookId}-${chapterId}`)
  )
  const form = useForm<z.infer<typeof AudioChoiceRightAnswerValidation>>({
    resolver: zodResolver(AudioChoiceRightAnswerValidation),
    defaultValues: {
      audio: undefined,
      choices: '',
      rightAnswer: '',
      source: `${bookId}-${chapterId}`
    }
  })

  const handleSubmit = async (
    value: z.infer<typeof AudioChoiceRightAnswerValidation>
  ) => {
    setIsLoading(true)
    const audioFile = value.audio[0]

    const audio = await uploadFileToStorage(audioFile, 'mp3')
    if (audio) {
      const item: HanYuSelectRightPinyin = {
        audio,
        choices: value.choices.split(','),
        right_answer: value.rightAnswer,
        source: value.source
      }
      await addSelectRightPinyin(item)
      form.reset()
    }
    setIsLoading(false)
  }

  const handleDeleteSelectRightPinyin = async (id: string) => {
    await deleteSelectRightPinyin(id)
  }

  return (
    <div className='flex flex-col gap-2'>
      <Card>
        <CardHeader>
          <CardTitle>添加 - 选出听到的拼音</CardTitle>
        </CardHeader>
        <CardContent>
          <ImageDialog img='images/select-right-pinyin-hanyu.webp' />
          <CommonForm
            form={form}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
            placeholder_1='以,分隔 e.g.guan,tong xue'
            placeholder_2='ie:guan'
          />
        </CardContent>
      </Card>
      <CollapsibleItems
        items={selectRightPinyin}
        property='right_answer'
        deletePending={deletePending}
        handleDelete={handleDeleteSelectRightPinyin}
      />
    </div>
  )
}

export default NewSelectRightPinyin
