import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sushil Kumar Rai | B.Tech CSE Student & Developer',
  description: 'Portfolio of Sushil Kumar Rai, a B.Tech Computer Science and Engineering student, developer, and IoT enthusiast interested in programming, software development, and practical problem solving.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0b0a',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="bg-background"><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
