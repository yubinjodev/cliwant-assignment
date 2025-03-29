import { LinkButtonProps } from '@/types/button'
import { ListItemButton } from '@mui/material'
import Link from 'next/link'

export default function LinkListItemButton(props: LinkButtonProps) {
  const { children, href, ...rest } = props

  return (
    <Link href={href} passHref legacyBehavior>
      <ListItemButton component="a" {...rest}>
        {children}
      </ListItemButton>
    </Link>
  )
}
