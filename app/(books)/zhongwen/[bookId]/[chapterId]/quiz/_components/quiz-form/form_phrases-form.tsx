'use client'
import React, { useState } from 'react'
import SubmitButton from '@/components/submit-button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import supabaseUrl from '@/lib/utils'
import { FormPhrasesValidation } from '@/lib/validation'
import { ChevronsUpDown, ImageIcon, RotateCcw, Trash2 } from 'lucide-react'
import Image from 'next/image'
import { useForm } from 'react-hook-form'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  useAddFormPhrases,
  useDeleteFormPhrases,
  useGetFormPhrasesByChapter,
} from '@/lib/react-query/queries'
import { FormPhrases } from '@/lib/types'
import { useQuery } from '@tanstack/react-query'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { Button } from '@/components/ui/button'

interface FormPhrasesFormProps {
  bookId: string
  chapterId: string
}
const FormPhrasesForm = ({ bookId, chapterId }: FormPhrasesFormProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const {
    mutate: addFormPhrases,
    error: addError,
    isPending: addPending,
  } = useAddFormPhrases(`${bookId}-${chapterId}`)

  const { data: form_phrases } = useQuery(
    useGetFormPhrasesByChapter(`${bookId}-${chapterId}`)
  )

  const {
    mutate: deleteFormPhrases,
    error: deleteError,
    isPending: deletePending,
  } = useDeleteFormPhrases(`${bookId}-${chapterId}`)

  const form = useForm<z.infer<typeof FormPhrasesValidation>>({
    resolver: zodResolver(FormPhrasesValidation),
    defaultValues: {
      choices_a: '',
      choices_b: '',
      answers: '',
      source: `${bookId}-${chapterId}`,
    },
  })

  const handleSubmit = async (value: z.infer<typeof FormPhrasesValidation>) => {
    const item: FormPhrases = {
      choices_a: value.choices_a.split(' '),
      answers: value.answers.split(' '),
      choices_b: value.choices_b.split(' '),
      source: value.source,
    }
    await addFormPhrases(item)
    form.reset()
  }

  const handleDeleteFormPhrases = async (id: string) => {
    await deleteFormPhrases(id)
  }

  return (
    <div className="flex flex-col gap-2">
      <Card>
        <CardHeader>
          <CardTitle>组成词语</CardTitle>
        </CardHeader>
        <CardContent>
          <Dialog>
            <DialogTrigger asChild>
              <ImageIcon className="w-6 h-6 cursor-pointer" />
            </DialogTrigger>
            <DialogContent>
              <Image
                className="p-2 mx-auto object-contain"
                priority
                sizes="33vw"
                width={579}
                height={212}
                src={supabaseUrl('images/form_phrases.webp')}
                alt="ezyChinese 组成词语"
              />
            </DialogContent>
          </Dialog>
          <Form {...form}>
            <form
              className="flex flex-col gap-4 w-full p-4"
              onSubmit={form.handleSubmit(handleSubmit)}
            >
              <FormField
                control={form.control}
                name="choices_a"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>题目</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="第一组词语,空格分隔.ie.街 真 上 看 方 红 停"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="choices_b"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>选择</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="第二组词语,空格分隔.ie.见 向 道 是 水 学 灯"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="answers"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>字</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="空格分隔.ie.街道 看见 上学 红灯 停水 真是 方向"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <SubmitButton
                type="quiz-right_explanation"
                createdPeding={addPending}
                updatedPending={false}
              />
            </form>
          </Form>
        </CardContent>
      </Card>
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className=" space-y-2"
      >
        <div className="flex items-center justify-center space-x-4 px-4">
          <h4 className="text-lg font-semibold">所有题目</h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm">
              <ChevronsUpDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="space-y-2 text-lg px-6 ">
          {form_phrases?.map((item) => (
            <div
              className="even:bg-skyblue odd:bg-orange rounded-lg p-1 flex items-center justify-between"
              key={item.id}
            >
              {item.answers}
              <Button
                disabled={deletePending}
                variant="ghost"
                onClick={() => handleDeleteFormPhrases(item.id!)}
              >
                {deletePending ? (
                  <RotateCcw className="w-4 h-4 text-watermarker animate-spin " />
                ) : (
                  <Trash2 className="w-4 h-4 text-destructive" />
                )}
              </Button>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}

export default FormPhrasesForm
