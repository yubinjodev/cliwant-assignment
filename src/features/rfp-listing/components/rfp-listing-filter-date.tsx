import { Checkbox, FormControlLabel, Grid2, Stack, Typography } from '@mui/material'
import DatePicker from 'react-datepicker'
import { useRfpListingFilterStore } from '../stores/rfp-listing-filter-store'

export default function RfpListingFilterDate() {
  const { date, handleChangeDateCategory, handleChangeDate, handleChangeIsExpiredListingIncluded } =
    useRfpListingFilterStore()

  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      alignItems={{ xs: undefined, md: 'flex-start' }}
      spacing={{ xs: 0, md: 1 }}
    >
      <Typography>공고일</Typography>
      <Stack direction="row" spacing={2}>
        <Stack spacing={2}>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={{ xs: 0, md: 2 }}
            alignItems={{ xs: undefined, md: 'center' }}
          >
            <label htmlFor="rfpDateFilterStart">
              <DatePicker
                autoComplete="off"
                id="rfpDateFilterStart"
                onChange={(date) => handleChangeDate('start', date)}
                selected={date.startDate}
                dateFormat="yyyy-MM-dd"
                shouldCloseOnSelect
                showIcon={false}
                disabled={date.category !== 'custom'}
                className="date-picker-style"
              />
            </label>
            <Typography>~</Typography>
            <label htmlFor="rfpDateFilterEnd">
              <DatePicker
                autoComplete="off"
                id="rfpDateFilterEnd"
                onChange={(date) => handleChangeDate('end', date)}
                selected={date.endDate}
                dateFormat="yyyy-MM-dd"
                shouldCloseOnSelect
                showIcon={false}
                disabled={date.category !== 'custom'}
                className="date-picker-style"
              />
            </label>
            <FormControlLabel
              control={<Checkbox onChange={(e) => handleChangeIsExpiredListingIncluded(e.target.checked)} />}
              label="마감일 지난 공고 포함"
            />
          </Stack>

          <Grid2 container spacing={2}>
            <Grid2 size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <label>
                <input
                  type="radio"
                  name="rfpDateFilter"
                  value="day"
                  onChange={() => handleChangeDateCategory('day')}
                  checked={date.category === 'day'}
                />
                하루 전
              </label>
            </Grid2>
            <Grid2 size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <label>
                <input
                  type="radio"
                  name="rfpDateFilter"
                  value="week"
                  onChange={() => handleChangeDateCategory('week')}
                  checked={date.category === 'week'}
                />
                일주일 전
              </label>
            </Grid2>
            <Grid2 size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <label>
                <input
                  type="radio"
                  name="rfpDateFilter"
                  value="month"
                  onChange={() => handleChangeDateCategory('month')}
                  checked={date.category === 'month'}
                />
                한 달 전
              </label>
            </Grid2>
            <Grid2 size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <label>
                <input
                  type="radio"
                  name="rfpDateFilter"
                  value="year"
                  onChange={() => handleChangeDateCategory('year')}
                  checked={date.category === 'year'}
                />
                일 년 전
              </label>
            </Grid2>
            <Grid2 size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <label>
                <input
                  type="radio"
                  name="rfpDateFilter"
                  value="all"
                  onChange={() => handleChangeDateCategory('all')}
                  checked={date.category === 'all'}
                />
                전체 조회
              </label>
            </Grid2>
            <Grid2 size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <label>
                <input
                  type="radio"
                  name="rfpDateFilter"
                  value="custom"
                  onChange={() => handleChangeDateCategory('custom')}
                  checked={date.category === 'custom'}
                />
                자유 입력
              </label>
            </Grid2>
          </Grid2>
        </Stack>
      </Stack>
    </Stack>
  )
}
