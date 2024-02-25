'use client'
import React, { useEffect, useState } from 'react'

const useNetworkInformation = () => {
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine)
  const checkInternetStatus = () => {
    if (navigator.onLine) {
      setIsOnline(true)
    } else {
      setIsOnline(false)
    }
  }

  useEffect(() => {
    window.addEventListener('online', checkInternetStatus)
    window.addEventListener('offline', checkInternetStatus)

    return () => {
      window.removeEventListener('online', checkInternetStatus)
      window.removeEventListener('offline', checkInternetStatus)
    }
  }, [])
  return [isOnline]
}

export default useNetworkInformation
