'use client'

import { Stack, Tab, Tabs } from '@mui/material'
import SavedRfpFilter from './saved-rfp-filter'
import SavedRfpTable from './saved-rfp-table'

export default function SavedRfp() {
  return (
    <Stack spacing={2}>
      <Tabs value={0}>
        <Tab value={0} label="관심 공고" />
      </Tabs>

      <Stack sx={{ background: '#fff' }}>
        <SavedRfpFilter />
        <SavedRfpTable />
      </Stack>
    </Stack>
  )
}
