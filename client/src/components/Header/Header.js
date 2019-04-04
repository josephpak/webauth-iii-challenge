import React from 'react';
import { Link } from 'react-router-dom'

import Register from "../Register/Register"

import {
    HeaderWrapper
} from "./HeaderStyles"

export default function Header(props) {
  const token = localStorage.getItem("token")

  const handleLogout = e => {
      e.preventDefault()
      localStorage.clear()
      props.history.push("/login")
  }

  return (
    <HeaderWrapper>
        {!token ? 
            <>
                <Link 
                    to="/register"
                >Register</Link>
                <Link
                    to="/login"
                >Login</Link>
            </>
            :
            <>
                <Link
                    to="/"
                >
                Users</Link>  
                <button 
                    onClick={handleLogout}
                >Logout</button>
            </>
        }

        
      

    </HeaderWrapper>
  )
}
