import { MenuItem, Select } from '@mui/material'
import { SavedRfpListingFilterProps } from '../types/saved-rfp'

export default function SavedRfpDropdown(props: SavedRfpListingFilterProps) {
  const { state, handleChangeCategory, category, ...rest } = props

  return (
    <Select
      size="small"
      value={state}
      onChange={handleChangeCategory ? (e) => handleChangeCategory(e.target.value as string) : undefined}
      {...rest}
    >
      {category.map((category) => (
        <MenuItem value={category.value} key={category.value}>
          {category.label}
        </MenuItem>
      ))}
    </Select>
  )
}
