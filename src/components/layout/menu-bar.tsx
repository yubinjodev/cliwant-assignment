import { useMenuBarStore } from '@/stores/menu-bar-store'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import SettingsIcon from '@mui/icons-material/Settings'
import { Collapse, List, ListItemButton, ListItemText, Stack } from '@mui/material'
import { grey } from '@mui/material/colors'
import ListItemIcon from '@mui/material/ListItemIcon'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import LinkListItemButton from '../button/link-list-item-button'
import SupportNotice from './support-notice'

export default function Menubar() {
  const pathname = usePathname()
  const { menuBarItems, toggleDropdownMenu } = useMenuBarStore()

  useEffect(() => {
    menuBarItems.forEach((menu) => {
      if (menu.category === 'singleton') return

      if (menu.identifier === pathname.split('/')[1] && !menu.isOpen) {
        toggleDropdownMenu(menu.title)
      }
    })
  }, [pathname])

  return (
    <Stack
      justifyContent="space-between"
      component="aside"
      sx={{
        height: '100%',
        px: 3,
        py: 2,
        width: 280,
        borderRight: `1px solid ${grey[200]}`,
        overflowY: 'auto',
        '& .MuiSvgIcon-root': {
          fontSize: 24,
        },
      }}
    >
      <List>
        {menuBarItems.map((menu) =>
          menu.category === 'singleton' ? (
            <LinkListItemButton href={menu.href} key={menu.href}>
              <ListItemIcon>{menu.icon}</ListItemIcon>
              <ListItemText primary={menu.title} />
            </LinkListItemButton>
          ) : (
            <div key={menu.identifier}>
              <ListItemButton
                onClick={() => toggleDropdownMenu(menu.title)}
                sx={{
                  borderRadius: 2,
                  ...(pathname.split('/')[1] === menu.identifier && {
                    backgroundColor: 'secondary.main',
                    color: '#fff',
                    '&:hover': { backgroundColor: 'secondary.main' },
                    '& .MuiSvgIcon-root': {
                      color: '#fff',
                    },
                  }),
                }}
              >
                <ListItemIcon>{menu.icon}</ListItemIcon>
                <ListItemText primary={menu.title} />
                {menu.isOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>

              {menu.submenus.map((submenu) => (
                <Collapse in={menu.isOpen} timeout="auto" unmountOnExit key={submenu.title}>
                  <List component="div">
                    <LinkListItemButton
                      href={submenu.href}
                      sx={{
                        ml: 4,
                        borderRadius: 2,
                        ...(pathname === submenu.href && {
                          backgroundColor: 'secondary.main',
                          color: '#fff',
                          '&:hover': { backgroundColor: 'secondary.main' },
                          '& .MuiSvgIcon-root': {
                            color: '#fff',
                          },
                        }),
                      }}
                    >
                      <ListItemIcon>{submenu.icon}</ListItemIcon>
                      <ListItemText primary={submenu.title} />
                    </LinkListItemButton>
                  </List>
                </Collapse>
              ))}
            </div>
          ),
        )}
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
