import React, { Component } from 'react';
import './App.scss';
import io from 'socket.io-client';
import { LOCAL_URL } from './constants/CONSTANTS';
import { Route, Switch, Redirect } from 'react-router-dom';
import Auth from './pages/auth/Auth';

class App extends Component {

  componentDidMount() {
    const socket = io(LOCAL_URL);
    socket.once('connect', _ => { console.log('client connected') });
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Redirect from="/" to="/auth" exact />
          <Route path="/auth" component={Auth} />
        </Switch>
      </div>
    );
  }
}

export default App;
