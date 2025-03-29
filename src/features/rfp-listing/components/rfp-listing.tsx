'use client'

import { Stack } from '@mui/material'
import RfpListingFilters from './rfp-listing-filters'
import RfpListingTable from './rfp-listing-table'
import RfpListingViewTabs from './rfp-listing-view-tabs'
import RfpListingSearchTabs from './rfp-listing-search-tabs'

export default function RfpListing() {
  return (
    <Stack spacing={2}>
      <RfpListingViewTabs />
      <RfpListingSearchTabs />
      <RfpListingFilters />
      <RfpListingTable />
    </Stack>
  )
}
