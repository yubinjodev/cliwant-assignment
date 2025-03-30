import { Paper, Stack } from '@mui/material'
import { useRfpListingFilterStore } from '../stores/rfp-listing-filter-store'
import RfpListingAdvancedFilters from './rfp-listing-advanced-filters'
import RfpListingAiSuggestionsSwitch from './rfp-listing-ai-suggestions-switch'
import RfpListingFilterActions from './rfp-listing-filter-actions'
import RfpListingFilterKeywordSearch from './rfp-listing-filter-keyword-search'
import RfpListingFilterKeywordToolbar from './rfp-listing-filter-keyword-toolbar'

export default function RfpListingFilters() {
  const { keywords, isAdvancedSearchOpen } = useRfpListingFilterStore()

  return (
    // todo create grid for filter (when doing responsive)
    <Paper component="section" sx={{ background: '#fff', px: 2, py: 3, width: '100%', overflow: 'hidden' }}>
      <Stack spacing={2}>
        <Stack direction="row" justifyContent="space-between">
          <RfpListingFilterKeywordToolbar />
          <RfpListingAiSuggestionsSwitch />
        </Stack>

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
