// todo need to observe component behavior and plan logic
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import ApartmentIcon from '@mui/icons-material/Apartment'
import BadgeIcon from '@mui/icons-material/Badge'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import DashboardIcon from '@mui/icons-material/Dashboard'
import DescriptionIcon from '@mui/icons-material/Description'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import LocalAtmIcon from '@mui/icons-material/LocalAtm'
import MonitorIcon from '@mui/icons-material/Monitor'
import PersonIcon from '@mui/icons-material/Person'
import SearchIcon from '@mui/icons-material/Search'
import SettingsIcon from '@mui/icons-material/Settings'
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt'
import { Collapse, List, ListItemButton, ListItemText, Stack } from '@mui/material'
import { grey } from '@mui/material/colors'
import ListItemIcon from '@mui/material/ListItemIcon'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import SupportNotice from './support-notice'

export default function Menubar() {
  const pathname = usePathname()

  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <Stack
      justifyContent="space-between"
      component="aside"
      sx={{
        height: '100%',
        px: 3,
        py: 2,
        width: 320,
        borderRight: `1px solid ${grey[200]}`,
        overflowY: 'auto',
        '& .MuiSvgIcon-root': {
          fontSize: 24,
        },
      }}
    >
      <List>
        <ListItemButton>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="대시보드" />
        </ListItemButton>

        <ListItemButton
          onClick={handleClick}
          sx={{
            backgroundColor: pathname.startsWith('/bids') ? 'secondary.main' : 'unset',
            color: pathname.startsWith('/bids') ? '#fff' : 'unset',
            borderRadius: 2,
          }}
        >
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
          <ListItemText primary="입찰검색" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link href="/rfp/listing">
              <ListItemButton
                sx={{
                  ml: 4,
                  backgroundColor: pathname.startsWith('/rfp/listing') ? 'secondary.main' : 'unset',
                  color: pathname.startsWith('/rfp/listing') ? '#fff' : 'unset',
                  borderRadius: 2,
                }}
              >
                <ListItemIcon>
                  <FormatListBulletedIcon />
                </ListItemIcon>
                <ListItemText primary="국내입찰" />
              </ListItemButton>
            </Link>
          </List>
        </Collapse>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link href="/rfp/saved">
              <ListItemButton
                sx={{
                  ml: 4,
                  backgroundColor: pathname === '/rfp/saved' ? 'secondary.main' : 'unset',
                  color: pathname === '/rfp/saved' ? '#fff' : 'unset',
                  borderRadius: 2,
                }}
              >
                <ListItemIcon>
                  <BookmarkIcon />
                </ListItemIcon>
                <ListItemText primary="관심공고" />
              </ListItemButton>
            </Link>
          </List>
        </Collapse>

        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <SignalCellularAltIcon />
          </ListItemIcon>
          <ListItemText primary="산업분석" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ ml: 4 }}>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="우리회사" />
            </ListItemButton>
          </List>
        </Collapse>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ ml: 4 }}>
              <ListItemIcon>
                <AccountBalanceIcon />
              </ListItemIcon>
              <ListItemText primary="수요기관" />
            </ListItemButton>
          </List>
        </Collapse>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ ml: 4 }}>
              <ListItemIcon>
                <ApartmentIcon />
              </ListItemIcon>
              <ListItemText primary="인물검색" />
            </ListItemButton>
          </List>
        </Collapse>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ ml: 4 }}>
              <ListItemIcon>
                <BadgeIcon />
              </ListItemIcon>
              <ListItemText primary="공급기업" />
            </ListItemButton>
          </List>
        </Collapse>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ ml: 4 }}>
              <ListItemIcon>
                <DescriptionIcon />
              </ListItemIcon>
              <ListItemText primary="과거사업" />
            </ListItemButton>
          </List>
        </Collapse>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ ml: 4 }}>
              <ListItemIcon>
                <LocalAtmIcon />
              </ListItemIcon>
              <ListItemText primary="정부예산" />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton>
          <ListItemIcon>
            <MonitorIcon />
          </ListItemIcon>
          <ListItemText primary="이력관리" />
        </ListItemButton>
      </List>

      <Stack>
        <List>
          <ListItemButton>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="설정" />
          </ListItemButton>
        </List>
        <SupportNotice />
      </Stack>
    </Stack>
  )
}
