import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import { GlobalStyle } from "./components/styles/Global";

// Display Components
import UsersList from "./components/UsersList";

// Auth Components
import Register from "./components/Register";
import Login from "./components/Login";

// Miscellaneous Components
import NotFound from "./components/NotFound";

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        This is the application
        <Switch>
					<Route exact path="/users" component={UsersList} />

					<Route path="/login" exact component={Login} />
					<Route path="/register" exact component={Register} />
					<Route component={NotFound} />
				</Switch>
      </>
    );
  }
}

export default App;
