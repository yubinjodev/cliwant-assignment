import type { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: '국내입찰 | CLIWANT',
}

export default function Page({ children }: { children: ReactNode }) {
  return children
}
