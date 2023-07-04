import createCache from '@emotion/cache'
import { CacheProvider, ThemeProvider, Theme } from '@emotion/react'
import { createContext, PropsWithChildren, useContext } from 'react'

declare module '@emotion/react' {
  export interface Theme {
    background: string
    foreground: string
    text: {
      plain: string,
      plainWhite: string,
      dim: string,
      highlight: string,
      sub: string,
    },
    success: string
    error: string
  }
}

export const DarkTheme: Theme = {
  background: '#ededed',
  foreground: '#1e1e1f',
  text: {
    plain: '#1c1b1b',
    plainWhite: '#e8e9eb',
    sub: '#333333',
    dim: '#aeafb0',
    highlight: '#fa8602',
  },
  success: '#13802c',
  error: '#d32f2f',
}

const Context = createContext({})

export const useTheme = () => useContext(Context)

const emotionCache = createCache({ key: 'emotion-css'})
emotionCache.compat = true

const Provider = ({ children }: PropsWithChildren<{}>) => (
  <CacheProvider value={emotionCache}>
    <ThemeProvider theme={DarkTheme}>
      {children}
    </ThemeProvider>
  </CacheProvider>
)

export default Provider
