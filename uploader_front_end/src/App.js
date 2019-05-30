import './App.css';
import {Container, Button} from 'react-bootstrap'
import React, { Component } from 'react'
import Header from './components/Header';
import Content from './components/Content';
import Result from './components/Result';

export class App extends Component {
  render() {
    return (
      <div className="mx-0">
        <Header/>
        <Content/>
        <Result/>
      </div>
    )
  }
}

export default App;
