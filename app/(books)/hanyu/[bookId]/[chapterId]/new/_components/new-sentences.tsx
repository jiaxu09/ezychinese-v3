'use client'
import { HanYuSentenceValidation } from '@/lib/validation'
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
import { HanYuSentence, HanYuWord } from '@/lib/types'
import { supabaseBrowser } from '@/lib/supabase/browser'
import {
  useAddHanYuSentence,
  useDeleteHanYuSentence,
  useGetHanYuSentencesByChapter
} from '@/lib/react-query/queries'
import { useQuery } from '@tanstack/react-query'
import CollapsibleItems from '../../../../../_components/form/collapsible-items'
import ImageDialog from '@/app/(books)/_components/image-dialog'
import { Textarea } from '@/components/ui/textarea'
import FileUploader from '@/components/file-uploader'
import supabaseUrl from '@/lib/utils'
import { uploadFileToStorage } from '@/lib/supabase/api-client'

interface NewSentencesProps {
  bookId: string
  chapterId: string
}

const NewSentences = ({ bookId, chapterId }: NewSentencesProps) => {
  const [fileUrl, setFileUrl] = useState<string>(supabaseUrl(''))
  const [isLoading, setIsLoading] = useState(false)

  const {
    mutate: addHanYuSentence,
    error: addError,
    isPending: addPending
  } = useAddHanYuSentence(`${bookId}-${chapterId}`)

  const {
    mutate: deleteHanYuSentence,
    error: deleteError,
    isPending: deletePending
  } = useDeleteHanYuSentence(`${bookId}-${chapterId}`)

  const { data: hanyu_sentences } = useQuery(
    useGetHanYuSentencesByChapter(`${bookId}-${chapterId}`)
  )

  const form = useForm<z.infer<typeof HanYuSentenceValidation>>({
    resolver: zodResolver(HanYuSentenceValidation),
    defaultValues: {
      sentence: '',
      image: [],
      audio: undefined,
      source: `${bookId}-${chapterId}`
    }
  })
  const fileRef = form.register('audio', { required: true })

  const handleSubmit = async (
    value: z.infer<typeof HanYuSentenceValidation>
  ) => {
    setIsLoading(true)
    const audioFile = value.audio[0]
    const audio = await uploadFileToStorage(audioFile, 'mp3')
    const file = value.image[0]
    const image = await uploadFileToStorage(file, 'hanyu-images')

    if (audio && image) {
      const item: HanYuSentence = {
        sentence: value.sentence,
        image,
        source: value.source,
        audio
      }
      await addHanYuSentence(item)
      form.reset()
    }
    setIsLoading(false)
  }

  const handleDeleteHanYuSentence = async (
    id: string,
    img?: string,
    audio?: string
  ) => {
    const variables = {
      id,
      img,
      audio
    }
    await deleteHanYuSentence(variables)
  }

  return (
    <div className='flex min-h-[80vh] flex-col gap-2'>
      <Card className=''>
        <CardHeader>
          <CardTitle>添加 句子/Sentences</CardTitle>
        </CardHeader>
        <CardContent className=''>
          <ImageDialog img='hanyu-images/hanyu_sentences.webp' />
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
                        placeholder={`句子. ie.       你好！
                    谢谢！
                    不客气!`}
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
                type='hanyu-new-sentences'
                createdPeding={isLoading}
                updatedPending={false}
              />
            </form>
          </Form>
        </CardContent>
        <CollapsibleItems
          items={hanyu_sentences}
          property='sentence'
          deletePending={deletePending}
          handleDelete={handleDeleteHanYuSentence}
        />
      </Card>
    </div>
  )
}

export default NewSentences
