'use client'

import React from 'react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import GenerateStory from './generate-story'
import SaveStory from './save-story'

const tabs = ['Generate Story', 'New Story']
const StoryForm = () => {
  return (
    <div className='w-full'>
      <Tabs defaultValue='Generate Story'>
        <TabsList className='grid w-full grid-cols-2'>
          {tabs.map(tab => (
            <TabsTrigger key={tab} value={tab}>
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value='Generate Story'>
          <GenerateStory />
        </TabsContent>
        <TabsContent value='New Story'>
          <SaveStory />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default StoryForm
