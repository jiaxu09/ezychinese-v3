'use client'
import Unauthorized from '@/components/unauthorized'
import { useUser } from '@/lib/store/user'
import React from 'react'
import NewOrderWords from './order-words'
import NewSelectRightChoice from './select-right-choice'
import NewSelectWord from './select-word'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const tabs = ['Order words', 'Select Right Choice', 'Select word']

interface NewQuizProps {
  bookId: string
  chapterId: string
}
const NewQuiz = ({ bookId, chapterId }: NewQuizProps) => {
  const user = useUser(state => state.user)
  if (!user || user.role !== 'admin') {
    return (
      <div className='mx-auto w-full'>
        <Unauthorized />
      </div>
    )
  }
  return (
    <div className=' container mx-auto w-full'>
      <h2 className=' text-center text-lg'>添加-新练习</h2>
      <Tabs defaultValue='Order words' className='w-full'>
        <TabsList className='w-full gap-12'>
          {tabs.map(tab => (
            <TabsTrigger key={tab} value={tab}>
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value='Order words'>
          <NewOrderWords bookId={bookId} chapterId={chapterId} />
        </TabsContent>
        <TabsContent value='Select Right Choice'>
          <NewSelectRightChoice bookId={bookId} chapterId={chapterId} />
        </TabsContent>
        <TabsContent value='Select word'>
          <NewSelectWord bookId={bookId} chapterId={chapterId} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default NewQuiz
