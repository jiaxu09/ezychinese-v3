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
import { RightExplanationValidation } from '@/lib/validation'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  useAddRightExplanation,
  useDeleteRightExplanationByChapter,
  useGetRightExplanationByChapter
} from '@/lib/react-query/queries'
import { RightExplanation } from '@/lib/types'
import { useQuery } from '@tanstack/react-query'
import CollapsibleItems from '@/app/(books)/_components/form/collapsible-items'
import ImageDialog from '@/app/(books)/_components/image-dialog'

interface FormPhrasesFormProps {
  bookId: string
  chapterId: string
}
const RightExplanationForm = ({ bookId, chapterId }: FormPhrasesFormProps) => {
  const {
    mutate: addRightExplanation,
    error: addError,
    isPending: addPending
  } = useAddRightExplanation(`${bookId}-${chapterId}`)

  const { data: right_explanation } = useQuery(
    useGetRightExplanationByChapter(`${bookId}-${chapterId}`)
  )

  const {
    mutate: deleteRightExplanation,
    error: deleteError,
    isPending: deletePending
  } = useDeleteRightExplanationByChapter(`${bookId}-${chapterId}`)

  const form = useForm<z.infer<typeof RightExplanationValidation>>({
    resolver: zodResolver(RightExplanationValidation),
    defaultValues: {
      question: '',
      answer: '',
      sentence: '',
      choices: '',
      source: `${bookId}-${chapterId}`
    }
  })

  const handleSubmit = async (
    value: z.infer<typeof RightExplanationValidation>
  ) => {
    const item: RightExplanation = {
      question: value.question,
      answer: value.answer,
      choices: value.choices.split(' '),
      sentence: value.sentence,
      source: value.source
    }
    await addRightExplanation(item)
    form.reset()
  }

  const handleDeleteRightExplanation = async (id: string) => {
    await deleteRightExplanation(id)
  }

  return (
    <div className='flex flex-col gap-2'>
      <Card>
        <CardHeader>
          <CardTitle>选择正确解释</CardTitle>
        </CardHeader>
        <CardContent>
          <ImageDialog img='images/right_explanation.webp' />
          <Form {...form}>
            <form
              className='flex w-full flex-col gap-4 p-4'
              onSubmit={form.handleSubmit(handleSubmit)}
            >
              <FormField
                control={form.control}
                name='sentence'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>题目</FormLabel>
                    <FormControl>
                      <Input
                        type='text'
                        placeholder='ie.春眠不觉晓'
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
                    <FormLabel>选择</FormLabel>
                    <FormControl>
                      <Input
                        type='text'
                        placeholder='空格分隔.ie.明白 天亮 天黑 晚上'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='question'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>字</FormLabel>
                    <FormControl>
                      <Input type='text' placeholder='ie.晓' {...field} />
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
                      <Input type='text' placeholder='ie.天亮' {...field} />
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
        items={right_explanation}
        property='sentence'
        deletePending={deletePending}
        handleDelete={handleDeleteRightExplanation}
      />
    </div>
  )
}

export default RightExplanationForm
