'use client'
import SearchInput from '@/components/search-input'
import { Input } from '@/components/ui/input'
import { useUser } from '@/lib/store/user'
import { RotateCcw } from 'lucide-react'
import React, { ChangeEvent, useState } from 'react'

const Vocabulary = () => {
  const user = useUser(state => state.user)
  const [searchedWord, setSearchedWord] = useState<string>('')
  const [isLoading, setLoading] = useState(false)

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    // if (e.target.value.length === 0) {
    //   refetch()
    //   setIdiom(undefined)
    // }
    // setSearchPhrase(e.target.value)
  }

  const handleSearch = async () => {}

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
      </div>
    </div>
  )
}

export default Vocabulary
