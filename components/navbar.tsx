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
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { User } from 'lucide-react'
import Link from 'next/link'
import { useToast } from '@/components/ui/use-toast'
import supabaseUrl from '@/lib/utils'
import useNetworkInformation from '@/hook/useNetworkInformation'
import Misc from './misc'

const Navbar = () => {
  const pathname = usePathname()
  const user = useUser((state) => state.user)
  const setUser = useUser((state) => state.setUser)

  const [isOnline] = useNetworkInformation()

  const handleSignin = async () => {
    const supabase = supabaseBrowser()
    supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: location.origin + `/auth/callback?next=${pathname}`,
      },
    })
  }

  const handleSignout = async () => {
    const supabase = supabaseBrowser()
    await supabase.auth.signOut()
    setUser(null)
  }

  return (
    <div className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex items-center justify-between py-4 md:py-6">
        <Link href="/" className="flex items-center justify-center space-x-2">
          <div className="w-7 h-7 md:w-10 md:h-10 relative">
            <Image
              src={supabaseUrl('images/logo.webp')}
              width={98}
              height={89}
              priority
              sizes="100vw"
              alt="ezyChinese Logo"
            />
          </div>
          <div className="w-24 md:w-40 relative">
            <Image
              src={supabaseUrl('images/ezyChinese.webp')}
              width={171}
              height={33}
              alt="ezyChinese"
              priority
              sizes="100vw"
            />
          </div>
        </Link>
        <div className="flex items-center justify-start">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar>
                  <AvatarImage
                    className=" cursor-pointer"
                    src={user.image_url!}
                  />
                  <AvatarFallback>
                    <User />
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className=" bg-background">
                <DropdownMenuItem className=" ">
                  <Link
                    className="w-full flex justify-start text-lg"
                    href="/"
                    aria-label="myquizzes"
                  >
                    My Quizzes
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div
                    className="w-full flex justify-start text-lg"
                    role="button"
                    aria-label="sign out"
                    onClick={handleSignout}
                  >
                    Sign out
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              aria-label="sign in"
              onClick={handleSignin}
              variant="default"
            >
              <span>Sign in</span>
            </Button>
          )}
        </div>
      </div>
      {!isOnline && (
        <div className=" fixed top-0 left-0 right-0 bg-wuzzy text-center animate-fade-down">
          you are Offline!
        </div>
      )}
    </div>
  )
}

export default Navbar
