import React, { Component } from 'react';
import logo from './logo.svg';
import  ChatWindow from './components/chat-window';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ChatWindow />
      </div>
    );
  }
}

export default App;
