import React, { Component } from 'react';
import EchoBot from '../EchoBotComponent/EchoBot';

class Home extends Component {


  render() {
    return (

      <div className="container">
        <div className="row ">

          <div className="col-md-8">
            <header className="" >
              <h1 className=" py-5 mt-5 text-white display-4" >Echo Chat Bot</h1>
              <h2 className="display-6 text-info ">Chat with me and I will echo back the same message to you!!</h2>
            </header>
          </div>
          <div className="col-md-4">
            <EchoBot />
          </div>


        </div>

      </div>

    );
  }
}
export default Home;