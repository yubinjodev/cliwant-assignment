import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import SearchIcon from '@mui/icons-material/Search'
import { Button, Checkbox, Chip, FormControlLabel, Grid2, Paper, Stack, TextField, Typography } from '@mui/material'
import { ChangeEvent } from 'react'
import { useRfpListingFilterChannel } from '../stores/rfp-listing-filter-channel'
import { useRfpListingFilterStore } from '../stores/rfp-listing-filter-store'
import { RFP_LISTING_FILTER_AGENCY_CHANNEL_CATEGORY } from '../utils/constants/rfp-listing-filter-agency-channel-category'
import { RFP_LISTING_FILTER_UNI_CHANNEL_CATEGORY } from '../utils/constants/rfp-listing-filter-uni-channel-category'

export default function RfpListingChannelFilters() {
  const {
    selectedAgencies,
    selectedUnis,
    showAllChannels,
    showAllAgencies,
    showAllUnis,
    removeAllChannels,
    removeAllAgencies,
    removeAllUnis,
    selectAllChannels,
    selectAllAgencies,
    selectAllUnis,
    handleClickAgency,
    handleClickUni,
  } = useRfpListingFilterChannel()

  const { isChannelOpen, handleClickIsChannelOpen } = useRfpListingFilterStore()

  const handleChangeAllChannels = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      selectAllChannels()
      selectAllAgencies()
      selectAllUnis()
    } else {
      removeAllChannels()
      removeAllAgencies()
      removeAllUnis()
    }
  }

  const handleChangeAllAgencies = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      selectAllAgencies()
    } else {
      removeAllAgencies()
      removeAllChannels()
    }
  }

  const handleChangeAllUni = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      selectAllUnis()
    } else {
      removeAllUnis()
      removeAllChannels()
    }
  }

  return (
    <Paper component="section" sx={{ background: '#fff', px: 2, py: 3, width: '100%' }}>
      <Stack spacing={3}>
        <Stack justifyContent="space-between" direction={{ xs: 'column', md: 'row' }}>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={1} alignItems={{ xs: 'flex-start', md: 'center' }}>
            <Typography>채널</Typography>
            <TextField placeholder="채널을 검색해서 추가해보세요" sx={{ width: { xs: '100%', md: 'unset' } }} />
            <FormControlLabel
              control={<Checkbox checked={showAllChannels} onChange={handleChangeAllChannels} />}
              label="채널 전부 보기"
            />
          </Stack>

          <Button
            onClick={() => handleClickIsChannelOpen(!isChannelOpen)}
            endIcon={isChannelOpen ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
            color="secondary"
          >
            채널 목록 {isChannelOpen ? '접기' : '열기'}
          </Button>
        </Stack>

        {isChannelOpen ? (
          <>
            <Stack spacing={1}>
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography>입찰 기관</Typography>
                <FormControlLabel
                  control={<Checkbox checked={showAllAgencies} onChange={handleChangeAllAgencies} />}
                  label="입찰기관 전부 보기"
                />
              </Stack>
              <Grid2 container spacing={1}>
                {RFP_LISTING_FILTER_AGENCY_CHANNEL_CATEGORY.map((category) => (
                  <Grid2 key={category}>
                    <Chip
                      label={category}
                      onClick={() => handleClickAgency(category)}
                      color={selectedAgencies.includes(category) ? 'primary' : undefined}
                    />
                  </Grid2>
                ))}
              </Grid2>
            </Stack>

            <Stack spacing={1}>
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography>대학교</Typography>
                <FormControlLabel
                  control={<Checkbox checked={showAllUnis} onChange={handleChangeAllUni} />}
                  label="대학교 전부 보기"
                />
              </Stack>
              <Grid2 container spacing={1}>
                {RFP_LISTING_FILTER_UNI_CHANNEL_CATEGORY.map((category) => (
                  <Grid2 key={category}>
                    <Chip
                      onClick={() => handleClickUni(category)}
                      label={category}
                      color={selectedUnis.includes(category) ? 'warning' : undefined}
                    />
                  </Grid2>
                ))}
              </Grid2>
            </Stack>
          </>
        ) : null}
        {isChannelOpen ? (
          <Button variant="contained" color="secondary" startIcon={<SearchIcon />} sx={{ alignSelf: 'flex-end' }}>
            검색하기
          </Button>
        ) : null}
      </Stack>
    </Paper>
  )
}
