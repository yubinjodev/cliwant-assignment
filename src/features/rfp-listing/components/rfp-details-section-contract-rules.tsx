import SquareFootIcon from '@mui/icons-material/SquareFoot'
import { Box, Grid2 } from '@mui/material'
import RfpDetailsSection from './rfp-details-section'
import RfpDetailsSectionInfoGrid from './rfp-details-section-info-grid'

export default function RfpDetailsSectionContractRules() {
  return (
    <RfpDetailsSection icon={<SquareFootIcon />} title="공동수급 ・ 지역제한 ・ 선정방식">
      <Box sx={{ p: 2, height: 240, overflowY: 'auto' }}>
        <Grid2 container rowSpacing={1}>
          <RfpDetailsSectionInfoGrid title="공동수급" details="공고서 참조" titleGridSize={3} detailsGridSize={9} />
          <RfpDetailsSectionInfoGrid title="지역제한" details="없음" titleGridSize={3} detailsGridSize={9} />
          <RfpDetailsSectionInfoGrid title="제출 방법" details="공고 문서 참조" titleGridSize={3} detailsGridSize={9} />
          <RfpDetailsSectionInfoGrid title="제출 확약서" details="없음" titleGridSize={3} detailsGridSize={9} />
          <RfpDetailsSectionInfoGrid
            title="기업 제한"
            details="중소기업(소상공인) 확인서를 요구하므로 대기업은 참여할 수 없습니다."
            titleGridSize={3}
            detailsGridSize={9}
          />
          <RfpDetailsSectionInfoGrid
            title="실적 제한"
            details="해당 입찰 공고에는 실적 제한 조건이 없습니다."
            titleGridSize={3}
            detailsGridSize={9}
          />
          <RfpDetailsSectionInfoGrid
            title="인적 제한"
            details="해당 입찰 공고에는 전문적 인력 조건이 없습니다."
            titleGridSize={3}
            detailsGridSize={9}
          />
        </Grid2>
      </Box>
    </RfpDetailsSection>
  )
}
