
import React from 'react'
import Home from '../component/Home/Home'
import RestaurantDetails from '../component/Restaurant/RestaurantDetails'
import Profile from '../component/Profile/Profile'
import { Navbar } from '../component/Navbar/navbar'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Auth } from '../component/Auth/Auth'
import{ Cart } from '../component/Cart/Cart'
export const CustomerRoute = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/account/:register' element={<Home/>}/>
            <Route path='/restaurant/:city/:title/:id' element={<RestaurantDetails/>}/>
            <Route path='/my-profile/*' element={<Profile/>}/>
            <Route path='/cart' element={<Cart/>}/>
            

        </Routes>
        <Auth/>
    </div>
  )
}
