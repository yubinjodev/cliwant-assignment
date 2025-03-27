/**
 *  menu is open when submenu is active
 * menu is active when submenu is active
 */

import { useMenuBarStore } from '@/stores/menu-bar-store'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import SettingsIcon from '@mui/icons-material/Settings'
import { Collapse, List, ListItemButton, ListItemText, Stack } from '@mui/material'
import { grey } from '@mui/material/colors'
import ListItemIcon from '@mui/material/ListItemIcon'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import SupportNotice from './support-notice'

export default function Menubar() {
  const pathname = usePathname()
  const { menuBarItems, toggleDropdownMenu } = useMenuBarStore()

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
        {menuBarItems.map((menu) =>
          menu.category === 'singleton' ? (
            <ListItemButton key={menu.href}>
              <ListItemIcon>{menu.icon}</ListItemIcon>
              <ListItemText primary={menu.title} />
            </ListItemButton>
          ) : (
            <div key={menu.href}>
              <ListItemButton
                onClick={() => toggleDropdownMenu(menu.title)}
                sx={{
                  borderRadius: 2,
                  ...(pathname.startsWith(menu.href) && {
                    backgroundColor: 'secondary.main',
                    color: '#fff',
                  }),
                }}
              >
                <ListItemIcon>{menu.icon}</ListItemIcon>
                <ListItemText primary={menu.title} />
                {menu.isOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>

              {menu.submenus.map((submenu) => (
                <Collapse in={menu.isOpen} timeout="auto" unmountOnExit key={submenu.title}>
                  <List component="div" disablePadding>
                    <Link href={submenu.href}>
                      <ListItemButton
                        sx={{
                          ml: 4,
                          borderRadius: 2,
                          ...(pathname === submenu.href && {
                            backgroundColor: 'secondary.main',
                            color: '#fff',
                          }),
                        }}
                      >
                        <ListItemIcon>{submenu.icon}</ListItemIcon>
                        <ListItemText primary={submenu.title} />
                      </ListItemButton>
                    </Link>
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
