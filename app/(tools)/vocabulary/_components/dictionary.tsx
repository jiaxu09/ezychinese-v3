import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Vocabulary } from '@/lib/types'
import React from 'react'

interface DictionaryProps {
  vocabulary?: Vocabulary
}

const Dictionary = ({ vocabulary }: DictionaryProps) => {
  console.log(vocabulary)
  return (
    <div>
      {vocabulary && (
        <div>
          <h2>Chinese English Dictionary</h2>
          <Tabs defaultValue={Object.keys(vocabulary)[0]} className='w-[400px]'>
            <TabsList className='grid w-full grid-cols-3'>
              {Object.keys(vocabulary).map((item, index) => (
                <TabsTrigger key={index} value='item'>
                  {item}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      )}
    </div>
  )
}

export default Dictionary
