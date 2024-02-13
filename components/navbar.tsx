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

const Navbar = () => {
  const pathname = usePathname()

  const user = useUser((state) => state.user)
  const setUser = useUser((state) => state.setUser)

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
          <div className="w-7 h-7 md:w-12 md:h-12 relative">
            <Image
              src="/images/logo.webp"
              width={222}
              height={219}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="ezyChinese Logo"
            />
          </div>
          <h1>
            {' '}
            <span className=" text-success">ezy</span>Chinese
          </h1>
        </Link>
        <div>
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
              <DropdownMenuContent>
                <DropdownMenuItem className=" text-neutral">
                  My Quizzes
                </DropdownMenuItem>
                <DropdownMenuItem
                  className=" cursor-pointer "
                  onClick={handleSignout}
                >
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              aria-label="sign in"
              onClick={handleSignin}
              variant="default"
            >
              <span className="lg:text-lg">Sign in&nbsp;</span>{' '}
              <span className="hidden lg:block text-lg"> with Google</span>{' '}
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
