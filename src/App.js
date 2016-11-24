import React, { Component } from 'react'
import ChannelList from './components/ChannelList'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <i className="fa fa-twitch fa-4x" aria-hidden="true"></i>
          <h2>Twitch Streamers</h2>
        </div>
        <ChannelList />
      </div>
    );
  }
}

export default App
