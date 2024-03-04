'use client'
import React, { Dispatch, useState } from 'react'
import CorrectOrder from './quiz/correct-order'

interface QuizCorrectOrderProps {
  quiz: any
  setCurrentCompleted: Dispatch<React.SetStateAction<boolean>>
}

interface CorrectOrder {
  question: []
  answer: string
}
const QuizCorrectOrder = ({
  quiz,
  setCurrentCompleted
}: QuizCorrectOrderProps) => {
  const [correct_order] = useState<CorrectOrder[]>(quiz.correct_order)
 

  return (
    <div className='flex animate-fade-left flex-col items-center justify-center animate-duration-1000 animate-fill-both animate-ease-in-out'>
      <h1 className='pb-4 text-center'>选择词语连词成句</h1>
      {correct_order.map((item, j) => (
        <CorrectOrder
          setCurrentCompleted={setCurrentCompleted}
          numberOfQuestions={correct_order.length}
          index={j}
          key={j}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
  )
}

export default QuizCorrectOrder
