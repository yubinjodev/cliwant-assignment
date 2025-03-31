import { useMenuBarStore } from '@/stores/menu-bar-store'
import Dialog from '@mui/material/Dialog'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import Menubar from '../layout/menu-bar'
import NavHeader from '../layout/nav-header'

export default function FullScreenMenuBar({ open, handleClose }: { open: boolean; handleClose: VoidFunction }) {
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
    <Dialog fullScreen open={open} onClose={handleClose}>
      <NavHeader />
      <Menubar />
    </Dialog>
  )
}
