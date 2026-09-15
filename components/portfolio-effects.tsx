'use client'

import { useEffect, useRef } from 'react'
import { ArrowUp } from 'lucide-react'

export function PortfolioEffects() {
  const ring = useRef<HTMLDivElement>(null)
  const dot = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const progress = document.querySelector<HTMLElement>('.scroll-progress > span')
    const toTop = document.querySelector<HTMLElement>('.to-top')
    const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('.desktop-nav a'))
    const navSections = navLinks
      .map((link) => document.querySelector(link.getAttribute('href') || '#top'))
      .filter((section): section is Element => !!section)
    const onScroll = () => {
      const root = document.documentElement
      const max = root.scrollHeight - root.clientHeight
      if (progress) progress.style.transform = `scaleX(${max > 0 ? root.scrollTop / max : 0})`
      if (toTop) toTop.dataset.visible = String(root.scrollTop > 700)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => { link.dataset.active = String(link.getAttribute('href') === `#${entry.target.id}`) })
        }
      })
    }, { rootMargin: '-35% 0px -55% 0px' })
    navSections.forEach((section) => navObserver.observe(section))
    return () => {
      window.removeEventListener('scroll', onScroll)
      navObserver.disconnect()
    }
  }, [])

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    let cleanup = () => {}
    const initialize = () => {
      cleanup()
      if (media.matches) return
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed')
            observer.unobserve(entry.target)
          }
        })
      }, { threshold: 0.12 })
      document.querySelectorAll('[data-reveal]').forEach((element) => {
        if (element.getBoundingClientRect().top >= window.innerHeight) element.classList.add('reveal-pending')
        observer.observe(element)
      })
      const fine = window.matchMedia('(pointer: fine)').matches
      const hero = document.querySelector<HTMLElement>('.hero-media')
      const title = document.querySelector<HTMLElement>('.hero-name')
      let frame = 0
      let x = 0
      let y = 0
      let activeMagnetic: HTMLElement | null = null
      const move = (event: PointerEvent) => {
        if (!fine || event.pointerType === 'touch') return
        x = event.clientX
        y = event.clientY
        const target = event.target as HTMLElement
        const interactive = target.closest('a, button, summary')
        const label = target.closest<HTMLElement>('[data-cursor]')?.dataset.cursor || ''
        if (ring.current) {
          ring.current.dataset.active = String(!!interactive)
          ring.current.dataset.labeled = String(!!label)
          ring.current.textContent = label
        }
        document.documentElement.classList.add('custom-cursor-active')
        const magnetic = target.closest<HTMLElement>('.magnetic')
        if (activeMagnetic && activeMagnetic !== magnetic) activeMagnetic.style.translate = ''
        activeMagnetic = magnetic
        if (frame) return
        frame = requestAnimationFrame(() => {
          if (ring.current) ring.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`
          if (dot.current) dot.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`
          if (window.scrollY < window.innerHeight && hero && title) {
            const dx = (x / window.innerWidth - 0.5)
            const dy = (y / window.innerHeight - 0.5)
            hero.style.translate = `${dx * 8}px ${dy * 6}px`
            title.style.translate = `${dx * 3}px ${dy * 2}px`
          }
          if (activeMagnetic) {
            const box = activeMagnetic.getBoundingClientRect()
            activeMagnetic.style.translate = `${(x - box.left - box.width / 2) * 0.08}px ${(y - box.top - box.height / 2) * 0.1}px`
          }
          frame = 0
        })
      }
      const leave = () => document.documentElement.classList.remove('custom-cursor-active')
      document.addEventListener('pointermove', move, { passive: true })
      document.documentElement.addEventListener('pointerleave', leave)
      cleanup = () => {
        observer.disconnect()
        cancelAnimationFrame(frame)
        document.removeEventListener('pointermove', move)
        document.documentElement.removeEventListener('pointerleave', leave)
        document.querySelectorAll('.reveal-pending').forEach(e => e.classList.remove('reveal-pending'))
        leave()
        if (hero) hero.style.translate = ''
        if (title) title.style.translate = ''
        if (activeMagnetic) activeMagnetic.style.translate = ''
      }
    }
    initialize()
    media.addEventListener('change', initialize)
    return () => { cleanup(); media.removeEventListener('change', initialize) }
  }, [])

  return <><div className="intro-loader" aria-hidden="true"><span className="loader-monogram">MS<span>.</span></span><span className="loader-name">MOHAMMED SHAKIB</span><span className="loader-line" /></div><div className="grain" aria-hidden="true" /><div className="scroll-progress" aria-hidden="true"><span /></div><button type="button" className="to-top" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><ArrowUp size={17} /></button><div ref={dot} className="cursor-dot" aria-hidden="true" /><div ref={ring} className="cursor-ring" aria-hidden="true" /></>
}
