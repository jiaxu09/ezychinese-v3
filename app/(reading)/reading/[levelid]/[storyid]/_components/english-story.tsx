import React from 'react'

interface EnglishStoryProps {
  story: string
}
const EnglishStory = ({ story }: EnglishStoryProps) => {
  return (
    <div className=' leading-6 tracking-wider md:text-lg md:leading-8 md:tracking-widest'>
      {story}
    </div>
  )
}

export default EnglishStory
