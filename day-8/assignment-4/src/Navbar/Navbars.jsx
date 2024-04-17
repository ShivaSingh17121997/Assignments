import React  from 'react'
import {Link} from 'react-router-dom'

export default function Navbars() {
  return (
    <div style={{ color:"green" ,fontWeight:"1000"  ,  display:'flex' , justifyContent:'space-evenly' , padding:'20px'}}>
        <Link to="/" >UserForm</Link>
        <Link to="/home" >Home</Link>

    </div>
  )
}
