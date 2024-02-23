'use client'
import React from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import CorrectOrderForm from './quiz-form/correct_order-form'
import FormPhrasesForm from './quiz-form/form_phrases-form'
import RightExplanationForm from './quiz-form/right_explanation-form'
import FindDifferenceForm from './quiz-form/find_difference-form'

const tabs = ['连词成句', '正确解释', '连成词语', '找出不同']

type QuizFormTabsProps = {
  bookId: string
  chapterId: string
}
const QuizFormTabs = ({ bookId, chapterId }: QuizFormTabsProps) => {
 

  return (
    <div className="container mx-auto w-full ">
      <Tabs defaultValue="连词成句" className="w-full">
        <TabsList className="w-full gap-12">
          {tabs.map((tab) => (
            <TabsTrigger key={tab} value={tab}>
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="连词成句">
          <CorrectOrderForm
            bookId={bookId}
            chapterId={chapterId}
          />
        </TabsContent>
        <TabsContent value="正确解释">
          <FormPhrasesForm />
        </TabsContent>
        <TabsContent value="连成词语">
          <RightExplanationForm />
        </TabsContent>
        <TabsContent value="找出不同">
          <FindDifferenceForm />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default QuizFormTabs
