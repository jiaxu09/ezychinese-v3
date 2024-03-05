'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { HanYuMultipleChoiceListeningValidation } from '@/lib/validation'

import { HanYuMultipleChoiceListening } from '@/lib/types'
import {
  useAddHanYuMultipleChoiceListening,
  useDeleteHanYuMultipleChoiceListening,
  useGetHanYuMultipleChoiceListeningByChapter
} from '@/lib/react-query/queries'
import { useQuery } from '@tanstack/react-query'

import CollapsibleItems from '@/app/(books)/_components/collapsible-items'
import ImageDialog from '../../../../../../_components/image-dialog'
import { supabaseBrowser } from '@/lib/supabase/browser'
import CommonForm from './common-form'
import { uploadFileToStorage } from '@/lib/supabase/api-client'

interface NewMultipleChoiceListeningProps {
  bookId: string
  chapterId: string
}

const NewMultipleChoiceListening = ({
  bookId,
  chapterId
}: NewMultipleChoiceListeningProps) => {
  const [isLoading, setIsLoading] = useState(false)

  const {
    mutate: addMultipleChoiceListening,
    error: addError,
    isPending: addPending
  } = useAddHanYuMultipleChoiceListening(`${bookId}-${chapterId}`)

  const {
    mutate: deleteMultipleChoiceListening,
    error: deleteError,
    isPending: deletePending
  } = useDeleteHanYuMultipleChoiceListening(`${bookId}-${chapterId}`)

  const { data: multipleChoiceListening } = useQuery(
    useGetHanYuMultipleChoiceListeningByChapter(`${bookId}-${chapterId}`)
  )

  const form = useForm<z.infer<typeof HanYuMultipleChoiceListeningValidation>>({
    resolver: zodResolver(HanYuMultipleChoiceListeningValidation),
    defaultValues: {
      audio: undefined,
      choices: '',
      rightAnswer: '',
      source: `${bookId}-${chapterId}`
    }
  })

  const handleSubmit = async (
    value: z.infer<typeof HanYuMultipleChoiceListeningValidation>
  ) => {
    setIsLoading(true)
    const audioFile = value.audio[0]

    const audio = await uploadFileToStorage(audioFile, 'mp3')

    if (audio) {
      const item: HanYuMultipleChoiceListening = {
        audio,
        choices: value.choices.split(' '),
        right_answer: value.rightAnswer,
        source: value.source
      }
      await addMultipleChoiceListening(item)
      form.reset()
    }
    setIsLoading(false)
  }

  const handleDeleteMultipleChoiceListening = async (id: string) => {
    await deleteMultipleChoiceListening(id)
  }

  return (
    <div className='flex flex-col gap-2'>
      <Card>
        <CardHeader>
          <CardTitle>添加 - 听一听,选择哪个是对的</CardTitle>
        </CardHeader>
        <CardContent>
          <ImageDialog img='images/multiple-choice-listening-hanyu.webp' />
          <CommonForm
            form={form}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
            isPinyin={false}
          />
        </CardContent>
      </Card>
      <CollapsibleItems
        items={multipleChoiceListening}
        property='right_answer'
        deletePending={deletePending}
        handleDelete={handleDeleteMultipleChoiceListening}
      />
    </div>
  )
}

export default NewMultipleChoiceListening
