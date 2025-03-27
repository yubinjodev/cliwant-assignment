import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import LocalAtmIcon from '@mui/icons-material/LocalAtm'
import MonitorIcon from '@mui/icons-material/Monitor'
import PersonIcon from '@mui/icons-material/Person'
import SearchIcon from '@mui/icons-material/Search'
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import ApartmentIcon from '@mui/icons-material/Apartment'
import BadgeIcon from '@mui/icons-material/Badge'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import DashboardIcon from '@mui/icons-material/Dashboard'
import DescriptionIcon from '@mui/icons-material/Description'
import { MenuBarItem } from '../../types/menu-bar'

export const MENU_BAR_ITEMS: MenuBarItem[] = [
  {
    category: 'singleton',
    title: '대시보드',
    href: '/dashboard',
    icon: <DashboardIcon />,
  },
  {
    category: 'dropdown',
    href: '/rfp/listing',
    title: '입찰겁색',
    icon: <SearchIcon />,
    isOpen: false,
    submenus: [
      {
        title: '국내입찰',
        href: '/rfp/listing',
        icon: <FormatListBulletedIcon />,
      },
      {
        title: '관심공고',
        href: '/rfp/saved',
        icon: <BookmarkIcon />,
      },
    ],
  },
  {
    category: 'dropdown',
    href: '/industry-analysis',
    title: '산업분석',
    icon: <SignalCellularAltIcon />,
    isOpen: false,
    submenus: [
      {
        title: '우리회사',
        href: '/industry-analysis/our-company',
        icon: <PersonIcon />,
      },
      {
        title: '수요기관',
        href: '/industry-analysis/public-sector',
        icon: <AccountBalanceIcon />,
      },
      {
        title: '인물검색',
        href: '/industry-analysis/find-people',
        icon: <ApartmentIcon />,
      },
      {
        title: '공급기업',
        href: '/industry-analysis/suppliers',
        icon: <BadgeIcon />,
      },
      {
        title: '과거사업',
        href: '/industry-analysis/project-history',
        icon: <DescriptionIcon />,
      },
      {
        title: '정부예산',
        href: '/industry-analysis/government-budget',
        icon: <LocalAtmIcon />,
      },
    ],
  },
  {
    category: 'singleton',
    title: '이력관리',
    href: '/history',
    icon: <MonitorIcon />,
  },
]
