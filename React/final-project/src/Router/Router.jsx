import Header from '@/ui/components/common/Header'
import AboutPage from '@/ui/pages/About'
import HomePage from '@/ui/pages/Home'
import React from 'react'
import { Route, Routes } from 'react-router'

export default function Router() {
  return (
    <>
    <Header/>
    <Routes>
        <Route path='' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/sidebar' element={<Sidebar/>}/>
    </Routes>
    
    </>
  )
}
