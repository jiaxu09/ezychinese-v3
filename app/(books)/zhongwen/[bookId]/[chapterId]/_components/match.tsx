'use client'
import {
  useGetLiteracyByChapter,
  useGetPinYin
} from '@/lib/react-query/queries'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import WellDone from '@/components/well-done'
import { notFound } from 'next/navigation'
import supabaseUrl from '@/lib/utils'

interface MatchProps {
  bookId: string
  chapterId: string
}

interface Card {
  id: number
  character: string
  pinyin: boolean
  match: number
  matched: boolean
}

const Match = ({ bookId, chapterId }: MatchProps) => {
  const [cards, setCards] = useState<Card[] | null>(null)
  const [gameFinished, setGameFinished] = useState(false)

  const [choiceOne, setChoiceOne] = useState<Card | null>(null)
  const [choiceTwo, setChoiceTwo] = useState<Card | null>(null)
  const [disabled, setDisabled] = useState(false)

  const { data, isFetched } = useQuery(
    useGetLiteracyByChapter(`${bookId}-${chapterId}`)
  )

  if (!data) {
    notFound()
  }

  const { data: pinyins } = useQuery(useGetPinYin(data?.questions!))

  const random_numbers = Array.from(Array(data?.answers.length).keys())
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    .slice(0, 6)

  useEffect(() => {
    let controller = new AbortController()

    if (pinyins && pinyins.length > 0) {
      const shuffledCards = [...data?.answers!, ...pinyins]
        .map((character, index) => ({
          character,
          id: Math.random(),
          matched: false,
          match:
            index > data?.answers?.length! - 1
              ? index - data?.answers?.length!
              : index,
          pinyin: index > data?.answers.length! - 1
        }))
        .filter(obj => random_numbers.includes(obj.match))
        .sort(() => Math.random() - 0.5)
      setCards(shuffledCards)
    }

    return () => {
      controller?.abort()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.answers, pinyins])

  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined
    if (cards && cards.every(card => card.matched === true)) {
      timeout = setTimeout(() => setGameFinished(true), 1500)
    }
    return () => {
      clearTimeout(timeout)
    }
  }, [cards])

  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined
    if (choiceOne && choiceTwo) {
      setDisabled(true)
      if (choiceOne.match === choiceTwo.match) {
        setCards(prevCards => {
          // @ts-ignore
          return prevCards.map((card: Card) => {
            if (card.match === choiceOne.match) {
              return { ...card, matched: true }
            } else {
              return card
            }
          })
        })
        resetTurn()
      } else {
        timeout = setTimeout(() => resetTurn(), 1000)
      }
    }
    return () => {
      clearTimeout(timeout)
    }
  }, [choiceOne, choiceTwo, setCards])

  const handleChoice = (card: Card) => {
    if (choiceOne === null || card.id !== choiceOne.id)
      //make sure the current card not click again
      choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setDisabled(false)
  }

  return (
    <>
      {gameFinished ? (
        <div className='flex items-center justify-center '>
          <div className='w-full animate-fade md:w-2/3'>
            <WellDone />
          </div>
        </div>
      ) : (
        <div className='mx-auto grid w-full grid-cols-3 place-items-center gap-4 py-4 md:w-2/3 md:grid-cols-4'>
          {cards?.map((card, index) => {
            let flipped =
              card === choiceOne || card === choiceTwo || card.matched
            return (
              <button
                disabled={disabled}
                className={`h-24 w-24 rounded-lg ${flipped ? 'flipped' : ''} `}
                key={index}
                onClick={e => {
                  e.preventDefault()
                  handleChoice(card)
                }}
                aria-label='match game'
              >
                <div className='inner relative h-24 w-24 '>
                  <div className='front'>
                    <div className='text-3xl font-medium'>
                      {card.pinyin ? (
                        <div className='flex h-24 w-24 items-center justify-center rounded-lg bg-crayola'>
                          {card.character}
                        </div>
                      ) : (
                        <div className='flex h-24 w-24 items-center justify-center rounded-lg bg-pewterblue'>
                          {card.character}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className='m-back bg-accent p-2 transition-all duration-500 ease-in-out'>
                    <Image
                      src={supabaseUrl('images/logo.webp')}
                      width={180}
                      height={163}
                      alt='ezyChinese match game'
                      priority
                      sizes='33vw'
                    />
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      )}
    </>
  )
}

export default Match
