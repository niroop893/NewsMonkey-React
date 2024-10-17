import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';

import React, { Component } from 'react'

export default class App extends Component {
  c = 'niroop';
  render() {
    return (
      <div>
        Hello {this.c}
        <Navbar />
        <News />
      </div>
    )
  }
}


