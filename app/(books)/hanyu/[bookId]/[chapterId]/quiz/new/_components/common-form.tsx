import React from 'react'
import { UseFormReturn } from 'react-hook-form'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { HanYuMultipleChoiceListeningValidation } from '@/lib/validation'
import * as z from 'zod'
import { Input } from '@/components/ui/input'
import SubmitButton from '@/components/submit-button'

interface CommonFormProps {
  form: UseFormReturn<
    { choices: string; rightAnswer: string; source: string; audio?: any },
    any,
    { choices: string; rightAnswer: string; source: string; audio?: any }
  >
  handleSubmit: (
    value: z.infer<typeof HanYuMultipleChoiceListeningValidation>
  ) => Promise<void>
  isLoading: boolean
  isPinyin: boolean
}
const CommonForm = ({
  form,
  handleSubmit,
  isLoading,
  isPinyin
}: CommonFormProps) => {
  const fileRef = form.register('audio', { required: true })
  return (
    <Form {...form}>
      <form
        className='flex w-full flex-col gap-4 p-4'
        onSubmit={form.handleSubmit(handleSubmit)}
      >
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
          name='choices'
          render={({ field }) => (
            <FormItem>
              <FormLabel>选项</FormLabel>
              <FormControl>
                <Input
                  type='text'
                  placeholder={`${isPinyin ? '空格分隔ie.guan guang' : '空格分隔ie.王小华 张晓明 王小强'}`}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='rightAnswer'
          render={({ field }) => (
            <FormItem>
              <FormLabel>答案</FormLabel>
              <FormControl>
                <Input
                  type='text'
                  placeholder={`${isPinyin ? 'ie:guan' : 'ie.王小华'}`}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <SubmitButton
          type='hanyu-multiple-choice-listening'
          createdPeding={isLoading}
          updatedPending={false}
        />
      </form>
    </Form>
  )
}

export default CommonForm
