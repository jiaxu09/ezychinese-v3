'use client'

import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { useUser } from '@/lib/store/user'
import { supabaseBrowser } from '@/lib/supabase/browser'
import { usePathname } from 'next/navigation'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { User, WifiOff } from 'lucide-react'
import Link from 'next/link'
import supabaseUrl from '@/lib/utils'
import useNetworkInformation from '@/hook/useNetworkInformation'

const Navbar = () => {
  const pathname = usePathname()
  const user = useUser(state => state.user)
  const setUser = useUser(state => state.setUser)

  const [isOnline] = useNetworkInformation()

  const handleSignin = async () => {
    const supabase = supabaseBrowser()
    supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: location.origin + `/auth/callback?next=${pathname}`
      }
    })
  }

  const handleSignout = async () => {
    const supabase = supabaseBrowser()
    await supabase.auth.signOut()
    setUser(null)
  }

  return (
    <div className='sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container mx-auto flex items-center justify-between py-4 md:py-6'>
        <Link href='/' className='flex items-center justify-center space-x-2'>
          <div className='relative h-7 w-7 md:h-10 md:w-10'>
            <Image
              src={supabaseUrl('images/logo.webp')}
              width={98}
              height={89}
              priority
              sizes='100vw'
              alt='ezyChinese Logo'
            />
          </div>
          <div className='relative w-24 md:w-40'>
            <Image
              src={supabaseUrl('images/ezyChinese.webp')}
              width={171}
              height={33}
              alt='ezyChinese'
              priority
              sizes='33vw'
            />
          </div>
        </Link>
        <div className='flex items-center justify-start'>
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar>
                  <AvatarImage
                    className=' cursor-pointer'
                    src={user.image_url!}
                  />
                  <AvatarFallback>
                    <User />
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className=' bg-background'>
                {user.role === 'admin' && (
                  <DropdownMenuItem className=' '>
                    <Link
                      className='flex w-full justify-start text-lg'
                      href='/admin/story'
                      aria-label='new story'
                    >
                      New Story
                    </Link>
                  </DropdownMenuItem>
                )}

                <DropdownMenuItem>
                  <div
                    className='flex w-full justify-start text-lg'
                    role='button'
                    aria-label='sign out'
                    onClick={handleSignout}
                  >
                    Sign out
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              aria-label='sign in'
              onClick={handleSignin}
              variant='outline'
            >
              <span>Sign in</span>
            </Button>
          )}
        </div>
      </div>
      {!isOnline && (
        <div className=' bg-wuzzy fixed left-0 right-0 top-0 flex animate-fade-down items-center justify-center py-1 text-center'>
          <WifiOff className='mr-4 h-5 w-5' />
          You are Offline!
        </div>
      )}
    </div>
  )
}

export default Navbar
