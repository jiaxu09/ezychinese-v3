'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React, { useState } from 'react'
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
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import SubmitButton from '@/components/submit-button'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import {
  ChevronsUpDown,
  Image as ImageIcon,
  RotateCcw,
  Trash2,
} from 'lucide-react'
import Image from 'next/image'
import { CorrectOrder } from '@/lib/types'
import {
  useAddCorrectOrder,
  useDeleteCorrectOrder,
  useGetCorrectOrderByChapter,
} from '@/lib/react-query/queries'
import { useQuery } from '@tanstack/react-query'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import supabaseUrl from '@/lib/utils'

interface CorrectOrderFormProps {
  bookId: string
  chapterId: string
}

const CorrectOrderForm = ({ bookId, chapterId }: CorrectOrderFormProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const {
    mutate: addCorrectOrder,
    error: addError,
    isPending: addPending,
  } = useAddCorrectOrder(`${bookId}-${chapterId}`)

  const {
    mutate: deleteCorrectOrder,
    error: deleteError,
    isPending: deletePending,
  } = useDeleteCorrectOrder(`${bookId}-${chapterId}`)

  const { data: correct_order } = useQuery(
    useGetCorrectOrderByChapter(`${bookId}-${chapterId}`)
  )

  const form = useForm<z.infer<typeof CorrectOrderValidation>>({
    resolver: zodResolver(CorrectOrderValidation),
    defaultValues: {
      question: '',
      answer: '',
      source: `${bookId}-${chapterId}`,
    },
  })

  const handleSubmit = async (
    value: z.infer<typeof CorrectOrderValidation>
  ) => {
    const item: CorrectOrder = {
      question: value.question.split(' '),
      answer: value.answer,
      source: value.source,
    }
    await addCorrectOrder(item)
    form.reset()
  }

  const handleDeleteCorrectOrder = async (id: string) => {
    await deleteCorrectOrder(id)
  }

  return (
    <div className="flex flex-col gap-2">
      <Card>
        <CardHeader>
          <CardTitle>连词成句</CardTitle>
        </CardHeader>
        <CardContent>
          <Dialog>
            <DialogTrigger asChild>
              <ImageIcon className="w-6 h-6 cursor-pointer" />
            </DialogTrigger>
            <DialogContent>
              <Image
                className="p-2 mx-auto object-contain"
                width={418}
                height={403}
                priority
                sizes="33vw"
                src={supabaseUrl('images/correct_order.webp')}
                alt="ezyChinese 连词成句"
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
                        placeholder="空格分隔. ie. 看见 我 云云 唱歌"
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
                      <Input
                        type="text"
                        placeholder="ie.我看见云云唱歌"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <SubmitButton
                type="quiz-correct_order"
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
          {correct_order?.map((item) => (
            <div
              className="even:bg-skyblue odd:bg-orange rounded-lg p-1 flex items-center justify-between"
              key={item.id}
            >
              {item.answer}
              <Button
                disabled={deletePending}
                variant="ghost"
                onClick={() => handleDeleteCorrectOrder(item.id!)}
              >
                {deletePending ? (
                  <RotateCcw className="w-4 h-4 text-watermarker animate-spin" />
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

export default CorrectOrderForm
