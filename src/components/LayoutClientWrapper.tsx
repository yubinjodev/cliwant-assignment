'use client'
import { theme } from '@/styles/theme'
import { ThemeProvider } from '@emotion/react'
import { ReactNode } from 'react'
import Header from './Header'
import { Container, Stack } from '@mui/material'
import Sidebar from './Sidebar'

export default function LayoutClientWrapper({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <Stack sx={{ height: '100dvh', overflow: 'hidden' }}>
        <Header />
        <Stack direction="row" spacing={0} sx={{ height: '100%', overflow: 'hidden' }}>
          <Sidebar />
          <Container component="main" maxWidth="lg">
            {children}
          </Container>
        </Stack>
      </Stack>
    </ThemeProvider>
  )
}
