'use client'
import React, { useState } from 'react'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { StoryValidation } from '@/lib/validation'
import { uploadFileToStorage } from '@/lib/supabase/api-client'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Story } from '@/lib/types'
import { isJsonString, slugify } from '@/lib/utils'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { useAddStory } from '@/lib/react-query/queries'
import SubmitButton from '@/components/submit-button'
import FileUploader from '@/components/file-uploader'

const SaveStory = () => {
  const [isLoading, setIsLoading] = useState(false)

  const [fileUrl, setFileUrl] = useState<string>('')

  const {
    mutate: addStory,
    error: addError,
    isPending: addPending
  } = useAddStory()

  const form = useForm<z.infer<typeof StoryValidation>>({
    resolver: zodResolver(StoryValidation),
    defaultValues: {
      thumbnail: [],
      level: '',
      zh_title: '',
      en_title: '',
      story: '',
      en_story: '', // Set your default English story
      grammar: '',
      exercises: ''
    }
  })

  const fileRef = form.register('audio', { required: true })

  const handleSubmit = async (value: z.infer<typeof StoryValidation>) => {
    setIsLoading(true)
    const isStoryJSON = isJsonString(value.story)
    const isGrammarJSON = isJsonString(value.grammar)
    const isExericisesJSON = isJsonString(value.exercises)
    if (!isStoryJSON) {
      form.setError('story', {
        type: 'manual',
        message: 'Please enter a valid JSON!'
      })
      return
    }
    if (!isGrammarJSON) {
      form.setError('grammar', {
        type: 'manual',
        message: 'Please enter a valid JSON!'
      })
      return
    }
    if (!isExericisesJSON) {
      form.setError('exercises', {
        type: 'manual',
        message: 'Please enter a valid JSON!'
      })
      return
    }

    const file = value.thumbnail[0]

    const regex = /\/ezyChinese\/(.*?)$/
    const match = fileUrl.match(regex)
    let thumbnail = fileUrl

    if (match) {
      thumbnail = match[1]
    }

    const uploadedUrl = await uploadFileToStorage(file, 'readings')
    if (uploadedUrl) {
      thumbnail = uploadedUrl
    }

    const audioFile = value.audio[0]

    const audio = await uploadFileToStorage(audioFile, 'mp3')

    if (audio) {
      const item: Story = {
        level: value.level,
        zh_title: value.zh_title,
        en_title: value.en_title,
        story: JSON.parse(value.story),
        en_story: value.en_story,
        grammar: JSON.parse(value.grammar),
        exercises: JSON.parse(value.exercises),
        slug: slugify(value.en_title),
        audio,
        thumbnail
      }

      await addStory(item)
      form.reset()
      setFileUrl('')
    }
    setIsLoading(false)
  }
  return (
    <div>
      <Form {...form}>
        <form
          className='flex w-full flex-col gap-4 p-4'
          onSubmit={form.handleSubmit(handleSubmit)}
        >
          <div className='flex items-center justify-center space-x-6'>
            <FormField
              control={form.control}
              name='thumbnail'
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
            <FormField
              control={form.control}
              name='level'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Level</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className='w-[180px]'>
                        <SelectValue placeholder='Select a Level' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value='hsk-1'>Level 1</SelectItem>
                        <SelectItem value='hsk-2'>Level 2</SelectItem>
                        <SelectItem value='hsk-3'>Level 3</SelectItem>
                        <SelectItem value='hsk-4'>Level 4</SelectItem>
                        <SelectItem value='hsk-5'>Level 5</SelectItem>
                        <SelectItem value='hsk-6'>Level 6</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
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
              name='zh_title'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Chinese Title</FormLabel>
                  <FormControl>
                    <Input
                      type='text'
                      placeholder='Please enter Chinese title'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='en_title'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>English Title</FormLabel>
                  <FormControl>
                    <Input
                      type='text'
                      placeholder='Please enter English title'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <FormField
              control={form.control}
              name='story'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Story</FormLabel>
                  <FormControl>
                    <Textarea
                      rows={10}
                      placeholder={`[{
                          zh: ['很', '久', '以', '前'],
                          pinyin: ['hěn', 'jiǔ', 'yǐ', 'qián'],
                          en: 'long ago'
                        }]`}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='en_story'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>English Story</FormLabel>
                  <FormControl>
                    <Textarea rows={10} placeholder={``} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <FormField
              control={form.control}
              name='grammar'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Grammar</FormLabel>
                  <FormControl>
                    <Textarea
                      rows={10}
                      placeholder={`[
                          {
                            zh: '主谓句：如 “盘古住在里面”。',
                            en: 'Subject-Verb Sentence: A basic sentence structure where the subject is followed by a verb, e.g., “盘古住在里面” (Pangu lived inside).'
                          },
                        ]`}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='exercises'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Exercises</FormLabel>
                  <FormControl>
                    <Textarea
                      rows={10}
                      placeholder={`[
                          {
                            type: 'Vocabulary Exercise',
                            question:
                              "What does the word '混沌' (hùn dùn) mean in the context of the story?",
                            options: ['Bright', 'Chaos', 'Creation', 'Sleep'],
                            answer: 2
                          },
                        ]`}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className='flex items-center justify-center '>
            <SubmitButton
              type='leveled reading'
              createdPeding={isLoading}
              updatedPending={false}
            />
          </div>
        </form>
      </Form>
    </div>
  )
}

export default SaveStory
