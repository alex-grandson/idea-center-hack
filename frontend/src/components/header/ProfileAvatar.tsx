import {
  Avatar,
  Box,
  Icon,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from '@mui/material'

import { avatarDropdown } from '../../constants/AvatarDropdown'
import { Logout } from '@mui/icons-material'
import { useState } from 'react'

const ProfileAvatar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }
  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title='Профиль'>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id='menu-appbar'
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {avatarDropdown.map((setting, idx) => (
          <MenuItem key={idx} onClick={handleCloseUserMenu}>
            <Box
              display={'flex'}
              alignItems={'center'}
              textAlign='center'
              py={1}
            >
              <Icon
                sx={{
                  mr: 1.2,
                }}
              >
                {setting.icon}
              </Icon>
              <Typography pt={0.4}>{setting.title}</Typography>
            </Box>
          </MenuItem>
        ))}
        <MenuItem onClick={handleCloseUserMenu}>
          <Box
            display={'flex'}
            alignItems={'center'}
            color={'red'}
            textAlign='center'
            py={1}
          >
            <Icon
              sx={{
                mr: 1.2,
              }}
            >
              <Logout />
            </Icon>
            <Typography pt={0.4}>Выход</Typography>
          </Box>
        </MenuItem>
      </Menu>
    </Box>
  )
}

export default ProfileAvatar
