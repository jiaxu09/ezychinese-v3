'use client'
import LiteracyPractice from '@/app/(books)/_components/literacy-practice'
import SearchInput from '@/components/search-input'
import { Button } from '@/components/ui/button'
import { useUser } from '@/lib/store/user'
import React, { ChangeEvent, useState } from 'react'

const Vocabulary = () => {
  const user = useUser(state => state.user)
  const [inputWord, setInputWord] = useState<string>('')
  const [searchedWord, setSearchedWord] = useState<string>('')
  const [searchSource, setSearchSource] = useState<number>(0)

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

    let result
    if (searchSource === 0) {
      //金山词霸
      // result = (await fetchIciba(searchedPhrase)) as IIdiom
    } else {
      // youdao-idiom
      // result = (await fetchYoudaoIdiom(searchedPhrase)) as IIdiom
    }
  }

  return (
    <div className='flex w-full flex-col items-center'>
      <div className='flex w-full flex-wrap items-center justify-center gap-4 py-4 md:w-1/2 md:flex-nowrap'>
        <SearchInput
          inputHandler={inputHandler}
          searchedPhrase={searchedWord}
          handleSearch={handleSearch}
          isLoading={isLoading}
          placeholder='Enter Chinese word or phrase..'
        />
        <div className='flex items-center space-x-2'>
          <span>Source:</span>
          <div onClick={() => setSearchSource(0)}>
            {/* iciba */}
            <Button
              className=' h-8 w-8 rounded-full'
              variant={`${searchSource === 0 ? 'default' : 'outline'}`}
              size='icon'
            >
              1
            </Button>
          </div>
          <div onClick={() => setSearchSource(1)}>
            {/* youdao-idiom */}
            <Button
              className=' h-8 w-8 rounded-full'
              variant={`${searchSource === 1 ? 'default' : 'outline'}`}
              size='icon'
            >
              2
            </Button>
          </div>
        </div>
      </div>
      <div className='grid w-full grid-cols-2'>
        {searchedWord.length > 0 && (
          <LiteracyPractice
            characters={searchedWord.split('')}
            isWriterShow={false}
          />
        )}
      </div>
    </div>
  )
}

export default Vocabulary
