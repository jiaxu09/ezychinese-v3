'use client'
import React from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import CorrectOrderForm from './quiz-form/correct_order-form'
import FormPhrasesForm from './quiz-form/form_phrases-form'
import RightExplanationForm from './quiz-form/right_explanation-form'
import FindDifferenceForm from './quiz-form/find_difference-form'
import { useUser } from '@/lib/store/user'
import Unauthorized from '@/components/unauthorized'

const tabs = ['连词成句', '正确解释', '组成词语', '找出不同']

type QuizFormTabsProps = {
  bookId: string
  chapterId: string
}
const QuizFormTabs = ({ bookId, chapterId }: QuizFormTabsProps) => {
  const user = useUser(state => state.user)

  if (user?.role !== 'admin') {
    return <Unauthorized />
  }

  return (
    <div className=' w-full '>
      <h2 className=' text-center text-lg'>添加-新练习</h2>
      <Tabs defaultValue='连词成句' className='w-full'>
        <TabsList className='w-full gap-12'>
          {tabs.map(tab => (
            <TabsTrigger key={tab} value={tab}>
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value='连词成句'>
          <CorrectOrderForm bookId={bookId} chapterId={chapterId} />
        </TabsContent>
        <TabsContent value='正确解释'>
          <RightExplanationForm bookId={bookId} chapterId={chapterId} />
        </TabsContent>
        <TabsContent value='组成词语'>
          <FormPhrasesForm bookId={bookId} chapterId={chapterId} />
        </TabsContent>
        <TabsContent value='找出不同'>
          <FindDifferenceForm bookId={bookId} chapterId={chapterId} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default QuizFormTabs
