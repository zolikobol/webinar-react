import React, { Component } from 'react';
import './css/chat-window.css';

export default class ChatWindow extends Component {
	constructor(props) {
    super(props);
    this.state = {conversation: [
			{
				who: 'me',
				message: 'hello'
			},
			{
				who: 'him',
				message: 'hello to you too'
			},
		]};
  }
	renderResponse() {
		console.log('=======================');
		console.log(this.state);
		console.log('=======================');
		const responses = this.state.conversation.map(response => (
			<span key={response.message}>{response.who}: {response.message}</span>
		))
		return responses;
		// (
		// 	<div>{responses}</div>
		// );
	}
	onButtonClick() {
		const response = {who: 'me', message: 'aaaa'}
		this.setState({
			conversation: [
				...this.state.conversation, response
			]
		})
	}
	onInputChange(event) {
		console.log('=======================');
		console.log(event);
		console.log('=======================');
	}
  render() {
    return (
      <div className="chat-window">
				<div className="response-holder">
					{this.renderResponse()}
				</div>
				<input type="text" value="" onChange={this.onInputChange}/>
				<button onClick={this.renderResponse}>Send</button>
      </div>
    )
  }
}
