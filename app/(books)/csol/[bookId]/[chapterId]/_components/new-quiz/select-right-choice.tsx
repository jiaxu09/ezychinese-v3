'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { SelectRightChoiceValidation } from '@/lib/validation'
import { CSOLSelectRightChoice } from '@/lib/types'
import {
  useAddCSOLSelectRightChoice,
  useDeleteCSOLSelectRightChoice,
  useGetCSOLSelectRightChoiceByChapter
} from '@/lib/react-query/queries'
import { useQuery } from '@tanstack/react-query'

import { uploadFileToStorage } from '@/lib/supabase/api-client'
import CollapsibleItems from '@/app/(books)/_components/form/collapsible-items'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import SubmitButton from '@/components/submit-button'

interface NewSelectRightChoiceProps {
  bookId: string
  chapterId: string
}

const NewSelectRightChoice = ({
  bookId,
  chapterId
}: NewSelectRightChoiceProps) => {
  const [isLoading, setIsLoading] = useState(false)

  const {
    mutate: addCSOLSelectRightChoice,
    error: addError,
    isPending: addPending
  } = useAddCSOLSelectRightChoice(`${bookId}-${chapterId}`)

  const {
    mutate: deleteSelectRightChoice,
    error: deleteError,
    isPending: deletePending
  } = useDeleteCSOLSelectRightChoice(`${bookId}-${chapterId}`)

  const { data: selectRightChoice } = useQuery(
    useGetCSOLSelectRightChoiceByChapter(`${bookId}-${chapterId}`)
  )

  const form = useForm<z.infer<typeof SelectRightChoiceValidation>>({
    resolver: zodResolver(SelectRightChoiceValidation),
    defaultValues: {
      question: '',
      audio: undefined,
      choices: '',
      rightAnswer: '',
      source: `${bookId}-${chapterId}`
    }
  })

  const fileRef = form.register('audio', { required: true })

  const handleSubmit = async (
    value: z.infer<typeof SelectRightChoiceValidation>
  ) => {
    setIsLoading(true)
    const audioFile = value.audio[0]

    const audio = await uploadFileToStorage(audioFile, 'mp3')

    if (audio) {
      const item: CSOLSelectRightChoice = {
        audio,
        question: value.question,
        choices: value.choices.split(' '),
        right_answer: value.rightAnswer,
        source: value.source
      }
      await addCSOLSelectRightChoice(item)
      form.reset()
    }
    setIsLoading(false)
  }

  const handleDeleteSelectRightChoice = async (id: string) => {
    await deleteSelectRightChoice(id)
  }

  return (
    <div className='flex flex-col gap-2'>
      <Card>
        <CardHeader>
          <CardTitle>New - Select Right Choice</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              className='flex w-full flex-col gap-4 p-4'
              onSubmit={form.handleSubmit(handleSubmit)}
            >
              <FormField
                control={form.control}
                name='question'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>题目</FormLabel>
                    <FormControl>
                      <Input type='text' placeholder={`e.g. love`} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='audio'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>音频(mp3)</FormLabel>
                    <FormControl>
                      <Input type='file' {...fileRef} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='choices'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>选项</FormLabel>
                    <FormControl>
                      <Input
                        type='text'
                        placeholder={
                          '空格分隔. e.g. 爱(ai) 喜欢(xihuan) 有(you) 吃(chi)'
                        }
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='rightAnswer'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>答案</FormLabel>
                    <FormControl>
                      <Input
                        type='text'
                        placeholder={'e.g. 爱(ai)'}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <SubmitButton
                type='CSOL-Select-Right-Choice'
                createdPeding={isLoading}
                updatedPending={false}
              />
            </form>
          </Form>
        </CardContent>
      </Card>
      <CollapsibleItems
        items={selectRightChoice}
        property='right_answer'
        deletePending={deletePending}
        handleDelete={handleDeleteSelectRightChoice}
      />
    </div>
  )
}

export default NewSelectRightChoice
