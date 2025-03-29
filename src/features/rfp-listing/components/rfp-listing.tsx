'use client'

import { Stack } from '@mui/material'
import RfpListingFilters from './rfp-listing-filters'
import RfpListingResultsPerPage from './rfp-listing-results-per-page'
import RfpListingSearchTabs from './rfp-listing-search-tabs'
import RfpListingTable from './rfp-listing-table'
import RfpListingViewTabs from './rfp-listing-view-tabs'

export default function RfpListing() {
  return (
    <Stack spacing={2}>
      <Stack direction="row" justifyContent="space-between">
        <RfpListingViewTabs />
        <RfpListingResultsPerPage />
      </Stack>
      <RfpListingSearchTabs />
      <RfpListingFilters />
      <RfpListingTable />
    </Stack>
  )
}
