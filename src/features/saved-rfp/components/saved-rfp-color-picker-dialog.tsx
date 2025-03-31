import { Dialog } from '@mui/material'
import { ColorResult, SketchPicker } from 'react-color'

export type SavedRfpColorPickerDialogProps = {
  open: boolean
  onClose: VoidFunction
  color: string
  onColorChange: (color: ColorResult) => void
}

export default function SavedRfpColorPickerDialog(props: SavedRfpColorPickerDialogProps) {
  const { open, onClose, color, onColorChange } = props
  return (
    <Dialog open={open} onClose={onClose}>
      <SketchPicker color={color} onChangeComplete={onColorChange} />
    </Dialog>
  )
}
