import Link from 'next/link'
import Title from './_components/title'

const LeveledReadingLayout = ({
  children,
  params
}: Readonly<{
  children: React.ReactNode
  params: { levelid: string }
}>) => {
  return (
    <main className='container'>
      <Link href={`/reading/${params.levelid}`}>
        <Title levelId={params.levelid} />
      </Link>
      {children}
    </main>
  )
}

export default LeveledReadingLayout
