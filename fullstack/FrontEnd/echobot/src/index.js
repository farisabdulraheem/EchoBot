import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css' ;
import './index.css';
import Home from './HomeComponent/Home';
import AlertTemplate from 'react-alert-template-basic'
import {transitions, positions, Provider as AlertProvider } from 'react-alert'
const options = {
    // you can also just use 'bottom center'
    position: positions.BOTTOM_CENTER,
    timeout: 5000,
    offset: '30px',
    // you can also just use 'scale'
    transition: transitions.SCALE
  }

const Root = () => (
    <AlertProvider template={AlertTemplate} {...options}>
      <Home />
    </AlertProvider>
  )
  

ReactDOM.render(<Root />, document.getElementById('root'));
