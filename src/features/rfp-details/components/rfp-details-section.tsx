import { Box, Stack, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import { RfpDetailsSectionProps } from '../types/rfp-details'

export default function RfpDetailsSection(props: RfpDetailsSectionProps) {
  const { icon, title, children, action } = props
  return (
    <Box component="section" sx={{ background: '#fff', borderRadius: 2, width: '100%' }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          p: 2,
          borderBottom: `1px solid ${grey[200]}`,
          height: 60,
        }}
      >
        <Stack direction="row" spacing={0.5} sx={{ '& .MuiSvgIcon-root': { color: 'primary.main' } }}>
          {icon}
          <Typography fontWeight={700}>{title}</Typography>
        </Stack>
        {action}
      </Stack>
      {children}
    </Box>
  )
}
