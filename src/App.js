import React, { Component } from 'react'
import UserList from './components/UserList'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <i className="fa fa-twitch fa-4x" aria-hidden="true"></i>
          <h2>Twitch Streamers</h2>
        </div>
        <UserList />
      </div>
    );
  }
}

export default App
