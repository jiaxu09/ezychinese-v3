'use client'
import { HanYuTextValidation } from '@/lib/validation'
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
import { HanYuText } from '@/lib/types'
import { supabaseBrowser } from '@/lib/supabase/browser'
import {
  useAddHanYuText,
  useDeleteHanYuText,
  useGetHanYuTextsByChapter
} from '@/lib/react-query/queries'
import { useQuery } from '@tanstack/react-query'
import CollapsibleItems from '../../../../../_components/form/collapsible-items'
import ImageDialog from '@/app/(books)/_components/image-dialog'
import { Textarea } from '@/components/ui/textarea'
import FileUploader from '@/components/file-uploader'
import supabaseUrl from '@/lib/utils'

interface NewTextsProps {
  bookId: string
  chapterId: string
}

const NewTexts = ({ bookId, chapterId }: NewTextsProps) => {
  const [fileUrl, setFileUrl] = useState<string>(supabaseUrl(''))
  const [isLoading, setIsLoading] = useState(false)

  const {
    mutate: addHanYuText,
    error: addError,
    isPending: addPending
  } = useAddHanYuText(`${bookId}-${chapterId}`)

  const {
    mutate: deleteHanYuText,
    error: deleteError,
    isPending: deletePending
  } = useDeleteHanYuText(`${bookId}-${chapterId}`)

  const { data: hanyu_texts } = useQuery(
    useGetHanYuTextsByChapter(`${bookId}-${chapterId}`)
  )

  const form = useForm<z.infer<typeof HanYuTextValidation>>({
    resolver: zodResolver(HanYuTextValidation),
    defaultValues: {
      sentence: '',
      image: [],
      audio: undefined,
      source: `${bookId}-${chapterId}`
    }
  })
  const fileRef = form.register('audio', { required: true })

  const handleSubmit = async (value: z.infer<typeof HanYuTextValidation>) => {
    setIsLoading(true)
    const audioFile = value.audio[0]
    let audio = ''

    //upload audio to supabase first
    if (audioFile) {
      const fileExt = audioFile.name.split('.').pop()
      const fileName = `${Math.random()}.${fileExt}`
      const filePath = `mp3/${fileName}`
      const supabase = supabaseBrowser()
      const { error, data } = await supabase.storage
        .from('ezyChinese')
        .upload(filePath, audioFile)
      if (!error) {
        audio = data.path
      }
    }

    const file = value.image[0]
    let image = ''

    //upload image to supabase first
    if (file) {
      const fileExt = file.name.split('.').pop()
      const fileName = `${Math.random()}.${fileExt}`
      const filePath = `hanyu-images/${fileName}`
      const supabase = supabaseBrowser()
      const { error, data } = await supabase.storage
        .from('ezyChinese')
        .upload(filePath, file)
      if (!error) {
        image = data.path
      }
    }

    const item: HanYuText = {
      sentence: value.sentence,
      image,
      source: value.source,
      audio
    }
    await addHanYuText(item)
    form.reset()
    setIsLoading(false)
  }

  const handleDeleteHanYuText = async (id: string) => {
    await deleteHanYuText(id)
  }

  return (
    <div className='flex min-h-[80vh] flex-col gap-2'>
      <Card className=''>
        <CardHeader>
          <CardTitle>添加 课本/Text</CardTitle>
        </CardHeader>
        <CardContent>
          <ImageDialog img='hanyu-images/hanyu_texts.webp' />
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
                    <FormControl>
                      <Textarea
                        placeholder={`句子. ie.我是王小华，他是我爸爸.`}
                        {...field}
                      />
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
              <FormField
                control={form.control}
                name='image'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <FileUploader
                        fieldChange={field.onChange}
                        fileUrl={fileUrl}
                        setFileUrl={setFileUrl}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <SubmitButton
                type='hanyu-new-texts'
                createdPeding={isLoading}
                updatedPending={false}
              />
            </form>
          </Form>
        </CardContent>
        <CollapsibleItems
          items={hanyu_texts}
          property='sentence'
          deletePending={deletePending}
          handleDelete={handleDeleteHanYuText}
        />
      </Card>
    </div>
  )
}

export default NewTexts
