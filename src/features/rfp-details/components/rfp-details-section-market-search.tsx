import GradientButton from '@/components/button/gradient-button'
import SavedSearchIcon from '@mui/icons-material/SavedSearch'
import { Stack, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import RfpDetailsSection from './rfp-details-section'

export default function RfpDetailsSectionMarketSearch() {
  return (
    <RfpDetailsSection icon={<SavedSearchIcon />} title="마켓 서치" action={<GradientButton>AI 서치</GradientButton>}>
      <Stack sx={{ p: 3, overflowY: 'auto' }} justifyContent="center" alignItems="center">
        <Typography fontWeight={700} fontStyle={{ color: grey[500] }}>
          AI 서치를 클릭해보세요
        </Typography>
      </Stack>
    </RfpDetailsSection>
  )
}
