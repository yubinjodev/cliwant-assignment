import { Checkbox, FormControlLabel, Stack, Typography } from '@mui/material'

export default function RfpFilterCondition() {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Typography>조건</Typography>
      <FormControlLabel control={<Checkbox />} label="업종조건 충족" />
      <FormControlLabel control={<Checkbox />} label="물품조건 충족" />
      <FormControlLabel control={<Checkbox />} label="공동수급 허용" />
      <FormControlLabel control={<Checkbox />} label="실적제한 없음" />
      <FormControlLabel control={<Checkbox />} label="인적제한 없음" />
    </Stack>
  )
}
