import React from 'react'
import { type Metadata } from "next"
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query'
import { useGetHanYuUnits } from '@/lib/react-query/queries'
import Units from './_components/units'

interface HanYuUnitPageProps {
  params: {
    bookId: string
  }
}

export async function generateMetadata({
  params,
}: HanYuUnitPageProps): Promise<Metadata> {
  const id = params.bookId

  if (!id) {
    return {}
  }

  return {
    metadataBase: new URL("https://ezychinese.app"),
    title: `汉语 第${id}册`,
    description: '',
  }
}

const HanYuUnitPage =async ({ params }: HanYuUnitPageProps) => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(useGetHanYuUnits(params.bookId))
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main>
        <div className=" container mx-auto">
          <h1 className="text-xl md:text-4xl text-center py-4 md:py-8">
            选择单元
          </h1>
         <Units bookId={params.bookId}/>
        </div>
      </main>
    </HydrationBoundary>
  )
}

export default HanYuUnitPage
