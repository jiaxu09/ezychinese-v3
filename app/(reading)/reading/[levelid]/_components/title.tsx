import React from 'react'

interface TitleProps {
  levelId: string
}
const Title = ({ levelId }: TitleProps) => {
  return (
    <div className='flex flex-col items-center justify-center space-y-1'>
      <h2 className=' capitalize'>{levelId.toUpperCase()}</h2>
    </div>
  )
}

export default Title
