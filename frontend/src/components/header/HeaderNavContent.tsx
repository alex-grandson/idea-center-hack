import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material'

import { headerMenuElements } from '../../constants/HeaderMenuElements'
import Link from 'next/link'
import MenuIcon from '@mui/icons-material/Menu'
import NavLink from '../NavLink'
import { useState } from 'react'

const HeaderNavContent = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: { xs: 'row-reverse', md: 'row' },
        // gap: '30vw',
      }}
    >
      <Link href='/' style={{ textDecoration: 'none' }}>
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <img
            style={{
              boxSizing: 'border-box',
              width: 'auto',
              height: 70,
              maxHeight: 70,
            }}
            src='/logo_light.png'
            alt='iTMO'
          />
        </Box>
      </Link>

      {/* mobile */}
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: 'flex', md: 'none' },
        }}
      >
        <IconButton
          size='large'
          aria-label='account of current user'
          aria-controls='menu-appbar'
          aria-haspopup='true'
          onClick={handleOpenNavMenu}
          color='inherit'
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id='menu-appbar'
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
        >
          {headerMenuElements.map((headerMenuElement) => (
            <Link
              href={headerMenuElement.url}
              style={{ textDecoration: 'none' }}
            >
              <MenuItem
                key={headerMenuElement.title}
                onClick={handleCloseNavMenu}
              >
                <Typography textAlign='center'>
                  {headerMenuElement.title}
                </Typography>
              </MenuItem>
            </Link>
          ))}
        </Menu>
        <Link href='/' style={{ textDecoration: 'none' }}>
          <Box>
            <img
              style={{
                boxSizing: 'border-box',
                width: 'auto',
                height: 70,
                maxHeight: 70,
              }}
              src='/logo_light.png'
              alt='iTMO'
            />
          </Box>
        </Link>
      </Box>

      {/* Desktop */}
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: 'none', md: 'flex' },
          m: '0 auto',
          pr: '5%',
          pl: '5%',
        }}
      >
        {headerMenuElements.map((headerMenuElement) => (
          <NavLink
            href={headerMenuElement.url}
            handleCloseNavMenu={handleCloseNavMenu}
          >
            {headerMenuElement.title}
          </NavLink>
        ))}
      </Box>

      {/* <Link

                    href={headerMenuElement.url}
                    style={{ textDecoration: 'none', width: '80%' }}
                  >
                    <Button
                      key={headerMenuElement.title}
                      onClick={handleCloseNavMenu}
                      sx={{
                        fontSize: '18px',
                        my: 2,
                        color: 'white',
                        display: 'block',
                        height: '100%',
                        width: '100%',
                        m: '0 auto',
                        '&:hover': { backgroundColor: 'transparent' },
                      }}
                    >
                      {headerMenuElement.title}
                    </Button>
                  </Link>
                ))}
              </Box> */}
    </Box>
  )
}

export default HeaderNavContent
