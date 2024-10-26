import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';

import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import React, { useState } from 'react'

const App = (props) => {
  const pageSize = 10;
  const apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0);
  

    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar height={3} color='#f11946' progress={progress} />
          <Routes>
            <Route exact path="/" element={<News setProgess={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="us" category="general"/>} />
            <Route exact path="/business" element={<News setProgess={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="us" category="business"/>} />
            <Route exact path="/entertainment" element={<News setProgess={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="us" category="entertainment"/>} />
            <Route exact path="/general" element={<News setProgess={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="us" category="general"/>} />
            <Route exact path="/health" element={<News setProgess={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="us" category="health"/>} />
            <Route exact path="/science" element={<News setProgess={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="us" category="science"/>} />
            <Route exact path="/sports" element={<News setProgess={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="us" category="sports"/>} />
            <Route exact path="/technology" element={<News setProgess={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="us" category="technology"/>} />       
          </Routes>
        </Router>
      </div>
    )
  
}

export default App;