import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh'
import { Button } from '@mui/material'
import { ReactNode } from 'react'

export default function GradientButton({ children }: { children: ReactNode }) {
  return (
    <Button
      variant="contained"
      sx={{
        background: 'linear-gradient(120deg, rgba(255,0,189,1) 0%, rgba(89,0,255,1) 80%)',
        whiteSpace: 'nowrap',
      }}
      startIcon={<AutoFixHighIcon />}
    >
      {children}
    </Button>
  )
}
