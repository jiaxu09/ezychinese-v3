import React from 'react'

interface EnglishStoryProps {
  story?: string
}

const EnglishStory = ({ story }: EnglishStoryProps) => {
  return (
    <div className=' leading-6 tracking-wider md:text-lg md:leading-8 md:tracking-widest'>
      {story?.split('\n').map((item, key) => {
        return (
          <span key={key}>
            {item}
            <br />
          </span>
        )
      })}
    </div>
  )
}

export default EnglishStory
