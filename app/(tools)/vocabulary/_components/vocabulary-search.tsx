'use client'
import LiteracyPractice from '@/app/(books)/_components/literacy-practice'
import SearchInput from '@/components/search-input'
import { Button } from '@/components/ui/button'
import { fetchAPI } from '@/lib/api'
import { useUser } from '@/lib/store/user'
import { Vocabulary } from '@/lib/types'
import React, { ChangeEvent, useState } from 'react'
import Dictionary from './dictionary'

const VocabularySearch = () => {
  const user = useUser(state => state.user)
  const [inputWord, setInputWord] = useState<string>('')
  const [searchedWord, setSearchedWord] = useState<string[]>([])

  const [searchResult, setSearchResult] = useState<Vocabulary>()

  const [isLoading, setLoading] = useState(false)

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    // if (e.target.value.length === 0) {
    //   refetch()
    //   setIdiom(undefined)
    // }
    setInputWord(e.target.value)
  }

  const handleSearch = async () => {
    setLoading(true)
    if (inputWord.length === 0) {
      setLoading(false)
      return
    }

    const vocabularyRes: Vocabulary = await fetchAPI(inputWord, 'youdao-dict')
    setSearchResult(vocabularyRes)
    setSearchedWord(inputWord.split(''))

    setLoading(false)
  }

  return (
    <div className='flex w-full flex-col items-center'>
      <div className='flex w-full flex-wrap items-center justify-center gap-4 py-4 md:w-1/2 md:flex-nowrap'>
        <SearchInput
          inputHandler={inputHandler}
          searchedPhrase={inputWord}
          handleSearch={handleSearch}
          isLoading={isLoading}
          placeholder='Enter Chinese word or phrase..'
        />
      </div>
      <div className='grid w-full grid-cols-2 py-8'>
        <div className='flex items-center justify-center'>
          {searchedWord.length > 0 && (
            <LiteracyPractice characters={searchedWord} isWriterShow={false} />
          )}
        </div>
        <div className='flex bg-red-600'>
          <Dictionary vocabulary={searchResult} />
        </div>
      </div>
    </div>
  )
}

export default VocabularySearch
