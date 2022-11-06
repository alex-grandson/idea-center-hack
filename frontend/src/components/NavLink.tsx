import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Button from '@mui/material/Button'

interface NavLinkProps {
  href: string
  children: string
  handleCloseNavMenu: () => void
}

const defaultStyle = {
  opacity: '45%',
  fontSize: '18px',
  my: 2,
  color: 'white',
  display: 'block',
  height: '100%',
  width: '100%',
  m: '0 auto',
  '&:hover': { backgroundColor: 'transparent' },
}

const isActiveStyle = {
  opacity: '100%',
  fontSize: '18px',
  my: 2,
  color: 'white',
  display: 'block',
  height: '100%',
  width: '100%',
  m: '0 auto',
  '&:hover': { backgroundColor: 'transparent' },
}

const NavLink = ({ href, children, handleCloseNavMenu }: NavLinkProps) => {
  const [ariaCurrent, setAriaCurrent] = useState<any>()

  const router = useRouter()
  const { asPath } = router

  useEffect(() => {
    const ariaCurrent = href === asPath ? 'page' : undefined
    setAriaCurrent(ariaCurrent)
  }, [asPath, href])

  return (
    <Link
      href={href}
      aria-current={ariaCurrent}
      style={{ textDecoration: 'none', width: '80%' }}
    >
      <Button
        key={children}
        onClick={handleCloseNavMenu}
        sx={asPath === href ? isActiveStyle : defaultStyle}
      >
        {children}
      </Button>
    </Link>
  )
}

export default NavLink
