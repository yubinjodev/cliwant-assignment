import { Tab, Tabs } from '@mui/material'
import { SyntheticEvent, useState } from 'react'

export default function RfpListingViewTabs() {
  const [value, setValue] = useState(0)

  const handleChange = (_e: SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Tabs value={value} onChange={handleChange}>
      <Tab label="입찰 공고" />
      <Tab label="사전 규격" />
      <Tab label="발주 계획" />
      <Tab label="유찰 공고" />
    </Tabs>
  )
}
