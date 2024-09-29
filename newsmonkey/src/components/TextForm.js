import React , { useState } from 'react';
// import props from 'prop-types';


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log('UpperCase was Clicked' + text)
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleOnChange= (event) => {
        // console.log('On Change')
        setText(event.target.value)
    }
    const [text, setText]= useState('Enter Text Here')
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn primary" onClick={handleUpClick}>Convert to UpperCase</button>
    </div>
  )
}