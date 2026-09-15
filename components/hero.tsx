import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react'
import { LiveClock } from '@/components/live-clock'
import { RoleRotator } from '@/components/role-rotator'

export function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-name">
      <div className="hero-media">
        <div className="hero-poster" role="img" aria-label="Portrait of Mohammed Shakib" />
        <div className="hero-shade" aria-hidden="true" />
      </div>
      <div className="hero-content page-width">
        <div className="hero-topline hero-entrance"><p className="eyebrow"><span className="tiny-square" /> MOHAMMED SHAKIB <span className="muted-slash">/</span> PORTFOLIO 2026</p><span className="hero-location eyebrow">BASED IN HYDERABAD, INDIA <span className="muted-slash">·</span> <LiveClock /> <ArrowUpRight size={13} /></span></div>
        <div className="hero-title-wrap">
          <h1 id="hero-name" className="hero-name"><span className="name-mask"><span>MOHAMMED</span></span><span className="name-mask"><span>SHAKIB<span className="name-period">.</span></span></span></h1>
          <div className="hero-side-note"><span className="crosshair">+</span><span>ALWAYS CURIOUS.<br />ALWAYS BUILDING.</span><span className="side-note-line" /></div>
        </div>
        <div className="hero-detail hero-entrance">
          <p className="hero-role">B.Tech CSE <span>(AI & ML)</span> <RoleRotator /></p>
          <p className="hero-statement">Building. Learning. Experimenting.</p>
          <div className="hero-actions"><a className="action-button magnetic" href="#work">EXPLORE WORK <ArrowUpRight size={18} /></a><a className="text-link" href="/resume.html" target="_blank" rel="noopener noreferrer">VIEW RESUME <ArrowRight size={15} /></a></div>
        </div>
      </div>
      <div className="hero-footer page-width hero-entrance">
        <a className="scroll-link" href="#about"><span className="scroll-track"><span /></span><span>SCROLL TO EXPLORE</span><ArrowDown size={13} /></a>
        <div className="hero-academic"><span className="status-dot" /><div><p>2ND YEAR <span>·</span> 3RD SEMESTER</p><p>Sphoorthy Engineering College <span>·</span> JNTUH</p></div></div>
      </div>
    </section>
  )
}
