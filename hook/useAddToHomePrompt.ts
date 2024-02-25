import { useEffect, useRef, useState } from 'react'

interface IBeforeInstallPromptEvent extends Event {
  readonly platforms: string[]
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed'
    platform: string
  }>
  prompt(): Promise<void>
}

const useAddToHomescreenPrompt = (): [boolean, () => void] => {
  const deferredPrompt = useRef<IBeforeInstallPromptEvent | null>(null)
  const [isVisible, setVisible] = useState(false)

  const promptToInstall = () => {
    if (!deferredPrompt.current) return false

    deferredPrompt.current.prompt()

    deferredPrompt.current.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt')
        setVisible(false)
      } else {
        console.log('User dismissed the A2HS prompt')
      }
    })
  }

  useEffect(() => {
    const ready = (e: IBeforeInstallPromptEvent) => {
      e.preventDefault()

      deferredPrompt.current = e
      setVisible(true)
    }

    window.addEventListener('beforeinstallprompt', ready as any)

    return () => {
      window.removeEventListener('beforeinstallprompt', ready as any)
    }
  }, [])

  return [isVisible, promptToInstall]
}

export default useAddToHomescreenPrompt
