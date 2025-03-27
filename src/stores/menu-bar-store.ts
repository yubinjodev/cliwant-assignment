import { MenuBarStore, MenuBarStoreActions } from '@/types/menu-bar'
import { MENU_BAR_ITEMS } from '@/utils/constants/menu-bar-items'
import { create } from 'zustand'

export const useMenuBarStore = create<MenuBarStore & MenuBarStoreActions>((set) => ({
  menuBarItems: MENU_BAR_ITEMS,
  toggleDropdownMenu: (title) =>
    set((state) => ({
      menuBarItems: state.menuBarItems.map((item) =>
        item.category === 'dropdown' && item.title === title ? { ...item, isOpen: !item.isOpen } : item,
      ),
    })),
}))
