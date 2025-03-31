'use client'

import { useResponsive } from '@/hooks/useResponsive'
import { useMenuBarStore } from '@/stores/menu-bar-store'
import { theme } from '@/styles/theme'
import { ThemeProvider } from '@emotion/react'
import { Box, Container, Stack } from '@mui/material'
import { grey } from '@mui/material/colors'
import { ReactNode } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import { ToastContainer } from 'react-toastify'
import '../../styles/global.css'
import FullScreenMenuBar from '../dialog/full-screen-menu-bar'
import Sidebar from './menu-bar'
import NavHeader from './nav-header'

export default function LayoutClientWrapper({ children }: { children: ReactNode }) {
  const { isMobile } = useResponsive('lg')
  const { isMobileMenuOpen, handleCloseMobileMenu } = useMenuBarStore()

  return (
    <ThemeProvider theme={theme}>
      <Stack sx={{ height: '100dvh', overflow: 'hidden' }}>
        <NavHeader />
        <Stack direction="row" spacing={0} sx={{ height: '100%', overflow: 'hidden' }}>
          {isMobile ? <FullScreenMenuBar open={isMobileMenuOpen} handleClose={handleCloseMobileMenu} /> : <Sidebar />}
          <Box sx={{ background: grey[100], height: '100%', width: '100%', overflowY: 'auto' }}>
            <ToastContainer autoClose={2000} closeButton={false} position="top-center" />
            <Container component="main" maxWidth="xl" sx={{ pt: 3, pb: 10, width: '100%' }}>
              {children}
            </Container>
          </Box>
        </Stack>
      </Stack>
    </ThemeProvider>
  )
}
