import RfpDetailsLayout from '@/features/rfp-details/components/rfp-details-layout'
import { ReactNode } from 'react'

export default function Home({ children }: { children: ReactNode }) {
  return <RfpDetailsLayout>{children}</RfpDetailsLayout>
}
