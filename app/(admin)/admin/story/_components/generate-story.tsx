'use client'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import React, { ChangeEvent, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { StoryBasicValidation } from '@/lib/validation'
import SubmitButton from '@/components/submit-button'

const GenerateStory = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState('')
  const form = useForm<z.infer<typeof StoryBasicValidation>>({
    resolver: zodResolver(StoryBasicValidation),
    defaultValues: {
      zh: ''
    }
  })

  const handleSubmit = async (value: z.infer<typeof StoryBasicValidation>) => {
    setIsLoading(true)

    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        zh: value.zh
      })
    }
    fetch('/api/generate-story', options)
      .then(response => response.json())
      .then(data => {
        setResult(data)
      })

    setIsLoading(false)
  }
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setResult(event?.currentTarget?.value)
  }
  return (
    <div className='grid grid-cols-2 gap-4'>
      <Form {...form}>
        <form
          className='flex w-full flex-col gap-4 p-4'
          onSubmit={form.handleSubmit(handleSubmit)}
        >
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <FormField
              control={form.control}
              name='zh'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Chinese Array</FormLabel>
                  <FormControl>
                    <Textarea rows={10} placeholder={``} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className='flex items-center justify-center '>
            <SubmitButton
              type=''
              createdPeding={isLoading}
              updatedPending={false}
            />
          </div>
        </form>
      </Form>
      <div className=' col-span-1 max-h-[50vh] '>
        <h3>Story JSON</h3>
        <textarea
          className='h-[50vh] w-full'
          value={JSON.stringify(result)}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default GenerateStory
