import { useState, useEffect, useRef } from 'react'

export function useExitIntent(delay = 5000) {
  const [triggered, setTriggered] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>()
  const readyRef = useRef(false)

  useEffect(() => {
    const sessionKey = 'eha_exit_dismissed'
    if (sessionStorage.getItem(sessionKey)) {
      setDismissed(true)
      return
    }

    timeoutRef.current = setTimeout(() => {
      readyRef.current = true
    }, delay)

    const handleMouseLeave = (e: MouseEvent) => {
      if (!readyRef.current || dismissed) return
      if (e.clientY <= 0) {
        setTriggered(true)
        readyRef.current = false
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [delay, dismissed])

  const dismiss = () => {
    setTriggered(false)
    setDismissed(true)
    sessionStorage.setItem('eha_exit_dismissed', '1')
  }

  return { triggered: triggered && !dismissed, dismiss }
}
