'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { HanYuSelectRightPinyinValidation } from '@/lib/validation'

import { HanYuSelectRightPinyin } from '@/lib/types'
import {
  useAddHanYuSelectRightPinyin,
  useDeleteHanYuSelectRightPinyin,
  useGetHanYuSelectRightPinyinByChapter
} from '@/lib/react-query/queries'
import { useQuery } from '@tanstack/react-query'

import CollapsibleItems from '@/app/(books)/_components/collapsible-items'
import ImageDialog from '../../../../../../_components/image-dialog'
import { supabaseBrowser } from '@/lib/supabase/browser'
import CommonForm from './common-form'
import { uploadFileToStorage } from '@/lib/supabase/api-client'

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
  const form = useForm<z.infer<typeof HanYuSelectRightPinyinValidation>>({
    resolver: zodResolver(HanYuSelectRightPinyinValidation),
    defaultValues: {
      audio: undefined,
      choices: '',
      rightAnswer: '',
      source: `${bookId}-${chapterId}`
    }
  })

  const handleSubmit = async (
    value: z.infer<typeof HanYuSelectRightPinyinValidation>
  ) => {
    setIsLoading(true)
    const audioFile = value.audio[0]

    const audio = await uploadFileToStorage(audioFile, 'mp3')
    if (audio) {
      const item: HanYuSelectRightPinyin = {
        audio,
        choices: value.choices.split(' '),
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
            isPinyin={true}
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
