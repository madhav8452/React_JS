import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home'
import Signup from '../pages/signup'
import Login from '../pages/login'

function MainRoutes(){
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
        </Routes>
    </>
  )
}

export default MainRoutes
