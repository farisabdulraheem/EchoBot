import React, { Component } from 'react';
import { Widget, addResponseMessage, toggleWidget } from 'react-chat-widget';
import { callEchoBotApi } from './EchoBotApi'
import {withAlert} from 'react-alert';
import 'react-chat-widget/lib/styles.css';
import { config } from "../config/config";

class EchoBot extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      items: [],
      errorMessage: ''
    }
     
     
  }
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
      if (response.data && response.data.botResponse) {
        addResponseMessage(response.data.botResponse);
        speech.text = response.data.botResponse;
        window.speechSynthesis.speak(speech);
      }

    } catch (error) {
   
      this.setState({errorMessage: "Server is facing some difficulty"});
  
     
    }

  };
  render() {
    const alert = this.props.alert;
    // eslint-disable-next-line
    { if(this.state.errorMessage) 
      alert.error( this.state.errorMessage)
     }
    return (



      <Widget
        handleNewUserMessage={this.handleNewUserMessage} title="EchoBot" subtitle="" profileAvatar="/chatbot.png"
      />
 


    );
  }
}




export default withAlert()(EchoBot);