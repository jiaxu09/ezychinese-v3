'use client'

import { useUser } from '@/lib/store/user'
import { supabaseBrowser } from '@/lib/supabase/browser'
import React, { useEffect } from 'react'

const AuthProvider = () => {
  const setUser = useUser((state) => state.setUser)

  const readSession = async () => {
    const supabase = supabaseBrowser()
    const { data } = await supabase.auth.getSession()
    if (data.session?.user) {
      const { data: user } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', data.session.user.id)
        .single()
      if (user) {
        setUser(user)
      }
    }
  }
  useEffect(() => {
    readSession()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return <></>
}
export default AuthProvider
