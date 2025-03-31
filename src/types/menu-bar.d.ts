import { ReactElement } from 'react'

export type SingletonMenu = {
  category: 'singleton'
  title: string
  href: Url
  icon: ReactElement
}

export type DropdownMenu = {
  category: 'dropdown'
  title: string
  icon: ReactElement
  isOpen: boolean
  submenus: Submenu[]
  identifier: string
}

export type Submenu = {
  title: string
  href: Url
  icon: ReactElement
}

export type MenuBarItem = SingletonMenu | DropdownMenu

export type MenuBarStore = {
  menuBarItems: MenuBarItem[]
  isMobileMenuOpen: boolean
}

export type MenuBarStoreActions = {
  toggleDropdownMenu: (title: string) => void
  handleCloseMobileMenu: () => void
  handleOpenMobileMenu: () => void
}
