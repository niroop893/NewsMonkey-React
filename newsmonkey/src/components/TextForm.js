import React , { useState } from 'react';
// import props from 'prop-types';


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log('UpperCase was Clicked' + text)
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = () => {
        // console.log('UpperCase was Clicked' + text)
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleOnChange= (event) => {
        // console.log('On Change')
        setText(event.target.value)
    }
    const handleClearClick= (event) => {
        // console.log('On Change')
        let newText = " ";
        setText(newText)
    }
    const handleClearExtraSpaces= (event) => {
        // console.log('On Change')
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const handleCopy= (event) => {
        // console.log('On Change')
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value)
    }
    const [text, setText]= useState('')
  return (
    <>
    <div className='container my-3'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleClearExtraSpaces}>Clear Extra Spaces</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container my-3">
        <h2>Your text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.0008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  );
}
