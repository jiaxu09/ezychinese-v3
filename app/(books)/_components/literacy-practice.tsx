'use client'
import React, { useEffect, useState } from 'react'
import HanziWriter from 'hanzi-writer'
import { PenLine, RotateCcw, Volume2 } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import {
  useGetSpeech,
  useHanziDictionary,
  useHanziEnglish,
  useHanziIcibaMeaning
} from '@/lib/react-query/queries'
import Dictionary from './literacy/dictionary'
import English from './literacy/english'
import Meaning from './literacy/meaning'
import Sentences from './literacy/sentences'
import { cn } from '@/lib/utils'

interface LiteracyPracticeProps {
  characters: string[]
  isWriterShow: boolean
}

const LiteracyPractice = ({
  characters,
  isWriterShow = true
}: LiteracyPracticeProps) => {
  const [writer, setWriter] = useState<HanziWriter | null>(null)
  const [quiz, setQuiz] = useState<HanziWriter | null>(null)
  const [isSoundLoading, setIsSoundLoading] = useState(false)
  const [enabled, setEnabled] = useState(false)
  const [selectedCharacter, setSelectedCharacter] = useState('')

  useEffect(() => {
    setEnabled(false)
  }, [selectedCharacter])

  const { data: dictionary, isLoading: isLoadingDictionary } = useQuery(
    useHanziDictionary(selectedCharacter)
  )

  const { data: english, isLoading: isLoadingEnglish } = useQuery(
    useHanziEnglish(selectedCharacter)
  )

  const { data: meaning, isLoading: isLoadingMeaning } = useQuery(
    useHanziIcibaMeaning(selectedCharacter)
  )

  const { data: base64 } = useQuery(useGetSpeech(selectedCharacter, enabled))

  const handleCharacterClick = (character: string) => {
    setSelectedCharacter(character)

    if (!writer) {
      setWriter(
        HanziWriter.create('character-target-div', `${character}`, {
          width: 300,
          height: 300,
          padding: 5,
          strokeAnimationSpeed: 1
        })
      )
    } else {
      writer?.setCharacter(character)
    }

    if (isWriterShow) {
      if (!quiz) {
        const quiz = HanziWriter.create('character-quiz-div', `${character}`, {
          width: 300,
          height: 300,
          padding: 5,
          showCharacter: false
        })
        setQuiz(quiz)
        quiz.quiz()
      } else {
        quiz.setCharacter(character)
        quiz.quiz()
      }
    }
  }

  const handleAnimate = () => {
    if (selectedCharacter) {
      writer?.animateCharacter()
    }
  }
  const handleSound = async () => {
    setIsSoundLoading(true)
    setEnabled(true)

    if (base64) {
      const audio = new Audio('data:audio/wav;base64,' + base64)
      audio?.play()
    }
    setIsSoundLoading(false)
  }

  const handleAnimateReset = () => {
    if (quiz && selectedCharacter) {
      quiz.setCharacter(selectedCharacter)
      quiz.quiz()
    }
  }

  return (
    <div className='flex flex-col items-center justify-center space-y-4  pb-10'>
      <div
        className={cn(
          'grid  gap-6 ',
          isWriterShow ? 'grid-cols-5' : 'grid-cols-3'
        )}
      >
        {characters.map((char, index) => (
          <div key={index} className='flex items-center justify-center p-2'>
            <div
              onClick={() => handleCharacterClick(char)}
              className=' cursor-pointer rounded-lg border border-primary p-4'
            >
              <span className=' text-lg md:text-6xl'>{char}</span>
            </div>
          </div>
        ))}
      </div>
      <div
        className={cn(
          'flex flex-wrap items-center md:flex-nowrap md:space-x-4',
          !isWriterShow && 'flex-nowrap'
        )}
      >
        <div className='flex flex-col items-center justify-center space-y-4'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            id='character-target-div'
            className='h-[300px] w-[300px] border-2 border-secondary'
          >
            <line x1='0' y1='0' x2='300' y2='300' stroke='#DDD' />
            <line x1='300' y1='0' x2='0' y2='300' stroke='#DDD' />
            <line x1='150' y1='0' x2='150' y2='300' stroke='#DDD' />
            <line x1='0' y1='150' x2='300' y2='150' stroke='#DDD' />
          </svg>
          <div className='flex items-center justify-center space-x-3'>
            <div
              aria-label='ezyChinese hanzi animate'
              className=' cursor-pointer'
              onClick={handleAnimate}
            >
              <PenLine className='h-8 w-8 text-pastelblue ' />
            </div>
            <div>
              {isSoundLoading ? (
                <RotateCcw className=' h-8 w-8 animate-spin text-crayola' />
              ) : (
                <div
                  aria-label='ezyChinese hanzi sound'
                  className=' cursor-pointer'
                >
                  <Volume2
                    onClick={handleSound}
                    className='h-8 w-8 text-crayola '
                  />
                </div>
              )}
            </div>
            <div className=' cursor-pointer'>
              {isLoadingDictionary ? (
                <RotateCcw className=' h-8 w-8 animate-spin text-pewterblue' />
              ) : (
                <Dictionary
                  strokes={dictionary?.strokes}
                  radical={dictionary?.radicals}
                  pinyin={dictionary?.pinyin}
                />
              )}
            </div>
            <div className=' cursor-pointer'>
              {isLoadingEnglish ? (
                <RotateCcw className=' h-8 w-8 animate-spin text-skyblue' />
              ) : (
                <English english={english} />
              )}
            </div>
            {isWriterShow && (
              <div className=' cursor-pointer'>
                {isLoadingMeaning ? (
                  <RotateCcw className=' h-8 w-8 animate-spin text-green' />
                ) : (
                  <Meaning meaning={meaning?.meaning} />
                )}
              </div>
            )}

            {isWriterShow && (
              <div className=' cursor-pointer'>
                {isLoadingMeaning ? (
                  <RotateCcw className=' h-8 w-8 animate-spin text-green' />
                ) : (
                  <Sentences sentences={meaning?.sentences} />
                )}
              </div>
            )}
          </div>
        </div>
        {isWriterShow && (
          <div className='flex flex-col items-center space-y-4 pt-4 md:pt-0'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              id='character-quiz-div'
              className='h-[300px] w-[300px] border-2 border-primary'
            >
              <line x1='0' y1='0' x2='300' y2='300' stroke='#DDD' />
              <line x1='300' y1='0' x2='0' y2='300' stroke='#DDD' />
              <line x1='150' y1='0' x2='150' y2='300' stroke='#DDD' />
              <line x1='0' y1='150' x2='300' y2='150' stroke='#DDD' />
            </svg>
            <div className=' cursor-pointer' onClick={handleAnimateReset}>
              <RotateCcw className=' h-8 w-8  text-green' />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default LiteracyPractice
