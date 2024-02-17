'use client'

import { RadicalValidation } from '@/lib/validation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import FileUploader from '@/components/file-uploader'

import { supabaseBrowser } from '@/lib/supabase/browser'
import {
  useAddChineseRadical,
  useUpdateChineseRadical,
} from '@/lib/react-query/queries'

import supabaseUrl from '@/lib/utils'
import { IRadical } from '@/lib/types'
import SubmitButton from '../../_components/submit-button'

type RadicalFormProps = {
  radical?: any
  action: 'Create' | 'Edit'
}

const RadicalForm = ({ radical, action }: RadicalFormProps) => {
  const {
    mutate: addChineseRadical,
    error: createdError,
    isPending: createdPeding,
  } = useAddChineseRadical()
  const {
    mutate: updateChineseRadical,
    error: updatedError,
    isPending: updatedPending,
  } = useUpdateChineseRadical(radical?.id)

  //image uploader
  const [fileUrl, setFileUrl] = useState<string>(
    supabaseUrl(radical?.background_url)
  )

  const form = useForm<z.infer<typeof RadicalValidation>>({
    resolver: zodResolver(RadicalValidation),
    defaultValues: {
      name: radical ? radical?.name : '',
      radical_pinyin: radical ? radical?.radical_pinyin : '',
      radical_meaning: radical ? radical?.radical_meaning : '',
      radical_explain: radical ? radical?.radical_explain.join('') : '',
      radical_explain_pinyin: radical
        ? radical?.radical_explain_pinyin.join(' ')
        : '',
      background: [],
      characters: radical ? radical.characters.join('') : '',
      characters_pinyins: radical ? radical?.characters_pinyins?.join(' ') : '',
      characters_meanings: radical
        ? radical?.characters_meanings?.join(',')
        : '',
    },
  })

  const handleSubmit = async (value: z.infer<typeof RadicalValidation>) => {
    const file = value.background[0]
    let backgroundUrl = ''

    //upload image to supabase first
    if (file) {
      const fileExt = file.name.split('.').pop()
      const fileName = `${Math.random()}.${fileExt}`
      const filePath = `radicals/${fileName}`
      const supabase = supabaseBrowser()
      const { error, data } = await supabase.storage
        .from('ezyChinese')
        .upload(filePath, file)
      if (!error) {
        backgroundUrl = data.path
      }
    }

    const item: IRadical = {
      name: value.name,
      radical_pinyin: value.radical_pinyin,
      radical_meaning: value.radical_meaning,
      radical_explain: value.radical_explain?.replace(/,\s*$/, '').split(''),
      radical_explain_pinyin: value.radical_explain_pinyin
        ?.replace(/,\s*$/, '')
        .split(' '),
      background_url: backgroundUrl,
      characters: value.characters.replace(/,\s*$/, '').split(''),
      characters_pinyins: value.characters_pinyins
        .replace(/,\s*$/, '')
        .split(' '),
      characters_meanings: value.characters_meanings
        ?.replace(/,\s*$/, '')
        .split(','),
    }

    if (action === 'Create') {
      //save radical to DB
      await addChineseRadical(item)
    }
    if (action === 'Edit') {
      await updateChineseRadical(item)
    }
    form.reset()
    setFileUrl('')
  }

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-4 w-full border border-primary rounded-lg p-4"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <div className="flex items-center justify-center space-x-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="text" placeholder="部首" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="radical_pinyin"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="text" placeholder="部首拼音" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="radical_meaning"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="text" placeholder="部首英文" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex items-center justify-center space-x-2 ">
          <FormField
            control={form.control}
            name="radical_explain"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="text" placeholder="部首中文解释" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="radical_explain_pinyin"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="对应拼音，空格分隔"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex items-center justify-center space-x-2">
          <FormField
            control={form.control}
            name="characters"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="text" placeholder="对应4个汉字" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="characters_pinyins"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="对应汉字拼音,以空格分隔."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="characters_meanings"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="text" placeholder="对应英文,以,分隔." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="background"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <FileUploader
                  fieldChange={field.onChange}
                  fileUrl={fileUrl}
                  setFileUrl={setFileUrl}
                />
              </FormControl>
              <FormMessage className="" />
            </FormItem>
          )}
        />
        {(createdError || updatedError) && (
          <FormMessage className="text-center text-error h-2">
            Something went wrong!
          </FormMessage>
        )}

        <SubmitButton
          type="radical"
          createdPeding={createdPeding}
          updatedPending={updatedPending}
        />
      </form>
    </Form>
  )
}

export default RadicalForm
