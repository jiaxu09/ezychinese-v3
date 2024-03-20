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
      <Title levelId={params.levelid} />
      {children}
    </main>
  )
}

export default LeveledReadingLayout
