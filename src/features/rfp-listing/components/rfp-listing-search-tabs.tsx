import { Chip, Stack } from '@mui/material'
import { useState } from 'react'
import { RfpSearchTabsCategories } from '../types/rfp-listing'

export default function RfpListingSearchTabs() {
  const [currentSearchTab, setCurrentSearchTab] = useState<RfpSearchTabsCategories>('advanced')

  const handleChangeSearchTabs = (tab: RfpSearchTabsCategories) => {
    setCurrentSearchTab(tab)
  }

  return (
    <Stack direction="row" spacing={1}>
      <Chip
        label="간편 검색"
        variant={currentSearchTab === 'simple' ? 'filled' : 'outlined'}
        color="success"
        onClick={() => handleChangeSearchTabs('simple')}
      />
      <Chip
        label="AI 검색"
        variant={currentSearchTab === 'ai' ? 'filled' : 'outlined'}
        color="error"
        onClick={() => handleChangeSearchTabs('ai')}
      />
      <Chip
        label="고급 검색"
        variant={currentSearchTab === 'advanced' ? 'filled' : 'outlined'}
        color="primary"
        onClick={() => handleChangeSearchTabs('advanced')}
      />
    </Stack>
  )
}
