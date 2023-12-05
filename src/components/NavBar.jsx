import React from 'react'
import {NavLink} from "react-router-dom"
import "../App.css"

export default function Navbar() {
  return (
    <ul>
        <li>
            <NavLink className="link" to="/">User form</NavLink>
        </li>
        <li>
            <NavLink className="link" to="/user-data" >User data</NavLink> 
        </li>
    </ul>
  )
}
