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
        <Route path="/react-store-app-with-redux/register" element={<Register />} />
        <Route path="/react-store-app-with-redux/login" element={<Login />} />
        <Route path="/react-store-app-with-redux/" element={<Home />} />
        <Route path="/react-store-app-with-redux/women" element={<WomenPage />} />
        <Route path="/react-store-app-with-redux/man" element={<ManPage />} />
        <Route path="/react-store-app-with-redux/jew" element={<JewerlyPages />} />
        <Route path="/react-store-app-with-redux/elect" element={<ElectronicPage />} />
        <Route path="/react-store-app-with-redux/all" element={<AllPage />} />
        <Route path="/react-store-app-with-redux/product/:id" element={<CardDetails />} />
        <Route path="/react-store-app-with-redux/search" element={<Search />} />
        <Route path="/react-store-app-with-redux/shopcart" element={<ShopCart />} />
        <Route path="/react-store-app-with-redux/about" element={<About />} />
        <Route path="/react-store-app-with-redux/contact" element={<Contact />} />
        
      </Routes>
    </>
  )
}

export default MainRouter
