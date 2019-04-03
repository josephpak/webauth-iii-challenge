import React, { Component } from 'react'
import axios from 'axios'

export default class UsersList extends Component {
  state = {
      users: []
  }  

  componentDidMount() {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjozLCJ1c2VybmFtZSI6IlRlbGxlciIsImRlcGFydG1lbnQiOiJNYXJrZXRpbmciLCJpYXQiOjE1NTQzMTkyMTMsImV4cCI6MTU1NDQwNTYxM30.W6VQisT8Iy2CiN2LfU4dAB4exyJp7vkb94mzKaSkM3w" 

      axios.get('http://localhost:5500/api/users/',
        {
            "Content-Type": "application/json",
            headers: { authorization: token }
        }
      )
        .then(res => {
            console.log(res)
            this.setState({
                users: res.data
            })    
        })
        .catch(err => {
            console.log(err)
        })
  }  

  render() {
    return (
      <div>
        {this.state.users ? 
            this.state.users.map(user => (
                <h1>{user.username}</h1>
            ))
        : "None!"
        }
      </div>
    )
  }
}

