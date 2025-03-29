import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh'
import SavedSearchIcon from '@mui/icons-material/SavedSearch'
import { Button, Stack, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import RfpDetailsSection from './rfp-details-section'

export default function RfpDetailsSectionMarketSearch() {
  return (
    <RfpDetailsSection
      icon={<SavedSearchIcon />}
      title="마켓 서치"
      action={
        <Button
          variant="contained"
          sx={{ background: 'linear-gradient(120deg, rgba(255,0,189,1) 0%, rgba(89,0,255,1) 80%)' }}
          startIcon={<AutoFixHighIcon />}
        >
          AI 서치
        </Button>
      }
    >
      <Stack sx={{ p: 3, overflowY: 'auto' }} justifyContent="center" alignItems="center">
        <Typography fontWeight={700} fontStyle={{ color: grey[500] }}>
          AI 서치를 클릭해보세요
        </Typography>
      </Stack>
    </RfpDetailsSection>
  )
}
