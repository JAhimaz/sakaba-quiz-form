import ThemeProvider from './App.Theme'
import { RecoilRoot } from 'recoil'
import { RouterProvider } from 'react-router-dom'
import { Suspense } from 'react'
import { router } from '@routes'
import { useTheme } from '@emotion/react'
import LoadingDiamond from '@components/Loader'

export const Loader = () => (
  <div style={{
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    backgroundColor: useTheme().background,
  }}>
    <LoadingDiamond />
  </div>
)

const App = () => {

  return (
    <ThemeProvider> 
      <RecoilRoot>
        <Suspense fallback={<Loader />}>
          <RouterProvider router={router} />
        </Suspense>
      </RecoilRoot>
    </ThemeProvider>
  )
}

export default App
