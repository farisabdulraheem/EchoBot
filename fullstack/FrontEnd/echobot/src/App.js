import React, { useEffect } from 'react';
import axios from "axios";
import { Widget, addResponseMessage } from 'react-chat-widget';


import 'react-chat-widget/lib/styles.css';

function App() {
  async function callEchoBotApi(message) {
    // POST request using fetch with async/await
    const body = { userInput: message }
    const response = await axios.post('http://localhost:3001/echobot', body)
      .catch(error => {
        this.setState({ errorMessage: error.message });
        console.error('There was an error!', error);
      });
    console.log(JSON.stringify(response))
    return response

  }

  useEffect(() => {
    addResponseMessage('Welcome to Echo Chat! I will echo you back anything that you type');
  }, []);

  const handleNewUserMessage = async (newMessage) => {
    try {
      let speech = new SpeechSynthesisUtterance();
      speech.lang = "en";
      console.log(`New message incoming! ${newMessage}`);
      // Now send the message throught the backend API
      var response = await callEchoBotApi(newMessage);
      addResponseMessage(response.data.botResponse);
 
      speech.text=response.data.botResponse;
      window.speechSynthesis.speak(speech);

    } catch (error) {
      console.log(error)
    }

  };

  
  return (
    <div className="App">
      <Widget
        handleNewUserMessage={handleNewUserMessage} title="EchoBot" subtitle="" profileClientAvatar="/chatbot.png" profileAvatar="/chatbot.png" 
      />
    </div>
  );
}

export default App;