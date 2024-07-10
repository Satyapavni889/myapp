import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../screens/home-screen'
import About from '../screens/about-scren'
import Contact from '../screens/contact-screen'
import Setting from '../screens/setting-screen'
import Invalid from '../screens/invalid-screen'
import ProductDetail from '../screens/product-screen'

const Stack = () => {
  const[profileInfo, setprofileInfo]=useState()
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/about' Component={About}/>
        <Route path='/contact' Component={Contact}/>
        <Route path='/setting' Component={Setting}/>
        <Route path="/:location/:restaurantId/info" Component={ProductDetail} />
        <Route path='*' Component={Invalid}/>

      </Routes>     
    </BrowserRouter>

  )
}

export default Stack