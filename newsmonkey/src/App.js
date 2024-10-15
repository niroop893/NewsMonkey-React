import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import Contact from "./components/Contact";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";

      setInterval(() => {
        document.title = "TextUtils is Amazing Mode";
      }, 1000);
      setInterval(() => {
        document.title = "Install TextUtils now";
      }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
      setInterval(() => {
        document.title = "TextUtils is Amazing Mode";
      }, 1000);
      setInterval(() => {
        document.title = "Install TextUtils now";
      }, 1500);
    }
  };
  
  return (
    <>
    <Router>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Routes>
    {/* /users --> Component 1
        /users/home --> Component 2 */}
          <Route path="/about" element={<About mode={mode} />} />
          <Route path="/contact" element={<Contact mode={mode} />} />
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode} />} />
          </Routes> 
    
    </div>
      
    </Router>
    </>
  );
}

export default App;
