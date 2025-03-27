import LayoutClientWrapper from '@/components/layout/layout-client-wrapper'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: '클라이원트',
  description: '클라이원트 프론트엔드 엔지니어 과제',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AppRouterCacheProvider>
          <LayoutClientWrapper>{children}</LayoutClientWrapper>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
