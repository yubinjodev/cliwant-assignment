'use client'

import { Stack, Typography } from '@mui/material'
import LinkButton from '../button/link-button'

export default function NotFound() {
  return (
    <Stack alignItems="center" justifyContent="center" spacing={2} sx={{ height: '60dvh' }}>
      <Typography variant="h1">404</Typography>
      <Typography variant="body1">페이지를 찾을 수 없습니다</Typography>
      <LinkButton href="/" variant="contained">
        홈으로 이동
      </LinkButton>
    </Stack>
  )
}
