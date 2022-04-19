import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Home from '../pages/Home'
import HomeNavbar from '../components/HomeNavbar'
import WomenPage from '../pages/WomenPage'
import ManPage from '../pages/ManPage'
import JewerlyPages from '../pages/JewerlyPages'
import ElectronicPage from '../pages/ElectronicPage'
import AllPage from '../pages/AllPage'
import CardDetails from '../pages/CardDetails'
import Search from '../pages/Search'
import ShopCart from '../pages/ShopCart'
import About from '../pages/About'
import Contact from '../pages/Contact'

const MainRouter = () => {
  return (
    <>
      <HomeNavbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/women" element={<WomenPage />} />
        <Route path="/man" element={<ManPage />} />
        <Route path="/jew" element={<JewerlyPages />} />
        <Route path="/elect" element={<ElectronicPage />} />
        <Route path="/all" element={<AllPage />} />
        <Route path="product/:id" element={<CardDetails />} />
        <Route path="/search" element={<Search />} />
        <Route path="/shopcart" element={<ShopCart />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </>
  )
}

export default MainRouter
