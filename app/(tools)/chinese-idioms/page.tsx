import Image from 'next/image'
import React from 'react'
import CreateButton from './_components/create-button'
import EditSwitch from './_components/edit-switch'

const ChineseIdiomsPage = () => {
  return (
    <div className="container mx-auto flex flex-col items-center py-10">
      <h1 className=" text-2xl md:text-4xl text-center py-2">Chinese Idioms</h1>
      <div className="grow"></div>
      <div className="fixed bottom-20 right-10 md:right-48">
        <div className="flex gap-6 items-center justify-center">
          <CreateButton />
          <EditSwitch />
        </div>
      </div>
    </div>
  )
}

export default ChineseIdiomsPage
