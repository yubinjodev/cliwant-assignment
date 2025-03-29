import { Grid2, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'

export type RfpDetailsSectionInfoGridProps = {
  title: string
  details: string
  titleGridSize?: number
  detailsGridSize?: number
}

export default function RfpDetailsSectionInfoGrid(props: RfpDetailsSectionInfoGridProps) {
  const { title, details, titleGridSize, detailsGridSize } = props
  return (
    <>
      <Grid2 size={titleGridSize || 1}>
        <Typography fontStyle={{ color: grey[500] }}>{title}</Typography>
      </Grid2>
      <Grid2 size={detailsGridSize || 11}>
        <Typography>{details}</Typography>
      </Grid2>
    </>
  )
}
