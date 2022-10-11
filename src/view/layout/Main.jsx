import React from 'react'
import { Routes, Route } from 'react-router-dom'
import PetList from '../pages/PetList'
import Register from '../pages/Register'
import PetRegister from '../pages/PetRegister'
import Login from '../pages/Login'
import Service from '../pages/Service'
import "../../resource/main.css";


export default function Main() {
  return (
    <div>
    <Routes>
        <Route path='/' element={<PetList />}></Route>
        <Route path='/pages/register' element={<Register />}></Route>
        <Route path='/pages/petregister' element={<PetRegister />}></Route>
        <Route path='/pages/login' element={<Login />}></Route>
        <Route path='/pages/service' element={<Service />}></Route>
    </Routes>
    </div>
  )
}


