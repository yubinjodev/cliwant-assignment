import { Stack, Typography } from '@mui/material'
import { ChangeEvent, useState } from 'react'
import { RfpDateFilterType, RfpDateFilterTypeCategory } from '../types/rfp-listing'

export default function RfpDateFilter() {
  const [filter, setFilter] = useState<RfpDateFilterType>({
    category: 'day',
    startDate: null,
    endDate: null,
  })

  const handleChangeFilter = (e: ChangeEvent<HTMLInputElement>, key: RfpDateFilterTypeCategory) => {}

  return (
    <Stack>
      <Stack direction="row">
        <Typography>2025-03-26</Typography>~<Typography>2025-03-27</Typography>
      </Stack>

      <Stack direction="row" spacing={2}>
        <label>
          <input type="radio" name="rfpDateFilter" value="day" />
          하루 전
        </label>
        <label>
          <input type="radio" name="rfpDateFilter" value="week" />
          일주일 전
        </label>
        <label>
          <input type="radio" name="rfpDateFilter" value="month" />한 달 전
        </label>
        <label>
          <input type="radio" name="rfpDateFilter" value="year" />일 년 전
        </label>
        <label>
          <input type="radio" name="rfpDateFilter" value="all" />
          전체 조회
        </label>
        <label>
          <input type="radio" name="rfpDateFilter" value="custom" />
          자유 입력
        </label>
      </Stack>
    </Stack>
  )
}
