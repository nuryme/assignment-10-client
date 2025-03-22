import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <div>
      <header className='w-11/12 mx-auto'>
        <Navbar></Navbar>
      </header>

    <main className='w-11/12 mx-auto'>
        <Outlet></Outlet>
    </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  )
}


