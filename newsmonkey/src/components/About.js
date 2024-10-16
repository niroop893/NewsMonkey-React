import React from 'react';
import PropTypes from 'prop-types';

export default function About(props) {

    let myStyle = {
        color: props.mode === 'white'?'white':'black',
        backgroundColor: props.mode === 'dark'?'rgb(158 162 164)':'white',
        border: '2px solid',
        borderColor: props.mode === 'dark'?'rgb(36 74 104)':'white'
    }
    // const [myStyle, setmyStyle] = useState(    
    // {
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    // const [btnText, setbtnText] = useState ('Enable Dark Mode')
    // const toggleStyle = () => {
    //     if(myStyle.color === 'black'){
    //         setmyStyle({                
    //                 color: 'white',
    //                 backgroundColor: 'black',
    //                 border: '1px solid white'
                
    //         })
    //         setbtnText('Enable Light Mode')
    //     }
    //     else {
            
    //         setmyStyle({                
    //             color: 'black',
    //             backgroundColor: 'white',
    //             border: '1px solid white'
            
    //     })
    //     setbtnText('Enable Dark Mode')
    //     }
    // }
  return (
    <div className='container' style={myStyle}>
        <h1 className='my-2'>About Us</h1>
        <div>
        <div className="accordion" id="accordionExample" style={myStyle}>
    <div className="accordion-item">
        <h2 className="accordion-header"> 
        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>
        Analyze Your text
        </strong>
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
          Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or 

        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>
        Free to use
        </strong>
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
        TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>
        Browser Compatible
        </strong>
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
        This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
        </div>
        </div>
    </div>
    </div>
        </div>
        </div>);
        {/* <div className='container my-3'></div>
        <button onClick={toggleStyle} type="button" className="btn btn-primary">{btnText}</button>
        </div> */}
   
  
}
