import FindInPageIcon from '@mui/icons-material/FindInPage'
import { Box, Button, MenuItem, Select, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import RfpDetailsSection from './rfp-details-section'

export default function RfpDetailsSectionProdAnalysis() {
  const [productionAnalysisFilter, setProductionAnalysisFilter] = useState('current-listing')

  const handleChangeFilter = (value: string) => {
    setProductionAnalysisFilter(value)
  }

  return (
    <RfpDetailsSection
      icon={<FindInPageIcon />}
      title="직접생산 분석 [제한 기준: 제조물품]"
      action={
        <Select
          sx={{ width: 110 }}
          size="small"
          value={productionAnalysisFilter}
          onChange={(e) => handleChangeFilter(e.target.value)}
        >
          <MenuItem value="current-listing">본 공고</MenuItem>
          <MenuItem value="our-company">우리 회사</MenuItem>
        </Select>
      }
    >
      <Box sx={{ p: 2, height: 240, overflowY: 'auto' }}>
        <Stack justifyContent="space-between" alignItems="center" sx={{ height: '100%' }}>
          <Stack direction="row" justifyContent="space-between" sx={{ width: '100%' }}>
            <Typography>
              {productionAnalysisFilter === 'current-listing' ? '입찰 요구 인증서' : '개인 회원 보유 인증서'}&nbsp; (0)
            </Typography>
            {productionAnalysisFilter === 'current-listing' ? <Typography>충족여부</Typography> : null}
          </Stack>
          <Typography color="success">참여 제한 없음</Typography>
          <Stack direction="row" spacing={2}>
            <Button variant="contained">직접생상 절차</Button>
            <Button variant="contained">상세 요건</Button>
          </Stack>
        </Stack>
      </Box>
    </RfpDetailsSection>
  )
}
