import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Footer from './Footer'
import AdminHome from './Admin/Home/AdminHome'
import Maincategory from './Admin/Maincategory/Maincategory'
import CreateMaincategory from './Admin/Maincategory/CreateMaincategory'
import UpdateMaincategory from './Admin/Maincategory/UpdateMaincategory'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/admin' element={<AdminHome />} />
        <Route path='/admin/maincategory' element={<Maincategory />} />
        <Route path='/admin/maincategory/create' element={<CreateMaincategory />} />
        <Route path='/admin/maincategory/update/:id' element={<UpdateMaincategory />} />

      </Routes>
      <Footer />

    </BrowserRouter>
  )
}
