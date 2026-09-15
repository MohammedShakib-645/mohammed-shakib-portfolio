import { ArrowDownRight, ArrowUpRight, ArrowRight, Award, Download, GitBranch } from 'lucide-react'
import Image from 'next/image'
import { certifications, profile } from '@/lib/portfolio'
import { ContactForm } from '@/components/contact-form'
import { CountUp } from '@/components/count-up'

export function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return <div className="section-label"><span>{number} /</span><span>{children}</span></div>
}

export function AboutSection() {
  return (
    <section id="about" className="about-section section-pad page-width">
      <div className="section-top" data-reveal><SectionLabel number="01">WHO I AM</SectionLabel><span className="eyebrow secondary-text">CURIOSITY IS THE STARTING POINT.</span></div>
      <div className="about-layout">
        <div data-reveal><h2 className="editorial-heading">I&apos;M A COMPUTER<br />SCIENCE STUDENT<br /><span className="soft-text">BUILDING MY WAY</span><br /><span className="soft-text">INTO AI & SOFTWARE.</span></h2><div className="about-copy"><ArrowDownRight size={29} strokeWidth={1} /><p>I&apos;m Mohammed, a CSE (AI & ML) student at Sphoorthy Engineering College, JNTUH. I&apos;m learning the fundamentals, building practical projects, and following my curiosity into AI, machine learning, and the web.<br /><br />Not an expert. Just someone who enjoys figuring things out—and making the next thing a little better.</p></div></div>
        <aside className="academic-stats" aria-label="Current academic standing" data-reveal><div><span className="stat-value"><CountUp end={2} pad={2} /><span>/</span></span><span className="eyebrow">YEAR</span></div><div><span className="stat-value"><CountUp end={3} pad={2} /><span>/</span></span><span className="eyebrow">SEMESTER</span></div><div><span className="stat-value"><CountUp end={8.34} decimals={2} /><span>↗</span></span><span className="eyebrow">FIRST YEAR CGPA</span></div><p className="stats-note">One semester at a time.<br />A little further every day.</p></aside>
      </div>
    </section>
  )
}

export function AcademicJourney() {
  return (
    <section id="journey" className="journey-section section-pad page-width">
      <div className="journey-intro" data-reveal><SectionLabel number="02">ACADEMIC JOURNEY</SectionLabel><h2 className="section-heading">A foundation.<br /><span className="soft-text">Not a finish line.</span></h2><p className="body-copy">Every semester is another layer.<br />Here&apos;s where the journey began.</p><span className="journey-year">2025<span>—</span></span></div>
      <div className="academic-timeline" data-reveal><div className="timeline-line" />
        <article className="timeline-entry"><span className="timeline-marker" /><span className="eyebrow secondary-text">THE BEGINNING / 2025</span><h3>B.Tech CSE (AI & ML)</h3><p>Sphoorthy Engineering College</p><span className="eyebrow secondary-text">JAWAHARLAL NEHRU TECHNOLOGICAL UNIVERSITY, HYDERABAD</span></article>
        <article className="timeline-entry result-entry"><span className="timeline-marker" /><div><span className="eyebrow secondary-text">SEMESTER 01</span><h3>Finding my footing.</h3></div><div className="semester-result">8.05<span>SGPA</span></div></article>
        <article className="timeline-entry result-entry"><span className="timeline-marker" /><div><span className="eyebrow secondary-text">SEMESTER 02</span><h3>Building momentum.</h3></div><div className="semester-result">8.70<span>SGPA</span></div></article>
        <article className="timeline-entry result-entry final-result"><span className="timeline-marker" /><div><span className="eyebrow secondary-text">FIRST YEAR / OVERALL</span><h3>A stronger foundation.</h3></div><div className="semester-result">8.34<span>CGPA</span></div></article>
      </div>
    </section>
  )
}

export function CertificationsSection() {
  return (
    <section id="certifications" className="certifications-section section-pad page-width">
      <div className="section-top" data-reveal><SectionLabel number="04">CERTIFICATIONS</SectionLabel><span className="eyebrow secondary-text">VERIFIED LEARNING.</span></div>
      <div className="cert-grid">{certifications.map((cert) => <article className="cert-card" data-reveal key={cert.courseCode}><span className="cert-badge"><Award size={24} strokeWidth={1.2} /></span><div><h3>{cert.name}</h3><span className="cert-issuer eyebrow">{cert.issuer}</span><div className="cert-meta"><span className="elite">{cert.grade}</span><span>{cert.score}</span><span>{cert.period}</span><span>{cert.duration}</span><span>{cert.courseCode}</span></div></div><a className="text-link cert-link" href={cert.href} target="_blank" rel="noopener noreferrer">VIEW CERTIFICATE <ArrowUpRight size={17} /></a></article>)}</div>
    </section>
  )
}

export function DevelopmentJourney() {
  const stages = [
    { name: 'Foundations', subtitle: 'START WITH THE WHY', items: ['C Programming', 'Python Basics', 'Data Structures'] },
    { name: 'Building', subtitle: 'LEARN BY MAKING', items: ['Java', 'Web Development', 'Projects'] },
    { name: 'Exploring', subtitle: 'FOLLOW THE CURIOSITY', items: ['AI / ML', 'Computer Vision', 'Software Development'] },
    { name: 'Next', subtitle: 'KEEP MOVING FORWARD', items: ['More projects', 'Stronger DSA', 'Advanced development'] },
  ]
  return <section className="development-section section-pad page-width"><div className="section-top" data-reveal><SectionLabel number="07">THE JOURNEY</SectionLabel><span className="eyebrow secondary-text">PROGRESS, NOT PERFECTION.</span></div><h2 className="section-heading" data-reveal>Always a student.<br /><span className="soft-text">Always moving forward.</span></h2><div className="roadmap">{stages.map((stage, i) => <article className="roadmap-stage" data-reveal key={stage.name}><div className="roadmap-track"><span className="roadmap-point">0{i + 1}</span><ArrowRight size={17} /></div><span className="eyebrow secondary-text">{stage.subtitle}</span><h3>{stage.name}<span>.</span></h3><ul>{stage.items.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div></section>
}

export function GithubSection() {
  return <section id="github" className="github-section page-width" data-reveal><div><SectionLabel number="08">OPEN SOURCE / GITHUB</SectionLabel><h2>Built in the open.</h2><p className="body-copy">The experiments, the lessons, and the work in progress.<br />It&apos;s all part of the process.</p></div><a className="github-profile" href={profile.github} target="_blank" rel="noopener noreferrer"><GitBranch size={37} strokeWidth={1.1} /><span><span className="github-handle">MOHAMMEDSHAKIB-645</span><span className="eyebrow">VIEW GITHUB <ArrowUpRight size={15} /></span></span><ArrowUpRight className="github-arrow" size={32} strokeWidth={1} /></a></section>
}

export function AchievementsSection() {
  return (
    <section id="achievements" className="achievements-section section-pad page-width">
      <div className="section-top" data-reveal><SectionLabel number="09">RECOGNITION</SectionLabel><span className="eyebrow secondary-text">MILESTONES SO FAR.</span></div>
      <div className="achievements-layout">
        <div data-reveal><h2 className="section-heading">Third prize.<br /><span className="soft-text">Smart India Hackathon.</span></h2><p className="body-copy achievements-description">Internal Hackathon — Smart India Hackathon (SIH) 2026, Department of CSE (AI & ML), Sphoorthy Engineering College.<br />11th & 12th September 2026.</p><ul className="achievements-points"><li><span className="tiny-square" /> Team SPARK — 3rd Prize</li><li><span className="tiny-square" /> Recognised for participation, innovation, teamwork and problem-solving</li></ul><p className="achievements-org eyebrow secondary-text">MINISTRY OF EDUCATION · MOE&apos;S INNOVATION CELL · AI FUSION CLUB</p></div>
        <figure className="certificate-figure" data-reveal><Image src="/assets/certificate-sih.jpg" alt="Certificate of Participation — Smart India Hackathon 2026, Team SPARK third prize, Mohammed Shakib" width={1600} height={1062} /><figcaption><span>CERTIFICATE OF PARTICIPATION</span><span>SIH 2026</span></figcaption></figure>
      </div>
    </section>
  )
}

export function ContactSection() {
  return <>
    <section id="contact" className="contact-section section-pad page-width"><div className="section-top" data-reveal><SectionLabel number="10">GET IN TOUCH</SectionLabel><span className="eyebrow secondary-text">GOOD THINGS START WITH A CONVERSATION.</span></div><div className="contact-heading-row" data-reveal><h2>LET&apos;S BUILD<br />WHAT&apos;S <span>NEXT.</span></h2><a href={`mailto:${profile.email}`} className="contact-arrow magnetic" aria-label="Email Mohammed Shakib"><ArrowUpRight strokeWidth={1} /></a></div><div className="contact-bottom" data-reveal><div><p className="body-copy">A project idea, a question, or just a hello.<br />I&apos;d love to hear from you.</p><a className="email-link" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight size={20} /></a><p className="contact-location"><span className="status-dot" />Hyderabad, Telangana, India</p></div><div className="resume-block"><span className="eyebrow secondary-text">THE SHORT VERSION OF MY STORY</span><div className="resume-actions"><a href="/resume.html" target="_blank" rel="noopener noreferrer" className="text-link">VIEW RESUME <ArrowUpRight size={16} /></a><a href="/resume.html" download="Mohammed-Shakib-Resume.html" className="text-link">DOWNLOAD RESUME <Download size={15} /></a></div><span className="resume-format">Print-ready HTML · Save as PDF from your browser</span></div></div><ContactForm /></section>
    <footer className="site-footer page-width"><div className="footer-main"><div><a href="#top" className="footer-name">MOHAMMED SHAKIB<span>.</span></a><p>B.Tech CSE (AI & ML) Student</p></div><nav aria-label="Social links"><a href={profile.github} target="_blank" rel="noopener noreferrer">GITHUB <ArrowUpRight size={12} /></a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LINKEDIN <ArrowUpRight size={12} /></a><a href={`mailto:${profile.email}`}>EMAIL <ArrowUpRight size={12} /></a></nav></div><div className="footer-bottom"><span>© 2026 MOHAMMED SHAKIB</span><span className="footer-note">BUILT WITH CURIOSITY. STILL EVOLVING.</span><a href="#top">BACK TO TOP <ArrowUpRight size={14} /></a></div></footer>
  </>
}
