import { createTheme, responsiveFontSizes } from '@mui/material/styles'

let theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#686FE8',
    },
    secondary: {
      main: '#001376',
    },
  },
  spacing: 8,
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: 14,
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 700,
    },
  },
})

theme = responsiveFontSizes(theme)
export { theme }
