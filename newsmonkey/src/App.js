import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils2" aboutText="About Us" Contact="Contact Us" />
      <div className="container my-3">
      <TextForm heading="Enter Text to Analysis"/>
      </div>
      {/* <Navbar /> */}
      {/* <Navbar title="TextUtils" /> */}
          
      </>
  );
}

export default App;
