import { Button, Stack, Typography } from '@mui/material'

export default function SupportNotice() {
  return (
    <Stack
      spacing={1}
      sx={{
        bgcolor: '#a4a2d9',
        p: 2,
        width: '100%',
        height: '100%',
        borderRadius: 3,
        '& .MuiTypography-root': {
          color: '#fff',
        },
      }}
    >
      <Typography fontWeight={700}>도움이 필요하신가요?</Typography>
      <Typography variant="caption">클라이원트 가이드를 확인해보세요!</Typography>
      <Button
        variant="contained"
        fullWidth
        sx={{
          background: '#fff',
          color: '#000',
        }}
      >
        클라이원트 가이드
      </Button>
    </Stack>
  )
}
