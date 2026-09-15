'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Plus, X } from 'lucide-react'
import { navigation, profile } from '@/lib/portfolio'

export function SiteHeader() {
  const header = useRef<HTMLElement>(null)
  const dialog = useRef<HTMLDialogElement>(null)
  const trigger = useRef<HTMLButtonElement>(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    let lastY = window.scrollY
    let frame = 0
    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        const y = window.scrollY
        if (header.current) {
          header.current.dataset.compact = String(y > 60)
          header.current.dataset.hidden = String(y > 450 && y > lastY + 3 && !header.current.contains(document.activeElement))
        }
        lastY = y
        frame = 0
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.body.classList.add('menu-open')
    dialog.current?.showModal()
    return () => {
      document.body.style.overflow = previous
      document.body.classList.remove('menu-open')
    }
  }, [open])

  const close = () => {
    dialog.current?.close()
    setOpen(false)
    trigger.current?.focus({ preventScroll: true })
  }

  return (
    <>
      <header ref={header} className="site-header">
        <a className="wordmark" href="#top" aria-label="Mohammed Shakib — back to top">MS<span>.</span></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}
        </nav>
        <button type="button" className="palette-trigger" aria-label="Quick navigation (Control K)" onClick={() => window.dispatchEvent(new CustomEvent('open-palette'))}><kbd>CTRL</kbd> K</button>
        <button ref={trigger} className="menu-trigger" onClick={() => setOpen(true)} aria-haspopup="dialog" aria-expanded={open} aria-controls="site-menu">MENU <Plus size={17} strokeWidth={1.5} /></button>
      </header>
      <dialog ref={dialog} id="site-menu" className="fullscreen-menu" aria-labelledby="menu-title" onClose={() => setOpen(false)}>
        <div className="menu-top"><a href="#top" className="wordmark" onClick={close}>MS<span>.</span></a><button onClick={close} className="menu-trigger">CLOSE <X size={19} /></button></div>
        <div className="menu-layout">
          <div className="menu-intro"><p id="menu-title" className="eyebrow">FIND YOUR WAY</p><p>A work in progress.<br />By design.</p></div>
          <nav aria-label="Expanded navigation" className="menu-links">
            {navigation.map((item, index) => <a key={item.label} href={item.href} onClick={close}><span className="menu-index">0{index + 1}</span>{item.label}<ArrowUpRight /></a>)}
          </nav>
        </div>
        <div className="menu-bottom"><span>HYDERABAD, INDIA</span><a href={`mailto:${profile.email}`}>{profile.email} <ArrowUpRight size={14} /></a><span>PORTFOLIO / 2026</span></div>
      </dialog>
    </>
  )
}
