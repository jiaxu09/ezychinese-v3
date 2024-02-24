'use client'
import React from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import CorrectOrderForm from './quiz-form/correct_order-form'
import FormPhrasesForm from './quiz-form/form_phrases-form'
import RightExplanationForm from './quiz-form/right_explanation-form'
import FindDifferenceForm from './quiz-form/find_difference-form'
import { useUser } from '@/lib/store/user'
import { Siren } from 'lucide-react'

const tabs = ['连词成句', '正确解释', '组成词语', '找出不同']

type QuizFormTabsProps = {
  bookId: string
  chapterId: string
}
const QuizFormTabs = ({ bookId, chapterId }: QuizFormTabsProps) => {
  const user = useUser((state) => state.user)

  if (user?.role !== 'admin') {
    return (
      <div className=" text-center flex flex-col justify-center items-center space-y-4 py-10">
        <div className="w-full flex items-center justify-center space-x-4">
          <Siren className="w-8 h-8 text-destructive" />
          <h1 className=" text-4xl">Hold Up!</h1>
        </div>
        <p className=" text-lg">401 Unauthorized</p>
      </div>
    )
  }
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
          <CorrectOrderForm bookId={bookId} chapterId={chapterId} />
        </TabsContent>
        <TabsContent value="正确解释">
          <RightExplanationForm bookId={bookId} chapterId={chapterId} />
        </TabsContent>
        <TabsContent value="组成词语">
          <FormPhrasesForm bookId={bookId} chapterId={chapterId} />
        </TabsContent>
        <TabsContent value="找出不同">
          <FindDifferenceForm bookId={bookId} chapterId={chapterId} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default QuizFormTabs
