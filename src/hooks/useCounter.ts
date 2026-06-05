import { useState, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'

export function useCounter(end: number, duration = 2000, delay = 0) {
  const [count, setCount] = useState(0)
  const frameRef = useRef<number>(0)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  useEffect(() => {
    if (!inView) return

    let startTime: number | null = null
    const startValue = 0

    const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t))

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp + delay

      if (timestamp < startTime) {
        frameRef.current = requestAnimationFrame(animate)
        return
      }

      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = easeOutExpo(progress)
      const current = Math.round(startValue + (end - startValue) * eased)

      setCount(current)

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    frameRef.current = requestAnimationFrame(animate)

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [inView, end, duration, delay])

  return { ref, count }
}
