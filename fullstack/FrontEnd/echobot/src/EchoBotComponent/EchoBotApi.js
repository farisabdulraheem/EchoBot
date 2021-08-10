import axios from "axios";
import { config } from "../config/config";

export async function callEchoBotApi(message) {

  // POST request using fetch with async/await
  const body = { userInput: message }
  const response = await axios.post(config().apiUrl + '/echobot', body)
    .catch(error => {
     
      console.error('There was an error!', error);
      
    });
  return response

}