import { Link2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface VocabulariesProps {
  vocabularies?: { word: string; meaning: string }[]
}

const Vocabularies = ({ vocabularies }: VocabulariesProps) => {
  return (
    <div className='flex w-full flex-col justify-center space-y-4 '>
      {vocabularies?.map((item, index) => (
        <div
          className='flex items-center space-x-1 p-1 odd:bg-foreground'
          key={index}
        >
          <p>{item.word}:</p>
          <p>{item.meaning}</p>
          <Link href={`/vocabulary?search=${item.word}`}>
            <Link2 />
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Vocabularies
