import { Chip, Stack } from '@mui/material'
import { useState } from 'react'
import { RfpSearchTabsCategories } from '../types/rfp-listing'

export default function RfpSearchTabs() {
  const [currentSearchTab, setCurrentSearchTab] = useState<RfpSearchTabsCategories>('advanced')

  return (
    <Stack direction="row" spacing={1}>
      <Chip label="간편 검색" />
      <Chip label="AI 검색" />
      <Chip label="고급 검색" />
    </Stack>
  )
}
