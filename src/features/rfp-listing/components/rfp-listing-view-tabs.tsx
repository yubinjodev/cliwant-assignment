import { RFP_LISTING_VIEW_TABS_CATEGORY } from '@/features/rfp-listing/utils/constants/rfp-listing-view-tabs-category'
import { Tab, Tabs } from '@mui/material'
import { SyntheticEvent, useState } from 'react'

export default function RfpListingViewTabs() {
  const [value, setValue] = useState('bidding-listing')

  const handleChange = (_e: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <Tabs value={value} onChange={handleChange}>
      {RFP_LISTING_VIEW_TABS_CATEGORY.map((category) => (
        <Tab label={category.label} key={category.value} value={category.value} />
      ))}
    </Tabs>
  )
}
