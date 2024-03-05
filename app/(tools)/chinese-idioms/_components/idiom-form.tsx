'use client'
import React, { useState } from 'react'
import { IdiomValidation } from '@/lib/validation'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import FileUploader from '@/components/file-uploader'
import supabaseUrl from '@/lib/utils'
import { supabaseBrowser } from '@/lib/supabase/browser'
import { IIdiom } from '@/lib/types'

import {
  useAddChineseIdiom,
  useUpdateChineseIdiom
} from '@/lib/react-query/queries'
import SubmitButton from '../../../../components/submit-button'
import Image from 'next/image'

type IdiomFormProps = {
  idiom?: any
  action: 'Create' | 'Edit'
}

const IdiomForm = ({ idiom, action }: IdiomFormProps) => {
  const {
    mutate: addChineseIdiom,
    error: createdError,
    isPending: createdPeding
  } = useAddChineseIdiom()

  const {
    mutate: updateChineseIdiom,
    error: updatedError,
    isPending: updatedPending
  } = useUpdateChineseIdiom(idiom?.id)

  const form = useForm<z.infer<typeof IdiomValidation>>({
    resolver: zodResolver(IdiomValidation),
    defaultValues: {
      name: idiom ? idiom?.name.join('') : '',
      idiom_pinyin: idiom ? idiom?.idiom_pinyin.join(' ') : '',
      idiom_meaning: idiom ? idiom?.idiom_meaning : '',
      background: [],
      example: idiom ? idiom.example.join('') : '',
      example_pinyin: idiom ? idiom?.example_pinyin.join(' ') : '',
      example_meaning: idiom ? idiom?.example_meaning : ''
    }
  })

  const [fileUrl, setFileUrl] = useState<string>(
    supabaseUrl(idiom?.background_url)
  )

  const handleSubmit = async (value: z.infer<typeof IdiomValidation>) => {
    const file = value.background[0]
    const regex = /\/ezyChinese\/(.*?)$/
    const match = fileUrl.match(regex)
    let backgroundUrl = fileUrl

    if (match) {
      backgroundUrl = match[1]
    }

    //upload image to supabase first
    if (file) {
      const fileExt = file.name.split('.').pop()
      const fileName = `${Math.random()}.${fileExt}`
      const filePath = `idioms/${fileName}`
      const supabase = supabaseBrowser()
      const { error, data } = await supabase.storage
        .from('ezyChinese')
        .upload(filePath, file)
      if (!error) {
        backgroundUrl = data.path
      }
    }

    const item: IIdiom = {
      name: value.name.split(''),
      idiom_pinyin: value.idiom_pinyin.replace(/,\s*$/, '').split(' '),
      idiom_meaning: value.idiom_meaning,
      background_url: backgroundUrl,
      example: value.example.replace(/,\s*$/, '').split(''),
      example_pinyin: value.example_pinyin.replace(/,\s*$/, '').split(' '),
      example_meaning: value.example_meaning?.replace(/,\s*$/, '')
    }
    if (action === 'Create') {
      //save radical to DB
      await addChineseIdiom(item)
    }
    //Update to DB
    if (action === 'Edit') {
      await updateChineseIdiom(item)
    }
    form.reset()
    setFileUrl('')
  }

  return (
    <Form {...form}>
      <form
        className=' flex w-full flex-col gap-4 rounded-lg p-4'
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <div className=' flex items-center justify-center space-x-2'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type='text' placeholder='成语' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='idiom_pinyin'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type='text'
                    placeholder='成语拼音,以空格分隔'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className=' flex items-center justify-center space-x-2'>
          <FormField
            control={form.control}
            name='idiom_meaning'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea placeholder='成语解释' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='example'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea placeholder='成语造句' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className=' flex items-center justify-center space-x-2'>
          <FormField
            control={form.control}
            name='example_pinyin'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea placeholder='造句对应拼音,以空格分隔.' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='example_meaning'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea placeholder='造句英文.' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {/* <FormField
          control={form.control}
          name='background'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <FileUploader
                  fieldChange={field.onChange}
                  fileUrl={fileUrl}
                  setFileUrl={setFileUrl}
                />
              </FormControl>
              <FormMessage className='' />
            </FormItem>
          )}
        /> */}
        {createdError && (
          <FormMessage className='text-error h-2 text-center'>
            Something went wrong!
          </FormMessage>
        )}
        <SubmitButton
          type='idiom'
          createdPeding={createdPeding}
          updatedPending={updatedPending}
        />
      </form>
    </Form>
  )
}

export default IdiomForm
