'use client'

import { Checkbox, FormControlLabel, Stack } from '@mui/material'
import { useRfpListingFilterStore } from '../stores/rfp-listing-filter-store'
import RfpListingAiSuggestions from './rfp-listing-ai-suggestions'
import RfpListingFilters from './rfp-listing-filters'
import RfpListingResultsPerPage from './rfp-listing-results-per-page'
import RfpListingSearchTabs from './rfp-listing-search-tabs'
import RfpListingTable from './rfp-listing-table'
import RfpListingTableActions from './rfp-listing-table-actions'
import RfpListingViewTabs from './rfp-listing-view-tabs'

export default function RfpListing() {
  const { isReceiveSuggestionsOn } = useRfpListingFilterStore()

  return (
    <Stack spacing={2}>
      <Stack direction="row" justifyContent="space-between">
        <RfpListingViewTabs />
        <RfpListingResultsPerPage />
      </Stack>
      <RfpListingSearchTabs />

      <Stack direction="row" spacing={2}>
        <RfpListingFilters />
        {isReceiveSuggestionsOn ? <RfpListingAiSuggestions /> : null}
      </Stack>

      <Stack alignItems="flex-end">
        <FormControlLabel control={<Checkbox defaultChecked />} label="설명 보기" />
      </Stack>

      <RfpListingTableActions />
      <RfpListingTable />
    </Stack>
  )
}
