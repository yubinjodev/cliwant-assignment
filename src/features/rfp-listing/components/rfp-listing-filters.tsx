import { Paper, Stack } from '@mui/material'
import { useRfpListingFilterStore } from '../stores/rfp-listing-filter-store'
import RfpListingAdvancedFilters from './rfp-listing-advanced-filters'
import RfpListingFilterActions from './rfp-listing-filter-actions'
import RfpListingFilterKeywordSearch from './rfp-listing-filter-keyword-search'
import RfpListingFilterKeywordToolbar from './rfp-listing-filter-keyword-toolbar'

export default function RfpListingFilters() {
  const { keywords, isAdvancedSearchOpen } = useRfpListingFilterStore()

  return (
    <Paper component="section" sx={{ background: '#fff', px: 2, py: 3 }}>
      <Stack component="form" spacing={2}>
        <RfpListingFilterKeywordToolbar />

        {keywords
          .filter((_, idx) => (isAdvancedSearchOpen ? true : idx < 3))
          .map((keyword, idx) => (
            <RfpListingFilterKeywordSearch
              key={idx}
              idx={idx}
              category={keyword.category}
              condition={keyword.condition}
              keywordInput={keyword.keywordInput}
              selectedKeywords={keyword.selectedKeywords}
            />
          ))}

        {isAdvancedSearchOpen ? <RfpListingAdvancedFilters /> : null}

        <RfpListingFilterActions />
      </Stack>
    </Paper>
  )
}
