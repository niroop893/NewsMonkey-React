import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';

import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import React, { Component } from 'react'

export default class App extends Component {
  pageSize = 10;
  apiKey = process.env.REACT_APP_NEWS_API;

  state = {
    progress: 0
  }
  setProgess = (progress) => {
    this.setState({progress: progress})
  }
  
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar height={3} color='#f11946' progress={this.state.progress} />
          <Routes>
            <Route exact path="/" element={<News setProgess={this.setProgress} apiKey={this.apiKey} key="general" pageSize={5} country="us" category="general"/>} />
            <Route exact path="/business" element={<News setProgess={this.setProgress} apiKey={this.apiKey} key="business" pageSize={20} country="us" category="business"/>} />
            <Route exact path="/entertainment" element={<News setProgess={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={20} country="us" category="entertainment"/>} />
            <Route exact path="/general" element={<News setProgess={this.setProgress} apiKey={this.apiKey} key="general" pageSize={20} country="us" category="general"/>} />
            <Route exact path="/health" element={<News setProgess={this.setProgress} apiKey={this.apiKey} key="health" pageSize={20} country="us" category="health"/>} />
            <Route exact path="/science" element={<News setProgess={this.setProgress} apiKey={this.apiKey} key="science" pageSize={20} country="us" category="science"/>} />
            <Route exact path="/sports" element={<News setProgess={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={20} country="us" category="sports"/>} />
            <Route exact path="/technology" element={<News setProgess={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={20} country="us" category="technology"/>} />       
          </Routes>
        </Router>
      </div>
    )
  }
}
