import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home1 from '../Pages/Home1'
import UserForm from '../Pages/UserForm'


export default function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path="/" element={< UserForm/>} />
            <Route path="/home" element={< Home1/>} />
        </Routes>
    </div>
  )
}
