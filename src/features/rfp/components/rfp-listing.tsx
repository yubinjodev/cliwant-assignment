'use client'

import { Stack } from '@mui/material'
import RfpFilters from './rfp-filters'
import RfpListingTable from './rfp-listing-table'
import RfpListingViewTabs from './rfp-listing-view-tabs'
import RfpSearchTabs from './rfp-search-tabs'

export default function RfpListing() {
  return (
    <Stack spacing={2}>
      <RfpListingViewTabs />
      <RfpSearchTabs />
      <RfpFilters />
      <RfpListingTable />
    </Stack>
  )
}
