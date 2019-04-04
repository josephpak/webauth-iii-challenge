import React, { useState } from 'react'
import axios from 'axios'

import {
    Form,
    FormWrapper
} from "./LoginStyles"

export default function Login(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const loginUser = e => {
        e.preventDefault()
        const creds = {
            username,
            password
        }
        axios
            .post(
                'http://localhost:5500/api/auth/login', creds
            )
            .then(res => {
                localStorage.setItem("token", res.data.token)
                props.history.push("/")
            })
            .catch(err => {
                console.log(err)
            })

    }

    return (
        <FormWrapper>
            <Form onSubmit={loginUser}>
                <h1>Login</h1>
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
                <button
                type="submit"
                >Login</button>
            </Form>
        </FormWrapper>
    )
}
