// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required
import { DM_Sans } from 'next/font/google'
import { Space_Mono } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'
import { ReactNode } from 'react'
import { CartProvider } from '../context/CartContext'
import { Amplify } from 'aws-amplify'

const fontHeading = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
  weight: ['400', '500', '700'],
})

const fontBody = Space_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight: ['400', '700'],
})

interface LayoutProps {
  children: ReactNode
}

// Dynamically import the outputs JSON file
const outputs = process.env.NODE_ENV === 'development'
  ? require('../amplify_outputs.json')
  : {}

Amplify.configure(outputs)

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <html lang="en">
      <body 
        className={cn(
          'antialiased',
          fontHeading.variable,
          fontBody.variable
        )}
      >
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}