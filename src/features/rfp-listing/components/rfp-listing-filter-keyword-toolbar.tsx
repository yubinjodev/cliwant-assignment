import { useResponsive } from '@/hooks/useResponsive'
import PushPinIcon from '@mui/icons-material/PushPin'
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined'
import SettingsIcon from '@mui/icons-material/Settings'
import { Button, Chip, IconButton, MenuItem, Select, Stack } from '@mui/material'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useRfpListingFilterStore } from '../stores/rfp-listing-filter-store'
import { toast } from 'react-toastify'

export default function RfpListingFilterKeywordToolbar() {
  const { listingCategory, handleChangeListingCategory } = useRfpListingFilterStore()
  const { isMobile } = useResponsive('md')
  const router = useRouter()

  const [isCurrentGroupSaved, setIsCurrentGroupSaved] = useState(false)

  const handleClickPushPin = () => {
    setIsCurrentGroupSaved((prev) => !prev)
  }
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Chip
        label="공유"
        variant={listingCategory === 'public' ? 'filled' : 'outlined'}
        color={listingCategory === 'public' ? 'primary' : undefined}
        onClick={() => handleChangeListingCategory('public')}
      />
      <Chip
        label="개인"
        variant={listingCategory === 'private' ? 'filled' : 'outlined'}
        color={listingCategory === 'private' ? 'primary' : undefined}
        onClick={() => handleChangeListingCategory('private')}
      />

      {isMobile ? null : (
        <IconButton onClick={handleClickPushPin}>
          {isCurrentGroupSaved ? <PushPinIcon /> : <PushPinOutlinedIcon />}
        </IconButton>
      )}

      <Select value="0" size="small">
        <MenuItem value="0">그룹을 선택하세요</MenuItem>
      </Select>
      {isMobile ? null : (
        <>
          <Button variant="contained" onClick={() => toast.success('그룹 설정이 저장되었습니다')}>
            현재 조건 저장
          </Button>
          <IconButton onClick={() => router.push('/settings')}>
            <SettingsIcon />
          </IconButton>
        </>
      )}
    </Stack>
  )
}
