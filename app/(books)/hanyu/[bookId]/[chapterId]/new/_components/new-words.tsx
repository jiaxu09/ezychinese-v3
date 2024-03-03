'use client'
import { HanYuWordsValidation } from '@/lib/validation'
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
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import SubmitButton from '@/components/submit-button'
import { HanYuWord } from '@/lib/types'
import { supabaseBrowser } from '@/lib/supabase/browser'
import {
  useAddHanYuWords,
  useDeleteHanYuWord,
  useGetHanYuWordsByChapter
} from '@/lib/react-query/queries'
import { useQuery } from '@tanstack/react-query'
import CollapsibleItems from '../../../../../_components/collapsible-items'
import ImageDialog from '@/app/(books)/_components/image-dialog'

interface NewWordsProps {
  bookId: string
  chapterId: string
}
const NewWords = ({ bookId, chapterId }: NewWordsProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const {
    mutate: addHanYuWord,
    error: addError,
    isPending: addPending
  } = useAddHanYuWords(`${bookId}-${chapterId}`)

  const {
    mutate: deleteHanYuWord,
    error: deleteError,
    isPending: deletePending
  } = useDeleteHanYuWord(`${bookId}-${chapterId}`)

  const { data: hanyu_words } = useQuery(
    useGetHanYuWordsByChapter(`${bookId}-${chapterId}`)
  )

  const form = useForm<z.infer<typeof HanYuWordsValidation>>({
    resolver: zodResolver(HanYuWordsValidation),
    defaultValues: {
      hanzi: '',
      pinyin: '',
      english: '',
      audio: undefined,
      source: `${bookId}-${chapterId}`
    }
  })
  const fileRef = form.register('audio', { required: true })

  const handleSubmit = async (value: z.infer<typeof HanYuWordsValidation>) => {
    setIsLoading(true)
    const file = value.audio[0]
    let audio = ''

    //upload image to supabase first
    if (file) {
      const fileExt = file.name.split('.').pop()
      const fileName = `${Math.random()}.${fileExt}`
      const filePath = `mp3/${fileName}`
      const supabase = supabaseBrowser()
      const { error, data } = await supabase.storage
        .from('ezyChinese')
        .upload(filePath, file)
      if (!error) {
        audio = data.path
      }
    }

    const item: HanYuWord = {
      hanzi: value.hanzi,
      pinyin: value.pinyin,
      english: value.english,
      source: value.source,
      audio
    }

    await addHanYuWord(item)
    form.reset()
    setIsLoading(false)
  }

  const handleDeleteHanYuWord = async (id: string) => {
    await deleteHanYuWord(id)
  }

  return (
    <div className='flex min-h-[80vh] flex-col gap-2'>
      <Card className=''>
        <CardHeader>
          <CardTitle>添加 生词/Words</CardTitle>
        </CardHeader>
        <CardContent>
          <ImageDialog img='hanyu-images/hanyu_words.webp' />
          <Form {...form}>
            <form
              className='flex w-full flex-col gap-4 p-4'
              onSubmit={form.handleSubmit(handleSubmit)}
            >
              <FormField
                control={form.control}
                name='hanzi'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input type='text' placeholder='汉字 ie. 你' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='pinyin'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type='text'
                        placeholder='拼音,以空格分隔'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='english'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input type='text' placeholder='英文' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='audio'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>音频(mp3)</FormLabel>
                    <FormControl>
                      <Input type='file' {...fileRef} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <SubmitButton
                type='hanyu-new-words'
                createdPeding={isLoading}
                updatedPending={false}
              />
            </form>
          </Form>
        </CardContent>
        <CollapsibleItems
          items={hanyu_words}
          property='hanzi'
          deletePending={deletePending}
          handleDelete={handleDeleteHanYuWord}
        />
      </Card>
    </div>
  )
}

export default NewWords
