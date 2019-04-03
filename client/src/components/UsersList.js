import React, { Component } from 'react'
import axios from 'axios'

export default class UsersList extends Component {
  state = {
      users: []
  }  

  componentDidMount() {
      const token = localStorage.getItem("token")
      console.log(token)

      axios.get('http://localhost:5500/api/users/',
        {
            "Content-Type": "application/json",
            headers: { authorization: token }
        }
      )
        .then(res => {
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

