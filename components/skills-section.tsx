'use client'

import { useState } from 'react'
import { ArrowUpRight, Minus, Plus } from 'lucide-react'
import { skillGroups } from '@/lib/portfolio'
import { SectionLabel } from '@/components/story-sections'

const NODE_POSITIONS = [
  { left: '50%', top: '13%' },
  { left: '82%', top: '61%' },
  { left: '20%', top: '69%' },
  { left: '22%', top: '30%' },
  { left: '63%', top: '83%' },
]

export function SkillsSection() {
  const [selected, setSelected] = useState<number | null>(0)
  const active = skillGroups[selected ?? 0]
  return <section id="skills" className="skills-section section-pad page-width"><div className="section-top" data-reveal><SectionLabel number="03">MY TOOLKIT</SectionLabel><span className="eyebrow secondary-text">CONNECTED BY CURIOSITY.</span></div><div className="skills-layout"><div data-reveal><h2 className="section-heading">Learning the tools.<br /><span className="soft-text">Connecting the dots.</span></h2><p className="body-copy skills-description">A growing toolkit, not a list of things mastered.<br />Select a field to explore what I&apos;m working with.</p><div className="skill-categories">{skillGroups.map((group, index) => <div className="skill-category" data-expanded={selected === index} key={group.name}><button onClick={() => setSelected(selected === index ? null : index)} aria-expanded={selected === index} aria-controls={`skill-panel-${index}`}><span className="skill-index">{group.index}</span><span>{group.name}</span>{selected === index ? <Minus size={17} /> : <Plus size={17} />}</button><div id={`skill-panel-${index}`} hidden={selected !== index} className="skill-items">{group.items.map(item => <span key={item}>{item}</span>)}</div></div>)}</div></div><div className="skill-map" data-reveal aria-label={`Technology constellation: ${active.items.join(', ')}`}><div className="map-header eyebrow"><span>THE LEARNING CONSTELLATION</span><ArrowUpRight size={15} /></div><div className="constellation"><div className="orbit orbit-outer" /><div className="orbit orbit-inner" /><div className="map-axis map-axis-x" /><div className="map-axis map-axis-y" /><div className="constellation-core"><span>MS.</span><span>LEARN. BUILD. REPEAT.</span></div><div className="constellation-nodes" key={active.name}>{active.items.map((item, index) => { const position = NODE_POSITIONS[index % NODE_POSITIONS.length]; return <span className="skill-node" style={{ left: position.left, top: position.top }} key={item}><i />{item}</span> })}</div><span className="map-coordinate coordinate-top">+ 01</span><span className="map-coordinate coordinate-bottom">+ 02</span></div><div className="map-footer"><span className="status-dot" /><span>IN PROGRESS. ALWAYS.</span><span>{active.name.toUpperCase()}</span></div></div></div></section>
}
