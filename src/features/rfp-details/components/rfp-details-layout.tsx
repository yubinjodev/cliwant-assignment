'use client'

import { useSavedRfpStore } from '@/features/saved-rfp/stores/saved-rfp-store'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ShareIcon from '@mui/icons-material/Share'
import StarIcon from '@mui/icons-material/Star'
import StarOutlineIcon from '@mui/icons-material/StarOutline'
import { Button, Stack, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'

export default function RfpDetailsLayout({ children }: { children: ReactNode }) {
  const router = useRouter()

  const { isSaved, handleChangeSave, handleChangeRemove } = useSavedRfpStore()

  return (
    <Stack spacing={2} alignItems="flex-start">
      <Button
        variant="outlined"
        startIcon={<ArrowBackIcon />}
        sx={{ background: '#fff' }}
        onClick={() => router.back()}
      >
        뒤로가기
      </Button>

      <Stack direction="row" alignItems="center" spacing={1}>
        <Typography fontWeight={700}>[서울] 2025년 도시제조업 작업환경개선 지원사업 공고</Typography>
        {isSaved ? (
          <Button color="warning" startIcon={<StarIcon />} onClick={handleChangeRemove}>
            보관중
          </Button>
        ) : (
          <Button startIcon={<StarOutlineIcon />} onClick={handleChangeSave}>
            관심 공고 추가
          </Button>
        )}
        <Button
          startIcon={<ShareIcon />}
          sx={{
            color: grey[800],
            '& .MuiSvgIcon-root': { color: grey[800] },
            '&:hover': { background: 'unset' },
          }}
        >
          {/* todo copy link */}
          공유하기
        </Button>
      </Stack>
      {children}
    </Stack>
  )
}
