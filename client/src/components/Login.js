import React, { useState } from 'react'
import axios from 'axios'

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
                'http://localhost:5500/api/auth/login',
                creds
            )
            .then(res => {
                console.log(res)
                localStorage.setItem("token", res.data.token)
                props.history.push("/")
            })
            .catch(err => {
                console.log(err)
            })

    }

    return (
        <div>
            <form onSubmit={loginUser}>
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
            </form>
        </div>
    )
}
