'use client'

import { Paper, Stack } from '@mui/material'
import SavedRfpFilters from './saved-rfp-filters'
import SavedRfpTable from './saved-rfp-table'
import SavedRfpViewTabs from './saved-rfp-view-tabs'

export default function SavedRfp() {
  return (
    <Stack spacing={2}>
      <SavedRfpViewTabs />

      <Stack sx={{ background: '#fff' }} component={Paper}>
        <SavedRfpFilters />
        <SavedRfpTable />
      </Stack>
    </Stack>
  )
}
