import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { PortfolioEffects } from '@/components/portfolio-effects'
import { AboutSection, AcademicJourney, DevelopmentJourney, GithubSection, AchievementsSection, CertificationsSection, ContactSection } from '@/components/story-sections'
import { CommandPalette } from '@/components/command-palette'
import { SkillsSection } from '@/components/skills-section'
import { WorkSection } from '@/components/work-section'
import { ExploringSection } from '@/components/exploring-section'

export default function Page() {
  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <PortfolioEffects />
    <CommandPalette />
    <SiteHeader />
    <main id="main-content">
      <Hero />
      <div className="chapter-divider page-width"><span>AN ONGOING EXPLORATION OF CODE, CURIOSITY & WHAT COMES NEXT.</span><span>EST. 2025 <span className="tiny-square" /></span></div>
      <div className="marquee" aria-hidden="true"><div className="marquee-track"><span>BUILDING <i />LEARNING <i />EXPERIMENTING <i />AI / ML <i />WEB DEVELOPMENT <i />DSA <i />COMPUTER VISION <i /></span><span>BUILDING <i />LEARNING <i />EXPERIMENTING <i />AI / ML <i />WEB DEVELOPMENT <i />DSA <i />COMPUTER VISION <i /></span></div></div>
      <AboutSection />
      <AcademicJourney />
      <SkillsSection />
      <CertificationsSection />
      <WorkSection />
      <ExploringSection />
      <DevelopmentJourney />
      <GithubSection />
      <AchievementsSection />
      <ContactSection />
    </main>
  </>
}
