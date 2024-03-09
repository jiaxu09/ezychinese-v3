'use client'
import Unauthorized from '@/components/unauthorized'
import { useUser } from '@/lib/store/user'
import React from 'react'
import NewWords from './new-words'
import NewSentences from './new-sentences'
import NewTexts from './new-texts'
import NewWritings from './new-writings'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const tabs = ['New Words', 'New Texts', 'New Sentences', 'New Writing']
interface NewPracticesProps {
  bookId: string
  chapterId: string
}
const NewPractices = ({ bookId, chapterId }: NewPracticesProps) => {
  const user = useUser(state => state.user)

  if (user?.role !== 'admin') {
    return <Unauthorized />
  }
  return (
    <div className='container mx-auto w-full '>
      <h2 className=' text-center text-lg'>添加-新练习</h2>
      <Tabs defaultValue='New Words' className='w-full'>
        <TabsList className='w-full gap-12'>
          {tabs.map(tab => (
            <TabsTrigger key={tab} value={tab}>
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value='New Words'>
          <NewWords bookId={bookId} chapterId={chapterId} />
        </TabsContent>
        <TabsContent value='New Texts'>
          <NewTexts bookId={bookId} chapterId={chapterId} />
        </TabsContent>
        <TabsContent value='New Sentences'>
          <NewSentences bookId={bookId} chapterId={chapterId} />
        </TabsContent>
        <TabsContent value='New Writing'>
          <NewWritings bookId={bookId} chapterId={chapterId} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default NewPractices
