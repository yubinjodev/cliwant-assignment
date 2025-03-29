import CheckBoxIcon from '@mui/icons-material/CheckBox'
import { Box, Button, MenuItem, Select, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import RfpDetailsSection from './rfp-details-section'

export default function RfpDetailsSectionIndustryRules() {
  const [industryRestrictionsFilter, setIndustryRestrictionsFilter] = useState('current-listing')

  const handleChangeFilter = (value: string) => {
    setIndustryRestrictionsFilter(value)
  }

  return (
    <RfpDetailsSection
      icon={<CheckBoxIcon />}
      title="업종제한"
      action={
        <Select
          sx={{ width: 110 }}
          size="small"
          value={industryRestrictionsFilter}
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
            <Typography>입찰 요구 인증서 (0)</Typography>
            <Typography>충족여부</Typography>
          </Stack>
          <Typography color="success">참여 제한 없음</Typography>
          <Button variant="contained">업종 등록 가이드</Button>
        </Stack>
      </Box>
    </RfpDetailsSection>
  )
}
