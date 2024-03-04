'use client'
import React, { Dispatch, useState } from 'react'
import RightExplanation from './quiz/right-explanation'

interface QuizRightExplanationProps {
  quiz: any
  setCurrentCompleted: Dispatch<React.SetStateAction<boolean>>
}

interface RightExplanation {
  sentence: string
  choices: string[]
  answer: string
  question: string
}
const QuizRightExplanation = ({
  quiz,
  setCurrentCompleted
}: QuizRightExplanationProps) => {
  const [right_explanation] = useState<RightExplanation[]>(
    quiz.right_explanation
  )

  return (
    <div className='flex w-full animate-fade-left flex-col items-center justify-center animate-duration-1000 animate-fill-both animate-ease-in-out'>
      <h1 className='pb-4 text-center'>选择正确解释</h1>
      {right_explanation.map((item, index) => (
        <RightExplanation
          index={index}
          key={index}
          sentence={item.sentence}
          choices={item.choices}
          answer={item.answer}
          setCurrentCompleted={setCurrentCompleted}
          numberOfQuestions={quiz.right_explanation.length}
          question={item.question}
        />
      ))}
    </div>
  )
}

export default QuizRightExplanation
