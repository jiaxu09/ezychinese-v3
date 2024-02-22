'use client'

import { useGetAuth } from '@/lib/react-query/queries'
import { useUser } from '@/lib/store/user'
import { supabaseBrowser } from '@/lib/supabase/browser'
import { useQuery } from '@tanstack/react-query'
import React, { useEffect } from 'react'

const AuthProvider = () => {
  const setUser = useUser((state) => state.setUser)
  const { data, isFetched } = useQuery(useGetAuth())

  useEffect(() => {
    if (isFetched && data) {
      setUser(data)
    }
  }, [data, isFetched, setUser])

  return <></>
}
export default AuthProvider
