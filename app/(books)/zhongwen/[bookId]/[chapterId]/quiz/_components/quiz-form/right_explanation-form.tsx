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
import { RightExplanationValidation } from '@/lib/validation'
import { ChevronsUpDown, ImageIcon, RotateCcw, Trash2 } from 'lucide-react'
import Image from 'next/image'
import { useForm } from 'react-hook-form'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  useAddRightExplanation,
  useDeleteRightExplanationByChapter,
  useGetRightExplanationByChapter,
} from '@/lib/react-query/queries'
import { RightExplanation } from '@/lib/types'
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
const RightExplanationForm = ({ bookId, chapterId }: FormPhrasesFormProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const {
    mutate: addRightExplanation,
    error: addError,
    isPending: addPending,
  } = useAddRightExplanation(`${bookId}-${chapterId}`)

  const { data: right_explanation } = useQuery(
    useGetRightExplanationByChapter(`${bookId}-${chapterId}`)
  )

  const {
    mutate: deleteRightExplanation,
    error: deleteError,
    isPending: deletePending,
  } = useDeleteRightExplanationByChapter(`${bookId}-${chapterId}`)

  const form = useForm<z.infer<typeof RightExplanationValidation>>({
    resolver: zodResolver(RightExplanationValidation),
    defaultValues: {
      question: '',
      answer: '',
      sentence: '',
      choices: '',
      source: `${bookId}-${chapterId}`,
    },
  })

  const handleSubmit = async (
    value: z.infer<typeof RightExplanationValidation>
  ) => {
    const item: RightExplanation = {
      question: value.question,
      answer: value.answer,
      choices: value.choices.split(' '),
      sentence: value.sentence,
      source: value.source,
    }
    await addRightExplanation(item)
    form.reset()
  }

  const handleDeleteRightExplanation = async (id: string) => {
    await deleteRightExplanation(id)
  }

  return (
    <div className="flex flex-col gap-2">
      <Card>
        <CardHeader>
          <CardTitle>选择正确解释</CardTitle>
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
                width={618}
                height={301}
                src={supabaseUrl('images/right_explanation.webp')}
                alt="ezyChinese 正确解释"
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
                name="sentence"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>题目</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="ie.春眠不觉晓"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="choices"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>选择</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="空格分隔.ie.明白 天亮 天黑 晚上"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="question"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>字</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="ie.晓" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="answer"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>答案</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="ie.天亮" {...field} />
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
          {right_explanation?.map((item) => (
            <div
              className="even:bg-skyblue odd:bg-pastelblue rounded-lg p-1 flex items-center justify-between"
              key={item.id}
            >
              {item.sentence}
              <Button
                disabled={deletePending}
                variant="ghost"
                onClick={() => handleDeleteRightExplanation(item.id!)}
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

export default RightExplanationForm
