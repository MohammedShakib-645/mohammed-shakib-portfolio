'use client'

import { useEffect, useState } from 'react'

const ROLES = ['Student', 'Builder', 'Explorer', 'Learner']

export function RoleRotator() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let timeout = 0
    const id = window.setInterval(() => {
      setVisible(false)
      timeout = window.setTimeout(() => {
        setIndex((i) => (i + 1) % ROLES.length)
        setVisible(true)
      }, 250)
    }, 2600)
    return () => {
      window.clearInterval(id)
      window.clearTimeout(timeout)
    }
  }, [])

  return <span className={`role-rotator${visible ? '' : ' role-hidden'}`}>{ROLES[index]}</span>
}
