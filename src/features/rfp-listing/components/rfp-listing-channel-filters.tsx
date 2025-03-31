// todo fix
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { Button, Checkbox, Chip, FormControlLabel, Grid2, Paper, Stack, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { useRfpListingFilterChannel } from '../stores/rfp-listing-filter-channel'
import { RFP_LISTING_FILTER_AGENCY_CHANNEL_CATEGORY } from '../utils/constants/rfp-listing-filter-agency-channel-category'
import { RFP_LISTING_FILTER_UNI_CHANNEL_CATEGORY } from '../utils/constants/rfp-listing-filter-uni-channel-category'

export default function RfpListingChannelFilters() {
  const [isChannelOpen, setIsChannelOpen] = useState(false)

  const { selectedAgencies, selectedUnis, showAllChannels } = useRfpListingFilterChannel()

  const handleClickChannelButton = () => {
    setIsChannelOpen((prev) => !prev)
  }

  return (
    <Paper component="section" sx={{ background: '#fff', px: 2, py: 3, width: '100%' }}>
      <Stack spacing={3}>
        <Stack justifyContent="space-between" direction="row">
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography>채널</Typography>
            <TextField placeholder="채널을 검색해서 추가해보세요" />
            <FormControlLabel
              control={<Checkbox checked={showAllChannels} onChange={() => {}} />}
              label="채널 전부 보기"
            />
          </Stack>

          <Button
            onClick={handleClickChannelButton}
            endIcon={isChannelOpen ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
            color="secondary"
          >
            채널 목록 {isChannelOpen ? '접기' : '열기'}
          </Button>
        </Stack>

        <Stack spacing={1}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography>입찰 기관</Typography>
            <FormControlLabel control={<Checkbox checked onChange={() => {}} />} label="입찰기관 전부 보기" />
          </Stack>
          <Grid2 container spacing={1}>
            {RFP_LISTING_FILTER_AGENCY_CHANNEL_CATEGORY.map((category) => (
              <Grid2 key={category}>
                <Chip label={category} color={selectedAgencies.includes(category) ? 'primary' : undefined} />
              </Grid2>
            ))}
          </Grid2>
        </Stack>

        <Stack spacing={1}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography>대학교</Typography>
            <FormControlLabel control={<Checkbox checked onChange={() => {}} />} label="대학교 전부 보기" />
          </Stack>
          <Grid2 container spacing={1}>
            {RFP_LISTING_FILTER_UNI_CHANNEL_CATEGORY.map((category) => (
              <Grid2 key={category}>
                <Chip label={category} color={selectedUnis.includes(category) ? 'warning' : undefined} />
              </Grid2>
            ))}
          </Grid2>
        </Stack>
      </Stack>
    </Paper>
  )
}
