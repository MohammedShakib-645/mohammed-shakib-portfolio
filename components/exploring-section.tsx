'use client'

import { useEffect, useRef } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { SectionLabel } from '@/components/story-sections'

const interests = [
  { title: 'AI / ML', subtitle: 'UNDERSTANDING INTELLIGENCE', number: '01' },
  { title: 'PYTHON', subtitle: 'A LANGUAGE FOR POSSIBILITIES', number: '02' },
  { title: 'JAVA', subtitle: 'THINKING IN OBJECTS', number: '03' },
  { title: 'DSA', subtitle: 'BETTER WAYS TO SOLVE', number: '04' },
  { title: 'WEB DEVELOPMENT', subtitle: 'IDEAS FOR THE BROWSER', number: '05' },
  { title: 'SOFTWARE DEVELOPMENT', subtitle: 'BUILDING SOMETHING USEFUL', number: '06' },
]

export function ExploringSection() {
  const section = useRef<HTMLElement>(null)
  const track = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame = 0
    const onScroll = () => {
      if (motion.matches || window.innerWidth < 768 || frame) return
      frame = requestAnimationFrame(() => {
        if (section.current && track.current) {
          const rect = section.current.getBoundingClientRect()
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            const progress = Math.max(0, Math.min(1, (window.innerHeight * 0.6 - rect.top) / (rect.height * 0.75)))
            track.current.scrollLeft = progress * (track.current.scrollWidth - track.current.clientWidth)
          }
        }
        frame = 0
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(frame) }
  }, [])

  const step = (direction: number) => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    track.current?.scrollBy({ left: direction * (track.current.clientWidth * 0.7), behavior: reduced ? 'instant' : 'smooth' })
  }

  return <section ref={section} id="exploring" className="exploring-section section-pad"><div className="section-top page-width" data-reveal><SectionLabel number="05">CURRENTLY EXPLORING</SectionLabel><div className="rail-controls"><button onClick={() => step(-1)} aria-label="Explore previous interests"><ArrowLeft size={17} /></button><button onClick={() => step(1)} aria-label="Explore next interests"><ArrowRight size={17} /></button></div></div><p className="exploring-intro page-width" data-reveal>THE MORE I LEARN,<br /><span className="soft-text">THE MORE I WANT TO KNOW.</span></p><div ref={track} className="exploring-track" tabIndex={0} role="region" aria-label="Current learning interests; scroll horizontally to explore">{interests.map(item => <article className="interest" key={item.title}><div className="interest-top eyebrow"><span>FIELD / {item.number}</span><ArrowUpRight size={20} strokeWidth={1} /></div><h3>{item.title}</h3><span className="eyebrow secondary-text">{item.subtitle}</span></article>)}</div><div className="exploring-bottom page-width"><span className="eyebrow secondary-text">NO FINISH LINE. JUST NEW POSSIBILITIES.</span><span className="eyebrow">SCROLL TO DISCOVER <ArrowRight size={15} /></span></div></section>
}
