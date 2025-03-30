export const COPY_TEXT_TO_CLIPBOARD = (pathname: string) => {
  try {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(pathname)
    } else {
      const textArea = document.createElement('textarea')
      textArea.value = pathname
      document.body.appendChild(textArea)
      textArea.focus()
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
    }
  } catch (err) {
    console.error(err)
  }
}
