import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Inspection',
    description: 'Inspection App',
}

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <div>{children}</div>
    )
}

