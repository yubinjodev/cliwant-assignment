import { Checkbox, FormControlLabel, Stack, Typography } from '@mui/material'
import DatePicker from 'react-datepicker'
import { useRfpListingFilterStore } from '../stores/rfp-listing-filter-store'

export default function RfpDateFilter() {
  const { date, handleChangeDateCategory, handleChangeDate, handleChangeIsExpiredListingIncluded } =
    useRfpListingFilterStore()

  return (
    <Stack direction="row" spacing={2}>
      <Typography>공고일</Typography>

      <Stack>
        <Stack direction="row" spacing={2} alignItems="center">
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
            />
          </label>
          <FormControlLabel
            control={<Checkbox onChange={(e) => handleChangeIsExpiredListingIncluded(e.target.checked)} />}
            label="마감일 지난 공고 포함"
          />
        </Stack>

        <Stack direction="row" spacing={2}>
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
        </Stack>
      </Stack>
    </Stack>
  )
}
