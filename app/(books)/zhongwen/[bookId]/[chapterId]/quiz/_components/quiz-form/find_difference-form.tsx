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
import { FindDifferenceValidation } from '@/lib/validation'
import { ChevronsUpDown, ImageIcon, RotateCcw, Trash2 } from 'lucide-react'
import Image from 'next/image'
import { useForm } from 'react-hook-form'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  useAddFindDifference,
  useDeleteFindDifference,
  useGetFindDifferenceByChapter,
} from '@/lib/react-query/queries'
import { FindDifference } from '@/lib/types'
import { useQuery } from '@tanstack/react-query'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { Button } from '@/components/ui/button'

interface FindDifferenceFormProps {
  bookId: string
  chapterId: string
}
const FindDifferenceForm = ({ bookId, chapterId }: FindDifferenceFormProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const {
    mutate: addFindDifference,
    error: addError,
    isPending: addPending,
  } = useAddFindDifference(`${bookId}-${chapterId}`)

  const { data: find_difference } = useQuery(
    useGetFindDifferenceByChapter(`${bookId}-${chapterId}`)
  )

  const {
    mutate: deleteFindDifference,
    error: deleteError,
    isPending: deletePending,
  } = useDeleteFindDifference(`${bookId}-${chapterId}`)

  const form = useForm<z.infer<typeof FindDifferenceValidation>>({
    resolver: zodResolver(FindDifferenceValidation),
    defaultValues: {
      question: '',
      answer: '',
      source: `${bookId}-${chapterId}`,
    },
  })

  const handleSubmit = async (
    value: z.infer<typeof FindDifferenceValidation>
  ) => {
    const item: FindDifference = {
      question: value.question.split(' '),
      answer: value.answer,
      source: value.source,
    }
    await addFindDifference(item)
    form.reset()
  }

  const handleDeleteFindDifference = async (id: string) => {
    await deleteFindDifference(id)
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
                width={502}
                height={328}
                src={supabaseUrl('images/find_difference.webp')}
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
                name="question"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>题目</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="空格分隔.ie.哥哥 牛奶 姐姐 奶奶"
                        {...field}
                      />
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
                      <Input type="text" placeholder="ie.牛奶" {...field} />
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
          {find_difference?.map((item) => (
            <div
              className="even:bg-skyblue odd:bg-pastelblue rounded-lg p-1 flex items-center justify-between"
              key={item.id}
            >
              {item.question}
              <Button
                disabled={deletePending}
                variant="ghost"
                onClick={() => handleDeleteFindDifference(item.id!)}
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

export default FindDifferenceForm
