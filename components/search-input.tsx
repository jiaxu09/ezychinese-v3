'use client'
import React, { ChangeEvent } from 'react'
import { Input } from './ui/input'
import { RotateCcw, Search } from 'lucide-react'

interface SearchInputProps {
  inputHandler: (e: ChangeEvent<HTMLInputElement>) => void
  searchedPhrase: string
  handleSearch: () => Promise<void>
  isLoading: boolean
  placeholder: string
}
const SearchInput = ({
  inputHandler,
  searchedPhrase,
  handleSearch,
  isLoading,
  placeholder
}: SearchInputProps) => {
  return (
    <div className='relative flex w-full items-center'>
      <Input
        onChange={inputHandler}
        type='text'
        placeholder={placeholder}
        value={searchedPhrase}
      />
      <div className=' absolute right-2 cursor-pointer' onClick={handleSearch}>
        {isLoading ? (
          <RotateCcw className='h-5 w-5 animate-spin' />
        ) : (
          <Search className='h-5 w-5' />
        )}
      </div>
    </div>
  )
}

export default SearchInput
