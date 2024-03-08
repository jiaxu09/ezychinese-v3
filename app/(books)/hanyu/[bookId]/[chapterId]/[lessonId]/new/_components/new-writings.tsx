'use client'
import { HanYuWritingValidation } from '@/lib/validation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import SubmitButton from '@/components/submit-button'
import { HanYuWriting } from '@/lib/types'
import {
  useAddHanYuWriting,
  useDeleteHanYuWriting,
  useGetHanYuWritingssByChapter
} from '@/lib/react-query/queries'
import { useQuery } from '@tanstack/react-query'
import ImageDialog from '@/app/(books)/_components/image-dialog'
import CollapsibleItems from '@/app/(books)/_components/form/collapsible-items'

interface NewWritingsProps {
  bookId: string
  chapterId: string
  lessonId: string
}
const NewWritings = ({ bookId, chapterId, lessonId }: NewWritingsProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const {
    mutate: addHanYuWriting,
    error: addError,
    isPending: addPending
  } = useAddHanYuWriting(`${bookId}-${chapterId}-${lessonId}`)

  const {
    mutate: deleteHanYuWriting,
    error: deleteError,
    isPending: deletePending
  } = useDeleteHanYuWriting(`${bookId}-${chapterId}-${lessonId}`)

  const { data: hanyu_writings } = useQuery(
    useGetHanYuWritingssByChapter(`${bookId}-${chapterId}-${lessonId}`)
  )

  const form = useForm<z.infer<typeof HanYuWritingValidation>>({
    resolver: zodResolver(HanYuWritingValidation),
    defaultValues: {
      characters: '',
      source: `${bookId}-${chapterId}-${lessonId}`
    }
  })

  const handleSubmit = async (
    value: z.infer<typeof HanYuWritingValidation>
  ) => {
    setIsLoading(true)
    const item: HanYuWriting = {
      hanzi: value.characters.split(' '),
      source: value.source
    }

    await addHanYuWriting(item)
    form.reset()
    setIsLoading(false)
  }

  const handleDeleteHanYuWriting = async (id: string) => {
    await deleteHanYuWriting(id)
  }

  return (
    <div className='flex min-h-[80vh] flex-col gap-2'>
      <Card className=''>
        <CardHeader>
          <CardTitle>添加 汉字/Writing</CardTitle>
        </CardHeader>
        <CardContent>
          <ImageDialog img='hanyu-images/hanyu_writings.webp' />
          <Form {...form}>
            <form
              className='flex w-full flex-col gap-4 p-4'
              onSubmit={form.handleSubmit(handleSubmit)}
            >
              <FormField
                control={form.control}
                name='characters'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type='text'
                        placeholder='汉字 以空格分隔. ie.你 我 他'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <SubmitButton
                type='hanyu-new-writings'
                createdPeding={isLoading}
                updatedPending={false}
              />
            </form>
          </Form>
        </CardContent>
        <CollapsibleItems
          items={hanyu_writings}
          property='hanzi'
          deletePending={deletePending}
          handleDelete={handleDeleteHanYuWriting}
        />
      </Card>
    </div>
  )
}

export default NewWritings
