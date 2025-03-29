import { PromptDialogProps } from '@/types/dialog'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'

export default function PromptDialog(props: PromptDialogProps) {
  const { open, title, contentText, handleCloseDialog, handleClickConfirm } = props

  const handleDialogConfirm = () => {
    handleClickConfirm()
    handleCloseDialog()
  }
  return (
    <Dialog open={open} onClose={handleCloseDialog}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{contentText}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseDialog} color="inherit">
          아니오
        </Button>
        <Button onClick={handleDialogConfirm} autoFocus variant="contained" color="error">
          삭제
        </Button>
      </DialogActions>
    </Dialog>
  )
}
