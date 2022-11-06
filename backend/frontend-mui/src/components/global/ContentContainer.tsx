import react, { Children, FC, useEffect } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

interface ContentContainerProps {
  children: React.ReactNode
}

const ContentContainer: FC<ContentContainerProps> = ({ children }) => {
  return (
    <Box sx={{ width: '70%', m: '0 auto' }}>
      <Grid container spacing={1} columns={{ xs: 6, md: 12 }}>
        {children}
      </Grid>
    </Box>
  )
}

export default ContentContainer
