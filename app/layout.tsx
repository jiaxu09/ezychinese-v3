import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import { cn } from '@/lib/utils'
import AuthProvider from '@/components/auth-provider'
import Navbar from '@/components/navbar'

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: { default: 'ezyChinese', template: '%s - ezyChinese' },
  description:
    'Welcome to ezyChinese - Where Learning Chinese is a Breeze for Kids!',
  openGraph: {
    title: 'ezyChinese',
    description:
      'Welcome to ezyChinese - Where Learning Chinese is a Breeze for Kids!',
    url: 'http://localhost:3000',
    siteName: 'ezyChinese',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    title: 'ezyChinese',
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={cn('antialiased', GeistSans.variable, GeistMono.variable)}
    >
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#3b4252" />

        <meta property="og:title" content="ezyChinese" />
        <meta name="twitter:title" content="ezyChinese" />

        <meta
          name="description"
          content="ezyChinese - Help you learning Chinese easily."
        />
        <meta
          property="og:description"
          content="ezyChinese - Help you learning Chinese easily."
        />
        <meta
          name="twitter:description"
          content="ezyChinese - Help you learning Chinese easily."
        />

        <meta
          property="og:image"
          content="https://res.cloudinary.com/dp6apfu5b/image/upload/v1695275646/c9t9kzlp9y2m8hag7nhl.png"
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dp6apfu5b/image/upload/v1695275646/c9t9kzlp9y2m8hag7nhl.png"
        />
      </head>
      <body
        className="flex flex-col min-h-screen bg-background text-neutral"
        suppressHydrationWarning={true}
      >
        <Navbar />
        <main>{children}</main>
        <AuthProvider />
      </body>
    </html>
  )
}
