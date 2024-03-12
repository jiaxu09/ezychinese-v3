import React from 'react'

const LoadingCSS = () => {
  return (
    <div className='flex h-full min-h-[50vh] w-full flex-col items-center justify-center'>
      <div className='lds-grid'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default LoadingCSS
