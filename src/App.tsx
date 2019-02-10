import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './containers/home/Home';
import Room from './containers/room/Room';
import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/room/:id" component={Room} />
      </Switch >
    );
  }
}

export default App;
