import type { Metadata } from 'next'
import { Inter } from 'next/font/google';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CleanSSR',
  description: 'CleanSSR offers cutting-edge cleaning technology solutions with a minimal design approach.',
  keywords: ['technology', 'CleanSSR', 'cleaning services', 'minimal design'],
  authors: [{ name: 'CleanSSR' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function