import React from 'react'
import NewMultipleChoice from './new-multiple-choice'
import NewMultipleChoiceListening from './new-multiple-choice-listening'
import NewSelectRightPinyin from './new-select-right-pinyin'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const tabs = [
  'Multiple Choice',
  'Multiple Choice Listening',
  'Select Right Pinyin'
]
interface NewQuizProps {
  bookId: string
  chapterId: string
}
const NewQuiz = ({ bookId, chapterId }: NewQuizProps) => {
  return (
    <div className='container mx-auto w-full'>
      <h2 className=' text-center text-lg'>添加-新练习</h2>
      <Tabs defaultValue='Multiple Choice' className='w-full'>
        <TabsList className='w-full gap-12'>
          {tabs.map(tab => (
            <TabsTrigger key={tab} value={tab}>
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value='Multiple Choice'>
          <NewMultipleChoice bookId={bookId} chapterId={chapterId} />
        </TabsContent>
        <TabsContent value='Multiple Choice Listening'>
          <NewMultipleChoiceListening bookId={bookId} chapterId={chapterId} />
        </TabsContent>
        <TabsContent value='Select Right Pinyin'>
          <NewSelectRightPinyin bookId={bookId} chapterId={chapterId} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default NewQuiz
