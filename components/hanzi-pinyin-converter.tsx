'use client'
import { ArrowRightLeft } from 'lucide-react'
import React, { useState } from 'react'
import { Textarea } from './ui/textarea'
import { useForm } from 'react-hook-form'
import { HanziToPinyinValidation } from '@/lib/validation'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Card, CardContent } from './ui/card'
import { Form, FormControl, FormField, FormItem, FormMessage } from './ui/form'
import { convertHanziToPinyin } from '@/lib/api'
import { Button } from './ui/button'
import { Checkbox } from '@/components/ui/checkbox'

interface HanziPinyinConverterProps {
  title?: boolean
}
const HanziPinyinConverter = ({ title = true }: HanziPinyinConverterProps) => {
  const [hanzi, setHanzi] = useState<string[]>([])
  const [pinyins, setPinyins] = useState<string[]>([])
  const [isPinyinOnly, setPinyinOnly] = useState(false)

  const form = useForm<z.infer<typeof HanziToPinyinValidation>>({
    resolver: zodResolver(HanziToPinyinValidation),
    defaultValues: {
      hanzi: ''
    }
  })

  const handleSubmit = async (
    value: z.infer<typeof HanziToPinyinValidation>
  ) => {
    const item: string = value.hanzi

    const pinyins = await convertHanziToPinyin(item)

    setHanzi(value?.hanzi?.split(''))
    setPinyins(pinyins)
  }

  const handleChekBox = () => {
    setPinyinOnly(!isPinyinOnly)
  }
  return (
    <div className='flex flex-col gap-4'>
      {title && (
        <div className='flex items-center justify-center space-x-2 pb-10 text-lg'>
          <span>Hanzi</span>
          <ArrowRightLeft className='h-6 w-6' />
          <span>Pinyin</span>
        </div>
      )}
      <Card>
        <CardContent>
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
                      <Textarea placeholder={`输入汉字`} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className='flex w-full justify-center'>
                <Button
                  variant='default'
                  size='icon'
                  aria-label='ezyChinese convert hanzi to pinyin'
                >
                  <ArrowRightLeft className='h-6 w-6 ' />
                </Button>
              </div>
            </form>
          </Form>
          <div className=' mx-auto min-h-40 w-[90%]  overflow-y-auto rounded-md border border-primary bg-background'>
            {isPinyinOnly ? (
              <div className='flex flex-wrap gap-4 p-4'>
                {pinyins.map((pinyin, index) => (
                  <span key={index}>{pinyin}</span>
                ))}
              </div>
            ) : (
              <div className='flex flex-wrap gap-4 p-4'>
                {hanzi.map((item, index) => (
                  <ruby key={index}>
                    <span className='inline-block text-lg'>{item}</span>
                    <rt className='text-lg text-gray-600'>{pinyins[index]}</rt>
                  </ruby>
                ))}
              </div>
            )}
          </div>
          <div className='flex items-center justify-end space-x-2 py-4'>
            <Checkbox
              id='terms'
              defaultChecked={false}
              onCheckedChange={handleChekBox}
            />
            <label
              htmlFor='terms'
              className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
            >
              Pinyin Only
            </label>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default HanziPinyinConverter
