'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { ArrowUpRight, Compass, FileText, Mail } from 'lucide-react'
import { navigation, profile } from '@/lib/portfolio'

type Item = { label: string; hint: string; icon: 'go' | 'doc' | 'mail'; href: string }

export function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)
  const input = useRef<HTMLInputElement>(null)

  const items = useMemo<Item[]>(() => [
    ...navigation.map((link) => ({ label: `Go to ${link.label}`, hint: link.label.toUpperCase(), icon: 'go' as const, href: link.href })),
    { label: 'View resume', hint: 'RESUME', icon: 'doc', href: '/resume.html' },
    { label: 'Email me', hint: profile.email.toUpperCase(), icon: 'mail', href: `mailto:${profile.email}` },
    { label: 'GitHub profile', hint: 'GITHUB', icon: 'go', href: profile.github },
    { label: 'LinkedIn profile', hint: 'LINKEDIN', icon: 'go', href: profile.linkedin },
    { label: 'WhatsApp me', hint: 'WHATSAPP', icon: 'go', href: profile.whatsapp },
    { label: 'Back to top', hint: 'TOP', icon: 'go', href: '#top' },
  ], [])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return items
    return items.filter((item) => `${item.label} ${item.hint}`.toLowerCase().includes(q))
  }, [items, query])

  useEffect(() => {
    const onOpen = () => { setOpen(true); setQuery(''); setActive(0) }
    const onKey = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setOpen((value) => !value)
        setQuery('')
        setActive(0)
      } else if (event.key === 'Escape') {
        setOpen(false)
      }
    }
    window.addEventListener('open-palette', onOpen)
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('open-palette', onOpen)
      window.removeEventListener('keydown', onKey)
    }
  }, [])

  useEffect(() => {
    if (open) input.current?.focus()
  }, [open ])

  useEffect(() => { setActive(0) }, [query])

  const select = (item: Item) => {
    setOpen(false)
    setQuery('')
    if (item.href.startsWith('#')) {
      const target = document.querySelector(item.href)
      if (target) {
        target.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
        history.replaceState(null, '', item.href)
      }
    } else if (item.href.startsWith('mailto:')) {
      window.location.href = item.href
    } else {
      window.open(item.href, '_blank', 'noopener,noreferrer')
    }
  }

  if (!open) return null

  const Icon = ({ kind }: { kind: Item['icon'] }) => {
    if (kind === 'doc') return <FileText size={17} />
    if (kind === 'mail') return <Mail size={17} />
    return <Compass size={17} />
  }

  return (
    <div className="palette-overlay" onClick={() => setOpen(false)}>
      <div className="palette-panel" role="dialog" aria-label="Quick navigation" onClick={(event) => event.stopPropagation()}>
        <div className="palette-input">
          <Compass size={17} />
          <input
            ref={input}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'ArrowDown') { event.preventDefault(); setActive((i) => Math.min(i + 1, filtered.length - 1)) }
              if (event.key === 'ArrowUp') { event.preventDefault(); setActive((i) => Math.max(i - 1, 0)) }
              if (event.key === 'Enter' && filtered[active]) select(filtered[active])
            }}
            placeholder="Jump to a section, link or action…"
            aria-label="Search actions"
          />
          <kbd>ESC</kbd>
        </div>
        <div className="palette-list" role="listbox" aria-label="Actions">
          {filtered.length === 0 && <p className="palette-empty">No match. Try “work”, “resume” or “github”.</p>}
          {filtered.map((item, index) => (
            <button
              key={item.label}
              type="button"
              role="option"
              aria-selected={index === active}
              className="palette-item"
              data-active={index === active}
              onMouseEnter={() => setActive(index)}
              onClick={() => select(item)}
            >
              <Icon kind={item.icon} />
              {item.label}
              <span>{item.hint}</span>
            </button>
          ))}
        </div>
        <div className="palette-footer"><span>CTRL K TO TOGGLE</span><span><ArrowUpRight size={12} /> OPEN</span></div>
      </div>
    </div>
  )
}
