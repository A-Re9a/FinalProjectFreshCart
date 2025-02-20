import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../Contexts/AuthContext'
import LoadingScreen from '../../Components/LoadingScreen/LoadingScreen'

export default function Layout() {
  const { isLoading } = useContext(AuthContext)
  return (
    <>
      {isLoading ?
        <LoadingScreen />
        :
        <>
          <Navbar />
          <div className='container py-10'>
            <Outlet />
          </div>
        </>
      }
      <Footer />
    </>
  )
}
