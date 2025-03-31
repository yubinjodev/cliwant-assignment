import { useResponsive } from '@/hooks/useResponsive'
import { useMenuBarStore } from '@/stores/menu-bar-store'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import CloseIcon from '@mui/icons-material/Close'
import LogoutIcon from '@mui/icons-material/Logout'
import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, Box, Button, IconButton, Stack, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import Image from 'next/image'
import Link from 'next/link'

export default function NavHeader() {
  const { isMobile } = useResponsive('lg')
  const { isMobileMenuOpen, handleOpenMobileMenu, handleCloseMobileMenu } = useMenuBarStore()

  const handleClickMenuButton = () => {
    if (isMobileMenuOpen) {
      handleCloseMobileMenu()
    } else {
      handleOpenMobileMenu()
    }
  }

  return (
    <AppBar sx={{ background: '#fff', color: grey[500], boxShadow: 'none', position: 'relative' }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          px: 5,
          pt: 1,
          pb: 2,
          borderBottom: `1px solid  ${grey[200]}`,
        }}
      >
        <Link href="/">
          <Image src="/logo.png" alt="Cliwant Dark Logo" width={150} height={84} />
        </Link>

        {isMobile ? (
          <IconButton onClick={handleClickMenuButton}>{isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}</IconButton>
        ) : (
          <Stack direction="row" alignItems="center" spacing={3}>
            <Stack alignItems="flex-end" spacing={0}>
              <Button color="inherit" endIcon={<LogoutIcon />}>
                로그아웃
              </Button>
              <Typography>
                <Box component="span" sx={{ color: 'primary.main' }}>
                  개인 회원
                </Box>
                &nbsp;
                <Box component="span" sx={{ color: '#000' }}>
                  과제클라이원트
                </Box>
              </Typography>
              <Typography variant="caption">
                까지&nbsp;
                <Box
                  component="span"
                  sx={{
                    color: '#fff',
                    borderRadius: 4,
                    px: 2,
                    py: 0.25,
                    background:
                      'radial-gradient(farthest-side at 10% 10%, rgb(255, 249, 236) 0%, rgb(243, 186, 57) 100%)',
                  }}
                >
                  Premium
                </Box>
              </Typography>
            </Stack>
            <AccountCircleIcon sx={{ fontSize: 60 }} />
          </Stack>
        )}
      </Stack>
    </AppBar>
  )
}
