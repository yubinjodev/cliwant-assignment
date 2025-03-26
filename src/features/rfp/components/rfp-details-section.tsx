import { Box, Stack, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import { RfpDetailsSectionProps } from '../types/rfp-details'

export default function RfpDetailsSection(props: RfpDetailsSectionProps) {
  const { icon, title, children } = props
  return (
    <Box component="section" sx={{ background: '#fff', borderRadius: 2, width: '100%' }}>
      <Stack direction="row" spacing={1} sx={{ p: 2, borderBottom: `1px solid ${grey[200]}` }}>
        {icon}
        <Typography>{title}</Typography>
      </Stack>
      <Box sx={{ p: 2, height: 240, overflowY: 'auto' }}>{children}</Box>
    </Box>
  )
}

/**
 * basic layout
 * state management
 * styling
 * refactoring
 *
 * (optional) additional optimization
 */
