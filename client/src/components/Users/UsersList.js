import React, { Component } from 'react'
import axios from 'axios'

import requiresAuth from "../requiresAuth"

import {
  ListWrapper
} from "./UsersStyles"

class UsersList extends Component {
  state = {
      users: []
  }  

  componentDidMount() {
      const token = localStorage.getItem("token")
      axios.get('/users/')
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
      <ListWrapper>
        {this.state.users ? 
            this.state.users.map((user, i) => (
                <h1
                key={i}
                >{user.username}</h1>
            ))
        : "None!"
        }
      </ListWrapper>
    )
  }
}

export default requiresAuth(UsersList)

