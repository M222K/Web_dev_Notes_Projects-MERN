import React from 'react'
import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer"
import { Outlet } from 'react-router' //this is a special component given us by react router gives us capability that header and footer remains at all pages and in between content cahnges

function Layout() {
  return (
   <>
   <Header/>
   <Outlet/>
   <Footer/>
   </>
  )
}

export default Layout
