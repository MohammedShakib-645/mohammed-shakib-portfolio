'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight, Code2, Terminal } from 'lucide-react'
import { projects } from '@/lib/portfolio'
import { SectionLabel } from '@/components/story-sections'

const FILTERS = ['All', 'C', 'Python', 'Web', 'Computer Vision'] as const

type Filter = typeof FILTERS[number]

function matchesFilter(technologies: readonly string[], filter: Filter) {
  if (filter === 'All') return true
  if (technologies.includes(filter)) return true
  if (filter === 'Web') return technologies.some((technology) => ['HTML', 'CSS', 'JavaScript'].includes(technology))
  return false
}

function ProjectVisual({ kind }: { kind: string }) {
  if (kind === 'records') return <div className="records-art"><div className="terminal-window"><div className="terminal-bar"><span className="terminal-dots"><i /><i /><i /></span><span>student_records.c</span><Terminal size={13} /></div><div className="terminal-code"><span className="code-comment">// a foundation in structured thinking</span><p><span className="code-violet">struct</span> Student <span className="code-dim">{'{'}</span></p><p className="code-indent"><span className="code-violet">int</span> id;</p><p className="code-indent"><span className="code-violet">char</span> name[50];</p><p className="code-indent"><span className="code-violet">float</span> marks;</p><p><span className="code-dim">{'};'}</span></p><p className="terminal-prompt"><span>❯</span> <span className="code-dim">build. run. learn.</span><span className="terminal-caret" /></p></div><div className="terminal-status"><span>C / PROGRAMMING FUNDAMENTALS</span><span>UTF-8</span></div></div><span className="art-watermark">01</span></div>
  if (kind === 'calculator') return <div className="calculator-art"><span className="math-symbol math-plus">+</span><span className="math-symbol math-divide">÷</span><span className="math-symbol math-equal">=</span><div className="calculator-equation"><span className="eyebrow">SIMPLE INPUT. CLEAR OUTPUT.</span><span className="equation-text">Think<span>.</span><br />Compute<span>.</span></span><div className="equation-rule"><span>01</span><span>INPUT → LOGIC → OUTPUT</span><Code2 size={17} /></div></div></div>
  if (kind === 'exam') return <div className="exam-art"><div className="exam-paper"><div className="paper-top"><span>THE STUDY OF</span><span>03 / PY</span></div><span className="paper-title">A better<br />game plan<span>↗</span></span><div className="paper-rule" /><span className="paper-subtitle">EXAM STRATEGY<br />SIMULATOR</span><div className="paper-bottom"><span>THINK AHEAD.</span><span>MAKE IT COUNT.</span></div></div><div className="paper-shadow" /><span className="art-caption">AN EXPLORATION IN PLANNING</span></div>
  if (kind === 'typing') return <div className="typing-art"><span className="typing-kicker eyebrow">A LITTLE FOCUS. A LITTLE FLOW.</span><div className="type-display">make every<br /><span>keystroke</span> count<span className="type-caret" /></div><div className="keyboard-row">{['S', 'H', 'I', 'F', 'T', '↵'].map((key, i) => <span className={i === 5 ? 'keycap keycap-accent' : 'keycap'} key={key}>{key}</span>)}</div><span className="typing-footer eyebrow">TYPEMASTER / HTML · CSS · JAVASCRIPT</span></div>
  return <div className="gesture-art"><Image src="/assets/gesture.webp" alt="Artistic monochrome hand study illustrating the idea of gesture recognition, not a project screenshot" fill sizes="(max-width: 767px) 100vw, 65vw" /><div className="gesture-frame"><span /><span /><span /><span /></div><span className="gesture-label eyebrow">GESTUREVISION_X</span><span className="gesture-caption eyebrow">HUMAN MOVEMENT.<br />MACHINE PERCEPTION.</span></div>
}

export function WorkSection() {
  const [filter, setFilter] = useState<Filter>('All')
  const visible = projects.filter((project) => matchesFilter(project.technologies, filter))
  return <section id="work" className="work-section section-pad page-width"><div className="section-top" data-reveal><SectionLabel number="05">SELECTED WORK</SectionLabel><span className="eyebrow secondary-text">LEARNING, MADE TANGIBLE.</span></div><div className="work-heading-row" data-reveal><h2 className="work-heading">IDEAS INTO<br /><span className="soft-text">SOMETHING REAL.</span></h2><p className="body-copy">A selection of projects.<br />Each one, a new question.<br />Each one, a step forward.</p></div><div className="filter-row" data-reveal role="group" aria-label="Filter projects by technology">{FILTERS.map((option) => <button key={option} type="button" className="filter-chip" data-active={filter === option} onClick={() => setFilter(option)}>{option}</button>)}</div><div className="project-stories project-stories-animated" key={filter}>{visible.map(project => <article className={`project-story project-${project.visual}`} key={project.number}><div className="project-info" data-reveal><span className="project-number">{project.number}<span>/ 05</span></span><span className="eyebrow project-category">{project.category}</span><h3>{project.title}</h3><div className="project-technologies">{project.technologies.map(technology => <span key={technology}>{technology}</span>)}</div><p className="project-description">{project.description}</p><a className="text-link project-link" href={project.href} target="_blank" rel="noopener noreferrer">{project.linkLabel}<ArrowUpRight size={17} /></a>{project.note && <p className="project-note">{project.note}</p>}</div><figure className="project-figure" data-reveal><a href={project.href} target="_blank" rel="noopener noreferrer" className="project-art" data-cursor="VIEW PROJECT" aria-label={`${project.title} — open GitHub repository`}><ProjectVisual kind={project.visual} /><span className="project-open"><ArrowUpRight size={21} strokeWidth={1.3} /></span></a><figcaption><span>{project.shortTitle}</span><span>CONCEPT VISUAL / {project.technologies[0].toUpperCase()}</span></figcaption></figure></article>)}</div></section>
}
