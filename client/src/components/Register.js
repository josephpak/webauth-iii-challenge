import React, { useState } from 'react'

export default function Register() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('') 

    return (
        <div>
            <form>
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
            </form>
        </div>
    )
}

