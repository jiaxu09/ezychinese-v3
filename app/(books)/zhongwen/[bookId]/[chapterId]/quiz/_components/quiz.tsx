'use client'

import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronRight, MessageCircleWarning } from 'lucide-react'

import WellDone from '@/components/well-done'
import QuizCorrectOrder from './quiz-correct-order'
import QuizRightExplanation from './quiz-right-explanation'
import QuizFormPhrases from './quiz-form-phrases'
import QuizFindDifference from './quiz-find-difference'

const quiz = {
  form_phrases: [
    {
      choices_a: ['街', '真', '上', '看', '方', '红', '停'],
      choices_b: ['见', '向', '道', '是', '水', '学', '灯'],
      answers: ['街道', '看见', '上学', '红灯', '停水', '真是', '方向'],
    },
  ],
  right_explanation: [
    {
      sentence: '锄禾日当午',
      choices: ['一天', '太阳', '每天', '天天'],
      answer: '太阳',
      question: '日',
    },
    {
      sentence: '春眠不觉晓',
      choices: ['明白', '天亮', '天黑', '晚上'],
      answer: '天亮',
      question: '晓',
    },
    {
      sentence: '处处闻啼鸟',
      choices: ['看见', '用鼻子闻到', '听见'],
      answer: '听见',
      question: '闻',
    },
  ],
  find_difference: [
    {
      question: ['哥哥', '牛奶', '姐姐', '奶奶'],
      answer: '牛奶',
    },
  ],
}

const Quiz = () => {
  //The type of question
  const [index, setIndex] = useState<number>(0)
  const [currentCompleted, setCurrentCompleted] = useState(false)
  const [isAllDone, setAllDone] = useState(false)

  const handleProgress = () => {
    setIndex(index + 1)
  }
  useEffect(() => {
    if (index === Object.keys(quiz).length && currentCompleted) {
      setAllDone(true)
    }
  }, [currentCompleted, index])

  if (Object.keys(quiz).length === 0 && quiz.constructor === Object) {
    return (
      <div className="flex flex-col items-center justify-center space-y-4 py-20">
        <MessageCircleWarning className="w-20 h-20 md:w-36 md:h-36 text-primary" />
        <p className=" text-lg md:text-2xl">No quiz was found</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-2 w-full  ">
      {Object.keys(quiz).map((key, i) => (
        <div className="w-full " key={i}>
          {key === 'correct_order' && index === i && !isAllDone && (
            <QuizCorrectOrder
              quiz={quiz}
              setCurrentCompleted={setCurrentCompleted}
            />
          )}
          {key === 'right_explanation' && index === i && !isAllDone && (
            <QuizRightExplanation
              quiz={quiz}
              setCurrentCompleted={setCurrentCompleted}
            />
          )}
          {key === 'form_phrases' && index === i && !isAllDone && (
            <QuizFormPhrases
              quiz={quiz}
              setCurrentCompleted={setCurrentCompleted}
            />
          )}
          {key === 'find_difference' && index === i && !isAllDone && (
            <QuizFindDifference
              quiz={quiz}
              setCurrentCompleted={setCurrentCompleted}
            />
          )}
        </div>
      ))}

      {isAllDone && (
        <div className="w-2/3 mx-auto">
          <WellDone />
        </div>
      )}
      {index < Object.keys(quiz).length && currentCompleted && (
        <Button
          onClick={handleProgress}
          variant="default"
          className="animate-fade-up w-1/3 mx-auto text-center my-6"
        >
          Next <ChevronRight className="w-5 h-5 " />
        </Button>
      )}
    </div>
  )
}

export default Quiz
