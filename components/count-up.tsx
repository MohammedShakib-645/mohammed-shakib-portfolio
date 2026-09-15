'use client'

import { useEffect, useRef, useState } from 'react'

export function CountUp({ end, decimals = 0, pad = 0, duration = 1300 }: { end: number; decimals?: number; pad?: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const element = ref.current
    if (!element) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(end)
      return
    }
    let frame = 0
    let started = false
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started) return
      started = true
      const start = performance.now()
      const step = (now: number) => {
        const progress = Math.min(1, (now - start) / duration)
        setValue(end * (1 - Math.pow(1 - progress, 3)))
        if (progress < 1) frame = requestAnimationFrame(step)
      }
      frame = requestAnimationFrame(step)
      observer.disconnect()
    }, { threshold: 0.4 })
    observer.observe(element)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [end, duration])

  const text = value.toFixed(decimals)
  const padded = pad > 0 ? text.padStart(pad + (decimals > 0 ? decimals + 1 : 0), '0') : text
  return <span ref={ref} className="count-up">{padded}</span>
}
