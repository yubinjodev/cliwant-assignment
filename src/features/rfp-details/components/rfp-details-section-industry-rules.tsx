import CheckBoxIcon from '@mui/icons-material/CheckBox'
import { Box, Button, MenuItem, Select, SelectChangeEvent, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import RfpDetailsSection from './rfp-details-section'

export default function RfpDetailsSectionIndustryRules() {
  const [industryRestrictionsFilter, setIndustryRestrictionsFilter] = useState('current-listing')

  const handleChangeFilter = (e: SelectChangeEvent) => {
    setIndustryRestrictionsFilter(e.target.value)
  }

  return (
    <RfpDetailsSection
      icon={<CheckBoxIcon />}
      title="업종제한"
      action={
        <Select sx={{ width: 110 }} size="small" value={industryRestrictionsFilter} onChange={handleChangeFilter}>
          <MenuItem value="current-listing">본 공고</MenuItem>
          <MenuItem value="our-company">우리 회사</MenuItem>
        </Select>
      }
    >
      <Box sx={{ p: 2, height: 240, overflowY: 'auto' }}>
        <Stack justifyContent="space-between" alignItems="center" sx={{ height: '100%' }}>
          <Stack direction="row" justifyContent="space-between" sx={{ width: '100%' }}>
            <Typography>
              {industryRestrictionsFilter === 'current-listing' ? '입찰 요구 인증서' : '개인 회원 보유 인증서'}&nbsp;
              (0)
            </Typography>
            {industryRestrictionsFilter === 'current-listing' ? <Typography>충족여부</Typography> : null}
          </Stack>
          <Typography color="success">참여 제한 없음</Typography>
          <Button variant="contained">업종 등록 가이드</Button>
        </Stack>
      </Box>
    </RfpDetailsSection>
  )
}
