import React from 'react'
import StoryForm from './_components/story-form'
import HanziPinyinConverter from '@/components/hanzi-pinyin-converter'

const NewStoryPage = () => {
  return (
    <div className='container flex w-full flex-col items-center gap-8 py-0 md:py-10'>
      <h1 className=' py-1 text-center text-xl text-primary md:text-4xl'>
        New Story
      </h1>
      <div className='grid w-full'>
        <StoryForm />
      </div>
    </div>
  )
}

export default NewStoryPage
