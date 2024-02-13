import React from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Card, CardHeader } from '@/components/ui/card'
import supabaseUrl, { cn } from '@/lib/utils'
import Image from 'next/image'

interface RadicalProps {
  name: string
  characters: string[]
  background_url?: string | null
}

const Radical = ({ name, characters, background_url }: RadicalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">{name}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md md:max-w-5xl h-[50vh]">
        <div className="z-10 relative container flex items-center justify-center ">
          <div className="border rounded-full p-6 bg-white">{name}</div>
          {characters.map((character, index) => (
            <div
              key={index}
              className={cn(' absolute ', {
                'right-[0%] md:right-[30%]': index === 0,
                'left-[0%] md:left-[30%]': index === 1,
                'top-[0%]': index === 2,
                'bottom-[0%]': index === 3,
              })}
            >
              <Card>
                <CardHeader className=" text-3xl">
                  <ruby>
                    <span className=" inline-block">{character}</span>
                    <rt>yi</rt>
                  </ruby>
                </CardHeader>
              </Card>
            </div>
          ))}
        </div>
        {background_url && (
          <div className="fixed top-0 right-0 w-full h-full z-0 blur-sm">
            <Image src={supabaseUrl(background_url)} alt={name} fill />
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default Radical
