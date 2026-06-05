import { useInView } from 'react-intersection-observer'

interface ScrollRevealOptions {
  threshold?: number
  triggerOnce?: boolean
  rootMargin?: string
}

export function useScrollReveal(options: ScrollRevealOptions = {}) {
  const {
    threshold = 0.15,
    triggerOnce = true,
    rootMargin = '0px 0px -60px 0px',
  } = options

  const { ref, inView } = useInView({ threshold, triggerOnce, rootMargin })

  return { ref, isVisible: inView }
}
