import { Stack, Switch, Typography } from '@mui/material'
import { useRfpListingFilterStore } from '../stores/rfp-listing-filter-store'

export default function RfpListingAiSuggestionsSwitch() {
  const { isReceiveSuggestionsOn, handleChangeIsReceiveSuggestions } = useRfpListingFilterStore()

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Typography>AI 키워드 추천 받기</Typography>
      <Switch checked={isReceiveSuggestionsOn} onChange={(e) => handleChangeIsReceiveSuggestions(e.target.checked)} />
    </Stack>
  )
}
