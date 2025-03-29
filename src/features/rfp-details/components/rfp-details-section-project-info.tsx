import InfoIcon from '@mui/icons-material/Info'
import { Box, Grid2 } from '@mui/material'
import RfpDetailsSection from './rfp-details-section'
import RfpDetailsSectionInfoGrid from './rfp-details-section-info-grid'

export default function RfpDetailsSectionProjectInfo() {
  return (
    <RfpDetailsSection icon={<InfoIcon />} title="프로젝트 정보">
      <Box sx={{ p: 2, height: 240, overflowY: 'auto' }}>
        <Grid2 container rowSpacing={1}>
          <RfpDetailsSectionInfoGrid title="공고 유형" details="용역" />
          <RfpDetailsSectionInfoGrid title="수요 기관" details="기업 마당" />
          <RfpDetailsSectionInfoGrid title="금액" details="-" />
          <RfpDetailsSectionInfoGrid title="시작일" details="2025년 03월 24일" />
          <RfpDetailsSectionInfoGrid title="마감일" details="2025년 03월 24일" />
        </Grid2>
      </Box>
    </RfpDetailsSection>
  )
}
