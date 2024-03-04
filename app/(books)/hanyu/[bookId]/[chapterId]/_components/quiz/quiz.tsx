'use client'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import React, { useState } from 'react'
import MultipleChoice from './multiple-choice'
import MultipleChoiceListening from './multiple-choice-listening'

const quiz = {
  multipleChoice_hanyu: [
    {
      question: '我__王小华.',
      choices: ['是', '好', '不'],
      rightAnswer: '是'
    },
    {
      question: '__是我爸爸..',
      choices: ['她', '他', '我'],
      rightAnswer: '他'
    }
  ],
  multipleChoiceListening_hanyu: [
    {
      audio:
        'https://jyemvxshpznmgnzoxuhp.supabase.co/storage/v1/object/public/ezyChinese/mp3/ttsmaker-file-2024-3-4-13-35-16.mp3',
      choices: ['王小华', '张晓明', '陈小强'],
      rightAnswer: '王小华'
    },
    {
      audio:
        'https://jyemvxshpznmgnzoxuhp.supabase.co/storage/v1/object/public/ezyChinese/mp3/ttsmaker-file-2024-3-4-13-35-16.mp3',
      choices: ['王华', '张明', '陈强'],
      rightAnswer: '王小华'
    }
  ],
  selectRightPinyin_hanyu: [
    {
      audio:
        'https://jyemvxshpznmgnzoxuhp.supabase.co/storage/v1/object/public/ezyChinese/mp3/ttsmaker-file-2024-3-4-13-35-16.mp3',
      choices: ['guan', 'guang'],
      rightAnswer: 'guan'
    }
  ]
}
const Quiz = () => {
  const [index, setIndex] = useState<number>(1)
  const [currentCompleted, setCurrentCompleted] = useState(false)
  const [isAllDone, setAllDone] = useState(false)

  const handleProgress = () => {
    setCurrentCompleted(false)
    setIndex(index + 1)
  }
  return (
    <div className='flex w-full flex-col gap-2  '>
      {quiz &&
        Object.keys(quiz).map((key, i) => (
          <div className='w-full ' key={i}>
            {key === 'multipleChoice_hanyu' && index === i && !isAllDone && (
              <MultipleChoice
                quiz={quiz}
                setCurrentCompleted={setCurrentCompleted}
              />
            )}
            {key === 'multipleChoiceListening_hanyu' &&
              index === i &&
              !isAllDone && (
                <MultipleChoiceListening
                  quiz={quiz}
                  setCurrentCompleted={setCurrentCompleted}
                />
              )}
            {key === 'selectRightPinyin_hanyu' && index === i && !isAllDone && (
              <p>3</p>
            )}
          </div>
        ))}

      {/* {isAllDone && (
        <div className='mx-auto w-2/3'>
          <WellDone />
        </div>
      )} */}
      {quiz && index < Object.keys(quiz).length && currentCompleted && (
        <Button
          onClick={handleProgress}
          variant='default'
          className='mx-auto my-6 w-1/3 animate-fade-up text-center'
        >
          Next <ChevronRight className='h-5 w-5 ' />
        </Button>
      )}
    </div>
  )
}

export default Quiz
