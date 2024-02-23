'use client'
import React, { Dispatch, useState } from 'react'
import FindDifference from './quiz/find-difference'

interface QuizFindDifferenceProps {
  quiz: any
  setCurrentCompleted: Dispatch<React.SetStateAction<boolean>>
}

interface FindDifference {
  question: string[]
  answer: string
}

const QuizFindDifference = ({
  quiz,
  setCurrentCompleted,
}: QuizFindDifferenceProps) => {
  const [find_difference] = useState<FindDifference[]>(quiz.find_difference)

  if (!quiz.hasOwnProperty('find_difference')) {
    return <></>
  }
  return (
    <div className="flex flex-col items-center justify-center w-full animate-fade-left animate-duration-1000 animate-ease-in-out animate-fill-both">
      <h1 className="pb-4 text-center">找出不同类的词</h1>
      {find_difference.map((item, index) => (
        <FindDifference
          setCurrentCompleted={setCurrentCompleted}
          numberOfQuestions={quiz.find_difference.length}
          key={index}
          question={item['question']}
          answer={item['answer']}
          index={index}
        />
      ))}
    </div>
  )
}

export default QuizFindDifference
