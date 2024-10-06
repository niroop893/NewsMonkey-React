import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";

function App() {
  return (
    <>
      <Navbar title="TextUtils2" aboutText="About Us" Contact="Contact Us" />
      <div className="container my-3">
      <TextForm heading="Enter Text to Analysis"/>
      {/* <About /> */}
      
      </div>
      {/* <Navbar /> */}
      {/* <Navbar title="TextUtils" /> */}
          
      </>
  );
}

export default App;
