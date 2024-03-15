import React from 'react'
import VocabularySearch from './_components/vocabulary-search'

export const metadata = {
  title: 'Chinese Vocabulary',
  description:
    'Discover meanings, pronunciations, and usage examples. Easily save words to flashcards for efficient learning. Start mastering Mandarin effortlessly now!'
}

const VocabularyPage = () => {
  return (
    <div className='container mx-auto flex flex-col items-center py-0 md:py-10'>
      <h1 className=' py-1 text-center text-xl text-primary md:text-4xl'>
        Vocabulary
      </h1>
      <VocabularySearch />
    </div>
  )
}

export default VocabularyPage
