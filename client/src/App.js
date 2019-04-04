import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import { GlobalStyle } from "./components/styles/Global";

// Display Components
import Header from "./components/Header/Header"
import UsersList from "./components/Users/UsersList";

// Auth Components
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";

// Miscellaneous Components
import NotFound from "./components/NotFound";

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Header history={this.props.history}/>

        <Switch>
          <Route exact path="/" component={UsersList} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/register" component={Register} />
					<Route component={NotFound} />
				</Switch>
      </>
    );
  }
}

export default App;
