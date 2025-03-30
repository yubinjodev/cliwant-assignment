'use client'

import { useSavedRfpStore } from '@/features/saved-rfp/stores/saved-rfp-store'
import { Stack } from '@mui/material'
import RfpDetailsSectionAi from './rfp-details-section-ai'
import RfpDetailsSectionAttachedFiles from './rfp-details-section-attached-files'
import RfpDetailsSectionBidQualifications from './rfp-details-section-bid-qualifications'
import RfpDetailsSectionContractRules from './rfp-details-section-contract-rules'
import RfpDetailsSectionIndustryRules from './rfp-details-section-industry-rules'
import RfpDetailsSectionMarketSearch from './rfp-details-section-market-search'
import RfpDetailsSectionNote from './rfp-details-section-note'
import RfpDetailsSectionProdAnalysis from './rfp-details-section-prod-analysis'
import RfpDetailsSectionProjectInfo from './rfp-details-section-project-info'
import RfpDetailsViewTabs from './rfp-details-view-tabs'

export default function RfpDetails() {
  const { isSaved } = useSavedRfpStore()

  return (
    <>
      <RfpDetailsViewTabs />

      <Stack direction="row" spacing={2} sx={{ width: '100%' }}>
        {isSaved ? <RfpDetailsSectionNote /> : null}
        <RfpDetailsSectionProjectInfo />
      </Stack>

      <Stack direction="row" spacing={2} sx={{ width: '100%' }}>
        <RfpDetailsSectionContractRules />
        {/* todo  우리회사 for the next 2 components */}
        <RfpDetailsSectionIndustryRules />
        <RfpDetailsSectionProdAnalysis />
      </Stack>

      <RfpDetailsSectionBidQualifications />
      <RfpDetailsSectionAi />
      <RfpDetailsSectionMarketSearch />

      <RfpDetailsSectionAttachedFiles />
    </>
  )
}
