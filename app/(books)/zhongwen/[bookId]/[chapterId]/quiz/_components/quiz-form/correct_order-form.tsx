'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { CorrectOrderValidation } from '@/lib/validation'
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

import { CorrectOrder } from '@/lib/types'
import {
  useAddCorrectOrder,
  useDeleteCorrectOrder,
  useGetCorrectOrderByChapter
} from '@/lib/react-query/queries'
import { useQuery } from '@tanstack/react-query'

import ImageDialog from '../../../../../../_components/image-dialog'
import CollapsibleItems from '@/app/(books)/_components/form/collapsible-items'

interface CorrectOrderFormProps {
  bookId: string
  chapterId: string
}

const CorrectOrderForm = ({ bookId, chapterId }: CorrectOrderFormProps) => {
  const {
    mutate: addCorrectOrder,
    error: addError,
    isPending: addPending
  } = useAddCorrectOrder(`${bookId}-${chapterId}`)

  const {
    mutate: deleteCorrectOrder,
    error: deleteError,
    isPending: deletePending
  } = useDeleteCorrectOrder(`${bookId}-${chapterId}`)

  const { data: correct_order } = useQuery(
    useGetCorrectOrderByChapter(`${bookId}-${chapterId}`)
  )

  const form = useForm<z.infer<typeof CorrectOrderValidation>>({
    resolver: zodResolver(CorrectOrderValidation),
    defaultValues: {
      question: '',
      answer: '',
      source: `${bookId}-${chapterId}`
    }
  })

  const handleSubmit = async (
    value: z.infer<typeof CorrectOrderValidation>
  ) => {
    const item: CorrectOrder = {
      question: value.question.split(' '),
      answer: value.answer,
      source: value.source
    }
    await addCorrectOrder(item)
    form.reset()
  }

  const handleDeleteCorrectOrder = async (id: string) => {
    await deleteCorrectOrder(id)
  }

  return (
    <div className='flex flex-col gap-2'>
      <Card>
        <CardHeader>
          <CardTitle>连词成句</CardTitle>
        </CardHeader>
        <CardContent>
          <ImageDialog img='images/correct_order.webp' />
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
                        placeholder='空格分隔. ie. 看见 我 云云 唱歌'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='answer'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>答案</FormLabel>
                    <FormControl>
                      <Input
                        type='text'
                        placeholder='ie.我看见云云唱歌'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <SubmitButton
                type='quiz-correct_order'
                createdPeding={addPending}
                updatedPending={false}
              />
            </form>
          </Form>
        </CardContent>
      </Card>
      <CollapsibleItems
        items={correct_order}
        property='answer'
        deletePending={deletePending}
        handleDelete={handleDeleteCorrectOrder}
      />
    </div>
  )
}

export default CorrectOrderForm
