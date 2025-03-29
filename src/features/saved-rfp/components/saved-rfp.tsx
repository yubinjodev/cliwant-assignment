'use client'

import { Paper, Stack, Tab, Tabs } from '@mui/material'
import SavedRfpFilters from './saved-rfp-filters'
import SavedRfpTable from './saved-rfp-table'

export default function SavedRfp() {
  return (
    <Stack spacing={2}>
      <Tabs value="none">
        <Tab value="none" label="관심 공고" />
      </Tabs>

      <Stack sx={{ background: '#fff' }} component={Paper}>
        <SavedRfpFilters />
        <SavedRfpTable />
      </Stack>
    </Stack>
  )
}
