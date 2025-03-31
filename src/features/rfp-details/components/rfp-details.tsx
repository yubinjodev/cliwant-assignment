'use client'

import { useSavedRfpStore } from '@/features/saved-rfp/stores/saved-rfp-store'
import { Grid2 } from '@mui/material'
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
    <Grid2 container sx={{ width: '100%' }} spacing={2}>
      <Grid2 size={12}>
        <RfpDetailsViewTabs />
      </Grid2>

      <Grid2 container sx={{ width: '100%' }}>
        {isSaved ? (
          <Grid2 size={{ xs: 12, md: isSaved ? 6 : 12 }}>
            <RfpDetailsSectionNote />
          </Grid2>
        ) : null}
        <Grid2 size={{ xs: 12, md: isSaved ? 6 : 12 }}>
          <RfpDetailsSectionProjectInfo />
        </Grid2>
      </Grid2>

      <Grid2 container>
        <Grid2 size={{ xs: 12, lg: 4 }}>
          <RfpDetailsSectionContractRules />
        </Grid2>
        <Grid2 size={{ xs: 12, lg: 4 }}>
          <RfpDetailsSectionIndustryRules />
        </Grid2>
        <Grid2 size={{ xs: 12, lg: 4 }}>
          <RfpDetailsSectionProdAnalysis />
        </Grid2>
      </Grid2>

      <Grid2 size={12}>
        <RfpDetailsSectionBidQualifications />
      </Grid2>
      <Grid2 size={12}>
        <RfpDetailsSectionAi />
      </Grid2>
      <Grid2 size={12}>
        <RfpDetailsSectionMarketSearch />
      </Grid2>

      <Grid2 size={12}>
        <RfpDetailsSectionAttachedFiles />
      </Grid2>
    </Grid2>
  )
}
