'use client'

import { Stack } from '@mui/material'
import RfpFilters from './rfp-filters'
import RfpListingTable from './rfp-listing-table'
import RfpSearchTabs from './rfp-search-tabs'
import RfpViewTabs from './rfp-view-tabs'

export default function RfpListing() {
  return (
    <Stack spacing={2}>
      <RfpViewTabs />
      <RfpSearchTabs />
      <RfpFilters />
      <RfpListingTable />
    </Stack>
  )
}
