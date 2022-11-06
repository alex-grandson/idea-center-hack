import { CacheProvider, EmotionCache } from '@emotion/react'

import { AppProps } from 'next/app'
import AuthStore from '../store/AuthStore'
import ChatStore from '../store/ChatStore'
import { createContext } from 'react'
import createEmotionCache from '../createEmotionCache'
import CssBaseline from '@mui/material/CssBaseline'
import Head from 'next/head'
import Header from '../components/header/Header'
import theme from '../theme'
import { ThemeProvider } from '@mui/material/styles'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

interface State {
  authStore: AuthStore
  chatStore: ChatStore
}

export const authStore = new AuthStore()
const chatStore = new ChatStore()

export const Context = createContext<State>({
  authStore,
  chatStore,
})

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  return (
    <Context.Provider value={{ authStore, chatStore }}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name='viewport' content='initial-scale=1, width=device-width' />
        </Head>
        <ThemeProvider theme={theme}>
          <Header>
            <Component {...pageProps} />
          </Header>
          <CssBaseline />
        </ThemeProvider>
      </CacheProvider>
    </Context.Provider>
  )
}
