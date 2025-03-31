import { Breakpoint, useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

export const useResponsive = (breakpoint: Breakpoint) => {
  const theme = useTheme()
  const query = theme.breakpoints.down(breakpoint)
  const isMobile = useMediaQuery(query)

  return { isMobile }
}
