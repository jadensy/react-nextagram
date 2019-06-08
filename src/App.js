import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'; // DO NOT ALIAS THIS TO BROWSERROUTER
import Homepage from './pages/Homepage.js';
import Navigation from './containers/Navigation.js';
import UserProfilePage from './pages/UserProfilePage.js';
import ProfilePage from './pages/ProfilePage.js'

// ----------------------------------------------------------------------------


class App extends Component {
  state = {
  }

  render() {
    return (

    <div>

    <Navigation />

    <Route exact path="/" component = {
        props => <Homepage {...props} users={this.state.users} /> } />
    <Route path="/users/:id" component={UserProfilePage} />
    <Route exact path="/profile" component={ProfilePage} />
    </div>
    )
  }
}

export default App;
