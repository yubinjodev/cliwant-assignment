'use client'

import { Box, Checkbox, FormControlLabel, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import { useRfpListingFilterStore } from '../stores/rfp-listing-filter-store'
import { RFP_LISTING_FILTER_BUSINESS_CATEGORY } from '../utils/constants/rfp-listing-filter-business-category'
import RfpListingAiSuggestions from './rfp-listing-ai-suggestions'
import RfpListingChannelFilters from './rfp-listing-channel-filters'
import RfpListingFilters from './rfp-listing-filters'
import RfpListingResultsPerPage from './rfp-listing-results-per-page'
import RfpListingSearchTabs from './rfp-listing-search-tabs'
import RfpListingTable from './rfp-listing-table'
import RfpListingTableActions from './rfp-listing-table-actions'
import RfpListingViewTabs from './rfp-listing-view-tabs'

export default function RfpListing() {
  const { isReceiveSuggestionsOn, keywords, businessCategory } = useRfpListingFilterStore()

  const [isDescDisplayed, setIsDescDisplayed] = useState(false)

  const handleChangeCheckbox = (value: boolean) => {
    setIsDescDisplayed(value)
  }

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
        <FormControlLabel
          control={<Checkbox checked={isDescDisplayed} onChange={(e) => handleChangeCheckbox(e.target.checked)} />}
          label="설명 보기"
        />
      </Stack>

      <RfpListingChannelFilters />

      <Typography fontWeight={700} align="center" fontSize={16}>
        {isDescDisplayed
          ? keywords.map((word, idx) =>
              word.selectedKeywords.length ? (
                <span key={idx}>
                  공고 제목에서 &nbsp;
                  {word.selectedKeywords.map((item, idx) => (
                    <span key={`${item}${idx}`}>
                      <Box component="span" sx={{ color: 'primary.main' }}>
                        {item}&nbsp;
                      </Box>
                      {word.selectedKeywords.length !== idx + 1 ? word.condition.toUpperCase() : null}&nbsp;
                    </span>
                  ))}
                  을 포함하고,
                </span>
              ) : null,
            )
          : null}
        {isDescDisplayed && keywords.some((word) => word.selectedKeywords.length) ? (
          <span>
            사업 구분은&nbsp;
            <Box component="span" sx={{ color: 'success.main' }}>
              {RFP_LISTING_FILTER_BUSINESS_CATEGORY.find((category) => category.value === businessCategory)?.label}
            </Box>
            &nbsp;에 해당하는 공고를 찾습니다.
          </span>
        ) : null}
      </Typography>

      {/* 
      {isDescDisplayed ? (
        <Typography align="center" fontWeight={700}>
          공고 제목에서 인공지능 을 포함하고, 사업 구분은 전체 에 해당하는 공고를 찾습니다.
        </Typography>
      ) : null} */}

      <RfpListingTableActions />
      <RfpListingTable />
    </Stack>
  )
}
