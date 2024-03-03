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
import { FormPhrasesValidation } from '@/lib/validation'
import { useForm } from 'react-hook-form'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  useAddFormPhrases,
  useDeleteFormPhrases,
  useGetFormPhrasesByChapter
} from '@/lib/react-query/queries'
import { FormPhrases } from '@/lib/types'
import { useQuery } from '@tanstack/react-query'
import CollapsibleItems from '@/app/(books)/_components/collapsible-items'
import ImageDialog from '../../../../../../_components/image-dialog'

interface FormPhrasesFormProps {
  bookId: string
  chapterId: string
}
const FormPhrasesForm = ({ bookId, chapterId }: FormPhrasesFormProps) => {
  const {
    mutate: addFormPhrases,
    error: addError,
    isPending: addPending
  } = useAddFormPhrases(`${bookId}-${chapterId}`)

  const { data: form_phrases } = useQuery(
    useGetFormPhrasesByChapter(`${bookId}-${chapterId}`)
  )

  const {
    mutate: deleteFormPhrases,
    error: deleteError,
    isPending: deletePending
  } = useDeleteFormPhrases(`${bookId}-${chapterId}`)

  const form = useForm<z.infer<typeof FormPhrasesValidation>>({
    resolver: zodResolver(FormPhrasesValidation),
    defaultValues: {
      choices_a: '',
      choices_b: '',
      answers: '',
      source: `${bookId}-${chapterId}`
    }
  })

  const handleSubmit = async (value: z.infer<typeof FormPhrasesValidation>) => {
    const item: FormPhrases = {
      choices_a: value.choices_a.split(' '),
      answers: value.answers.split(' '),
      choices_b: value.choices_b.split(' '),
      source: value.source
    }
    await addFormPhrases(item)
    form.reset()
  }

  const handleDeleteFormPhrases = async (id: string) => {
    await deleteFormPhrases(id)
  }

  return (
    <div className='flex flex-col gap-2'>
      <Card>
        <CardHeader>
          <CardTitle>组成词语</CardTitle>
        </CardHeader>
        <CardContent>
          <ImageDialog img='images/form_phrases.webp' />

          <Form {...form}>
            <form
              className='flex w-full flex-col gap-4 p-4'
              onSubmit={form.handleSubmit(handleSubmit)}
            >
              <FormField
                control={form.control}
                name='choices_a'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>题目</FormLabel>
                    <FormControl>
                      <Input
                        type='text'
                        placeholder='第一组词语,空格分隔.ie.街 真 上 看 方 红 停'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='choices_b'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>选择</FormLabel>
                    <FormControl>
                      <Input
                        type='text'
                        placeholder='第二组词语,空格分隔.ie.见 向 道 是 水 学 灯'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='answers'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>字</FormLabel>
                    <FormControl>
                      <Input
                        type='text'
                        placeholder='空格分隔.ie.街道 看见 上学 红灯 停水 真是 方向'
                        {...field}
                      />
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
        items={form_phrases}
        property='answers'
        deletePending={deletePending}
        handleDelete={handleDeleteFormPhrases}
      />
    </div>
  )
}

export default FormPhrasesForm
