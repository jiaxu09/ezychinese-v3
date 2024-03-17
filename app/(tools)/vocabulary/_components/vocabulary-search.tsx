'use client'
import LiteracyPractice from '@/app/(books)/_components/literacy-practice'
import SearchInput from '@/components/search-input'
import { Button } from '@/components/ui/button'
import { fetchAPI } from '@/lib/api'
import { useUser } from '@/lib/store/user'
import { Vocabulary } from '@/lib/types'
import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Dictionary from './dictionary'
import { useToast } from '@/components/ui/use-toast'

const VocabularySearch = () => {
  const user = useUser(state => state.user)
  const [inputWord, setInputWord] = useState<string>('')
  const [searchedWord, setSearchedWord] = useState<string[]>([])

  const [searchResult, setSearchResult] = useState<Vocabulary>()

  const [isLoading, setLoading] = useState(false)

  const { toast } = useToast()

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length === 0) {
      setSearchedWord([])
    }
    setInputWord(e.target.value)
  }

  const performSearch = async () => {
    setLoading(true)

    if (inputWord.length === 0) {
      setLoading(false)
      return
    }
    setSearchedWord([])
    const vocabularyRes: Vocabulary = await fetchAPI(inputWord, 'zh-en')
    console.log(vocabularyRes)
    if (!vocabularyRes) {
      toast({
        variant: 'destructive',
        title: 'Please try again later.'
      })
    }
    setSearchResult(vocabularyRes)
    setSearchedWord(inputWord.split(''))

    setLoading(false)
  }

  const handleSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      performSearch()
    }
  }

  return (
    <div className='flex w-full flex-col items-center justify-center'>
      <div className='flex w-full flex-wrap items-center justify-center gap-4 py-4 md:w-1/2 md:flex-nowrap'>
        <SearchInput
          inputHandler={inputHandler}
          searchedPhrase={inputWord}
          handleSearch={performSearch}
          isLoading={isLoading}
          handleKeyPress={handleSearch}
          placeholder='Enter Chinese word or phrase..'
        />
      </div>
      <div className='grid w-full grid-cols-1 py-8 md:grid-cols-3'>
        <div className=' container'>
          {searchedWord.length > 0 && (
            <LiteracyPractice characters={searchedWord} isWriterShow={false} />
          )}
        </div>
        <div className='col-span-2 flex w-full '>
          {searchedWord.length > 0 && (
            <Dictionary vocabulary={searchResult} searchedWord={searchedWord} />
          )}
        </div>
      </div>
    </div>
  )
}

export default VocabularySearch
