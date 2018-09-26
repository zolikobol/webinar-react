import React, { Component } from 'react';
import { sendMessage } from '../services/api-ai';
import './css/chat-window.css';

export default class ChatWindow extends Component {
	constructor(props) {
    super(props);
    this.state = {conversation: [],
			currentMessage: '',
		};
		this.renderResponse = this.renderResponse.bind(this);
		this.onInputChange = this.onInputChange.bind(this);
		this.sendMessage = this.sendMessage.bind(this);
		this.receiveMessage = this.receiveMessage.bind(this);
  }
	renderResponse() {
		const responses = this.state.conversation.map(response => {
			const key = Math.random().toString(36).substring(7);
			return (
				<li key={key}>{response.who}: {response.message}</li>
			)
		})
		return responses;
	}
	sendMessage() {
		const response = {who: 'me', message: this.state.currentMessage}
		this.setState({
			conversation: [
				...this.state.conversation, response
			]
		})
		sendMessage(this.state.currentMessage)
			.then(response => {
				response.result.fulfillment.messages.forEach(element => {
					this.receiveMessage(element.speech);
				});
			})
			.catch(err => {
				console.log('====================================');
				console.log(err);
				console.log('====================================');
			})
		this.setState({currentMessage: ''});
	}
	onInputChange(event) {
		this.setState({currentMessage : event.target.value});
	}
	receiveMessage(message) {
		const response = {who: 'him', message: message}
		this.setState({
			conversation: [
				...this.state.conversation, response
			]
		})
	}
  render() {
    return (
      <div className="chat-window">
				<ul className="response-holder">
					{this.renderResponse()}
				</ul>
				<input type="text" value={this.state.currentMessage} onChange={this.onInputChange}/>
				<button onClick={this.sendMessage} >Send</button>
      </div>
    )
  }
}
