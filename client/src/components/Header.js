import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

import Register from "./Register"

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: flex-end;
`

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
                    to="/users"
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
