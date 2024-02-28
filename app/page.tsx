import Books from '@/components/books'
import Hero from '@/components/hero'
import Tools from '@/components/tools'
import Videos from '@/components/videos'
import { Suspense } from 'react'

export default function Home() {
  return (
    <main>
      <Hero />
      <Books />
      <Suspense fallback={null}>
        <Tools />
      </Suspense>
      <Suspense fallback={null}>
        <Videos />
      </Suspense>
    </main>
  )
}
