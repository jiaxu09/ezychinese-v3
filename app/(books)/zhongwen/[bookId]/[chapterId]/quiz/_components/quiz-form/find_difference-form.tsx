'use client'
import React from 'react'
import SubmitButton from '@/components/submit-button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { FindDifferenceValidation } from '@/lib/validation'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  useAddFindDifference,
  useDeleteFindDifference,
  useGetFindDifferenceByChapter
} from '@/lib/react-query/queries'
import { FindDifference } from '@/lib/types'
import { useQuery } from '@tanstack/react-query'

import CollapsibleItems from '@/app/(books)/_components/collapsible-items'
import ImageDialog from '../../../../../../_components/image-dialog'

interface FindDifferenceFormProps {
  bookId: string
  chapterId: string
}
const FindDifferenceForm = ({ bookId, chapterId }: FindDifferenceFormProps) => {
  const {
    mutate: addFindDifference,
    error: addError,
    isPending: addPending
  } = useAddFindDifference(`${bookId}-${chapterId}`)

  const { data: find_difference } = useQuery(
    useGetFindDifferenceByChapter(`${bookId}-${chapterId}`)
  )

  const {
    mutate: deleteFindDifference,
    error: deleteError,
    isPending: deletePending
  } = useDeleteFindDifference(`${bookId}-${chapterId}`)

  const form = useForm<z.infer<typeof FindDifferenceValidation>>({
    resolver: zodResolver(FindDifferenceValidation),
    defaultValues: {
      question: '',
      answer: '',
      source: `${bookId}-${chapterId}`
    }
  })

  const handleSubmit = async (
    value: z.infer<typeof FindDifferenceValidation>
  ) => {
    const item: FindDifference = {
      question: value.question.split(' '),
      answer: value.answer,
      source: value.source
    }
    await addFindDifference(item)
    form.reset()
  }

  const handleDeleteFindDifference = async (id: string) => {
    await deleteFindDifference(id)
  }

  return (
    <div className='flex flex-col gap-2'>
      <Card>
        <CardHeader>
          <CardTitle>组成词语</CardTitle>
        </CardHeader>
        <CardContent>
          <ImageDialog img='images/find_difference.webp' />

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
                        placeholder='空格分隔.ie.哥哥 牛奶 姐姐 奶奶'
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
                      <Input type='text' placeholder='ie.牛奶' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <SubmitButton
                type='quiz-right_explanation'
                createdPeding={addPending}
                updatedPending={false}
              />
            </form>
          </Form>
        </CardContent>
      </Card>
      <CollapsibleItems
        items={find_difference}
        property='question'
        deletePending={deletePending}
        handleDelete={handleDeleteFindDifference}
      />
    </div>
  )
}

export default FindDifferenceForm
