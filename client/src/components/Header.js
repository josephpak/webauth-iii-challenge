import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

import Register from "./Register"

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: flex-end
`

export default function Header() {
  const token = localStorage.getItem("token")

  return (
    <HeaderWrapper>
        {!token && 
        <>
        <Link 
        to="/register"
        >Register</Link>
        <Link
        to="/login"
        >
        </Link>
        </>
        }
        <Link
        to="/users"
        >
        Users
        </Link>  
        <button>
            Logout
        </button>
      

    </HeaderWrapper>
  )
}
