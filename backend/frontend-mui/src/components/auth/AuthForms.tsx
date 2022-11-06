import { Box } from '@mui/material'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import SwipeableViews from 'react-swipeable-views'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import { useState } from 'react'

interface TabPanelProps {
  children?: React.ReactNode
  dir?: string
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

const AuthForms = () => {
  // const theme = useTheme();
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const handleChangeIndex = (index: number) => {
    setValue(index)
  }
  return (
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor='secondary'
        textColor='inherit'
        variant='fullWidth'
        aria-label='full width tabs example'
      >
        <Tab label='Вход' />
        <Tab label='Регистрация' />
      </Tabs>
      <SwipeableViews
        // axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        axis={value == 0 ? 'x' : 'x-reverse'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel
          value={value}
          index={0}
          // dir={theme.direction}
        >
          <LoginForm />
        </TabPanel>
        <TabPanel
          value={value}
          index={1}
          // dir={theme.direction}
        >
          <RegisterForm />
        </TabPanel>
      </SwipeableViews>
    </Box>
  )
}

export default AuthForms
