import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

const SharedLayout = () => {
  return (
    <>
      <Outlet />
      <NavBar />
    </>
  )
}

export default SharedLayout
