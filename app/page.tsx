import Books from '@/components/books'
import Hero from '@/components/hero'
import Reading from '@/components/reading'
import Tools from '@/components/tools'
import Videos from '@/components/videos'
import { Suspense } from 'react'

export default function Home() {
  return (
    <main>
      <Hero />
      <Books />
      {/* <Reading /> */}
      <Suspense fallback={null}>
        <Tools />
      </Suspense>
      <Suspense fallback={null}>
        <Videos />
      </Suspense>
    </main>
  )
}
