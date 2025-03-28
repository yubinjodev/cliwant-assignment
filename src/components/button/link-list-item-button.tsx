import { ButtonProps, ListItemButton } from '@mui/material'
import Link from 'next/link'
import { Url } from '../../types/index'

type LinkButtonProps = ButtonProps & {
  href: Url
}

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
