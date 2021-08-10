import React, { Component } from 'react';
import { Widget, addResponseMessage, toggleWidget } from 'react-chat-widget';
import { callEchoBotApi } from './EchoBotApi'

import 'react-chat-widget/lib/styles.css';
import { config } from "../config/config";

class EchoBot extends Component {

  componentDidMount() {
    toggleWidget();
    addResponseMessage(config().botStartMessage);
  }


  handleNewUserMessage = async (newMessage) => {
    try {
      let speech = new SpeechSynthesisUtterance();
      speech.lang = "en";

      // Now send the message throught the backend API
      var response = await callEchoBotApi(newMessage);
      addResponseMessage(response.data.botResponse);

      speech.text = response.data.botResponse;
      window.speechSynthesis.speak(speech);

    } catch (error) {
      console.log(error)
    }

  };
  render() {
    return (



      <Widget
        handleNewUserMessage={this.handleNewUserMessage} title="EchoBot" subtitle="" profileAvatar="/chatbot.png"
      />



    );
  }
}




export default EchoBot;