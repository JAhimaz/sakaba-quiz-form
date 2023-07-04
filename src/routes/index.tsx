import styled from '@emotion/styled';
import Navbar from '@layout/Navigation';
import React from 'react';
import { createBrowserRouter, Outlet } from "react-router-dom";
import Footer from '@layout/Footer';

const Home = React.lazy(() => import('./Home'))
const Error404 = React.lazy(() => import('./Error'))

const Main = styled(
  ({ className }: { className?: string }) => (
    <section className={`main ${className}`}>
      <Navbar />
      <Outlet />
      <Footer />
    </section>
  )
)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text.highlight};
  background: ${({ theme }) => theme.background};
`

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      { path: '/', element: <Home />},
      { path: '*', element: <Error404 /> }
    ]
  }
])