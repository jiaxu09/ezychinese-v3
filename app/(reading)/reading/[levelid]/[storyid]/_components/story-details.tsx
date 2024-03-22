'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'
import Story from './story'
import EnglishStory from './english-story'
import Grammar from './grammar'
import Exercise from './exercises'
import { useQuery } from '@tanstack/react-query'
import { useFetchStoryBySlug } from '@/lib/react-query/queries'
import { notFound } from 'next/navigation'

const tabs = ['Story', 'English Story', 'Grammar', 'Exercise']

interface StoryDetailsProps {
  levelId: string
  storyId: string
}
const StoryDetails = ({ levelId, storyId }: StoryDetailsProps) => {
  const { data: story, isFetched } = useQuery(useFetchStoryBySlug(storyId))

  if (isFetched && !story) {
    notFound()
  }

  return (
    <div className='flex flex-col space-y-4 md:py-2'>
      <h3 className=' text-center text-lg font-medium'>{story?.zh_title}</h3>
      <p className=' text-center'>{story?.en_title}</p>
      <Tabs defaultValue='Story' className='mx-auto w-full md:w-4/5'>
        <TabsList className='grid w-full grid-cols-3 gap-2 md:grid-cols-4'>
          {tabs.map(tab => (
            <TabsTrigger key={tab} value={tab}>
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent className='w-full  py-4' value='Story'>
          <Story story={story?.story} audio={story?.audio}/>
        </TabsContent>
        <TabsContent className='w-full  py-4' value='English Story'>
          <EnglishStory story={story?.en_story} />
        </TabsContent>
        <TabsContent className='w-full  py-4' value='Grammar'>
          <Grammar grammar={story?.grammar} />
        </TabsContent>
        <TabsContent className='w-full  py-4' value='Exercise'>
          <Exercise exercises={story?.exercises} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default StoryDetails
