'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { AudioChoiceRightAnswerValidation } from '@/lib/validation'

import { HanYuMultipleChoiceListening } from '@/lib/types'
import {
  useAddHanYuMultipleChoiceListening,
  useDeleteHanYuMultipleChoiceListening,
  useGetHanYuMultipleChoiceListeningByChapter
} from '@/lib/react-query/queries'
import { useQuery } from '@tanstack/react-query'

import ImageDialog from '../../../../../../_components/image-dialog'
import CommonForm from '../../../../../../_components/form/common-form'
import { uploadFileToStorage } from '@/lib/supabase/api-client'
import CollapsibleItems from '@/app/(books)/_components/form/collapsible-items'

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
            placeholder_1='空格分隔ie.王小华 张晓明 王小强'
            placeholder_2='ie.王小华'
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
