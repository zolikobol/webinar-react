import React, { Component } from 'react';
import logo from './logo.svg';
import  ChatWindow from './components/chat-window';
import { initApiAi } from './services/api-ai';
import './App.css';

initApiAi('13ffc8e2469e47e9a450ec6629844341');

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
