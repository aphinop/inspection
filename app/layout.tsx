import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import MainLayout from "@/components/MainLayout";
import MenuContextProvider from "@/context/MenuContext";
import Template from './template';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Inspection',
  description: 'Inspection App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="pastel">
      {/* <body className={inter.className} > */}

      <body>

        <MenuContextProvider>
          <MainLayout>{children}</MainLayout>
        </MenuContextProvider>

      </body>
    </html>
  )
}
