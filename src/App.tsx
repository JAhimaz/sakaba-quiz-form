import ThemeProvider from './App.Theme'
import { RecoilRoot } from 'recoil'
import { RouterProvider } from 'react-router-dom'
import { Suspense, useEffect, useState } from 'react'
import { router } from '@routes'
import { useTheme } from '@emotion/react'
import LoadingDiamond from '@components/Loader'
import { ApiPromise, WsProvider } from '@polkadot/api'

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

  const [api, setApi] = useState<ApiPromise>()
  const [accounts, setAccounts] = useState([])
  const [selectedAccount, setSelectedAccount] = useState()

  const setup = async () => {
    const wsProvider = new WsProvider("wss://ws.gm.bldnodes.org/");
    const api = await ApiPromise.create({ provider: wsProvider });

    setApi(api)
  }

  useEffect(() => {
    setup()
  }, []);

  useEffect(() => {
    if(!api) return

    (async () => {
      const time = await api.query.timestamp.now()

      console.log(time.toPrimitive())
    })()

  }, [api])

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
