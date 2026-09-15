import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="not-found page-width">
      <p className="eyebrow secondary-text">NOTHING HERE — YET.</p>
      <h1>404<span>.</span></h1>
      <p className="body-copy">This page wandered off. The portfolio is still right where you left it.</p>
      <div className="not-found-actions">
        <Link className="action-button" href="/">BACK HOME <ArrowUpRight size={18} /></Link>
        <Link className="text-link" href="/#work">SEE THE WORK <ArrowRight size={15} /></Link>
      </div>
    </main>
  )
}
