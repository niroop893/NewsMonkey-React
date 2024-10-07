import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import React, {useState} from "react";

function App() {
  const [mode, setMode] = useState('light')
  const toggleMode = () => {
    if (mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'dark'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'light'
    }
  }
  return (
    <>    
      <Navbar title="TextUtils" aboutText="About Us" Contact="Contact Us" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
      <TextForm heading="Enter Text to Analysis"/>
      {/* <About /> */}
      </div>
          
      </>
  );
}

export default App;
