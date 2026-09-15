import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'

const display = Space_Grotesk({ subsets: ['latin'], variable: '--font-display', display: 'swap' })
const body = Inter({ subsets: ['latin'], variable: '--font-body', display: 'swap' })

export const metadata: Metadata = {
  title: 'Mohammed Shakib — CSE (AI & ML) Student',
  description: 'The portfolio of Mohammed Shakib, a B.Tech CSE (AI & ML) student at Sphoorthy Engineering College, JNTUH, Hyderabad. Learning, building projects, and exploring AI, software and web development.',
  authors: [{ name: 'Mohammed Shakib' }],
  keywords: ['Mohammed Shakib', 'CSE', 'AI and ML student', 'Hyderabad', 'student portfolio', 'Sphoorthy Engineering College'],
  openGraph: {
    title: 'Mohammed Shakib — Building. Learning. Experimenting.',
    description: 'An ongoing exploration of code, curiosity, and what comes next. B.Tech CSE (AI & ML) student, Hyderabad.',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: '/assets/hero-poster.webp', width: 1920, height: 1080, alt: 'Cinematic mountain landscape — Mohammed Shakib portfolio' }],
  },
  twitter: { card: 'summary_large_image', title: 'Mohammed Shakib — CSE (AI & ML) Student', images: ['/assets/hero-poster.webp'] },
  icons: { icon: '/icon.svg' },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
