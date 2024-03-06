'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { HanYuMultipleChoiceValidation } from '@/lib/validation'
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

import { HanYuMultipleChoice } from '@/lib/types'
import {
  useAddHanYuMultipleChoice,
  useDeleteHanYuMultipleChoice,
  useGetHanYuMultipleChoiceByChapter
} from '@/lib/react-query/queries'
import { useQuery } from '@tanstack/react-query'

import ImageDialog from '../../../../../../_components/image-dialog'
import CollapsibleItems from '@/app/(books)/_components/form/collapsible-items'

interface NewMultipleChoiceProps {
  bookId: string
  chapterId: string
}

const NewMultipleChoice = ({ bookId, chapterId }: NewMultipleChoiceProps) => {
  const {
    mutate: addMultipleChoice,
    error: addError,
    isPending: addPending
  } = useAddHanYuMultipleChoice(`${bookId}-${chapterId}`)

  const {
    mutate: deleteMultipleChoice,
    error: deleteError,
    isPending: deletePending
  } = useDeleteHanYuMultipleChoice(`${bookId}-${chapterId}`)

  const { data: correct_order } = useQuery(
    useGetHanYuMultipleChoiceByChapter(`${bookId}-${chapterId}`)
  )

  const form = useForm<z.infer<typeof HanYuMultipleChoiceValidation>>({
    resolver: zodResolver(HanYuMultipleChoiceValidation),
    defaultValues: {
      question: '',
      choices: '',
      rightAnswer: '',
      source: `${bookId}-${chapterId}`
    }
  })

  const handleSubmit = async (
    value: z.infer<typeof HanYuMultipleChoiceValidation>
  ) => {
    const item: HanYuMultipleChoice = {
      question: value.question,
      choices: value.choices.split(' '),
      rightAnswer: value.rightAnswer,
      source: value.source
    }
    await addMultipleChoice(item)
    form.reset()
  }

  const handleDeleteCorrectOrder = async (id: string) => {
    await deleteMultipleChoice(id)
  }

  return (
    <div className='flex flex-col gap-2'>
      <Card>
        <CardHeader>
          <CardTitle>添加 - 选择哪个是对的</CardTitle>
        </CardHeader>
        <CardContent>
          <ImageDialog img='images/multiple-choice-hanyu.webp' />
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
                      <Input
                        type='text'
                        placeholder='ie. 我__王小华.'
                        {...field}
                      />
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
                        placeholder='空格分隔ie.是 好 不'
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
                      <Input type='text' placeholder='ie.是' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <SubmitButton
                type='hanyu-multiple-choice'
                createdPeding={addPending}
                updatedPending={false}
              />
            </form>
          </Form>
        </CardContent>
      </Card>
      <CollapsibleItems
        items={correct_order}
        property='question'
        deletePending={deletePending}
        handleDelete={handleDeleteCorrectOrder}
      />
    </div>
  )
}

export default NewMultipleChoice
