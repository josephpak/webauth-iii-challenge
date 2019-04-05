import React, { useState } from 'react'
import axios from 'axios';

import {
    Form,
    FormWrapper
} from "./RegisterStyles"

export default function Register(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('') 
    const [department, setDepartment] = useState('') 

    if (localStorage.getItem("token")) {
        props.history.push('/')
    }

    const registerUser = e => {
        const user = {
            username,
            password,
            department
        }
        e.preventDefault()
        axios
            .post('http://localhost:5500/api/auth/register', user)
            .then(res => {
                props.history.push("/login")
            })
    }

    return (
        <FormWrapper>
            <Form onSubmit={registerUser}>
                <h1>Register</h1>
                <input
                type="text"
                placeholder="Enter Username"
                name="username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                />
                <input
                type="password"
                placeholder="Enter Password"
                name="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                />
                <input
                type="text"
                placeholder="Enter a Department"
                name="department"
                value={department}
                onChange={e => setDepartment(e.target.value)}
                />
                <button
                type="submit"
                >Submit</button>
            </Form>
        </FormWrapper>
    )
}

