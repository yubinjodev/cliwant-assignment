'use client'

import { theme } from '@/styles/theme'
import { ThemeProvider } from '@emotion/react'
import { Box, Container, Stack } from '@mui/material'
import { grey } from '@mui/material/colors'
import { ReactNode } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import '../../styles/global.css'
import Sidebar from './menu-bar'
import NavHeader from './nav-header'

export default function LayoutClientWrapper({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <Stack sx={{ height: '100dvh', overflow: 'hidden' }}>
        <NavHeader />
        <Stack direction="row" spacing={0} sx={{ height: '100%', overflow: 'hidden' }}>
          <Sidebar />
          <Box sx={{ background: grey[100], height: '100%', width: '100%', overflowY: 'auto' }}>
            <Container component="main" maxWidth="lg" sx={{ pt: 3, pb: 6, width: '100%' }}>
              {children}
            </Container>
          </Box>
        </Stack>
      </Stack>
    </ThemeProvider>
  )
}

/**
 * * basic layout
 * * state management (sidebar, rfp listing filter, saved rfp filter)
 * todo refactoring (project structure, separate components)
 * other interactions
 * styling (css*, responsive, semantics)
 *
 * (optional) additional optimization
 */
