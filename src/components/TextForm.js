import React, { useState } from 'react'
import './textform.css'

export default function TextForm(props) {
    const [text, setText] = useState('')
    con
    const uperCase = () => {
        let newText = text.toUpperCase()
        setText(newText)
    }
    const lowerCase = () => {
        let newText = text.toLowerCase()
        setText(newText)
    }
    const headChange = (event) => {
        setText(event.target.value)
    }
    const bolds = () =>{
        let a = document.getElementById('textarea')
        a.style.fontWeight = 'bold'
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }
    return (
        <>
            <h1 className='h1'>{props.heading}</h1>
            <div className='textarea'>
                <textarea onChange={headChange} id="textarea" name="" rows="20" cols="100" value={text} placeholder='Enter Text Here'></textarea>
            </div>
            <div className="counts">
                <p className='number-count'>Charchter:- {text.length} Word:-{text.split(" ").length}</p>
            </div>
            <div className="button">
                <button onClick={uperCase}>Convert to Uppercase</button>
                <button onClick={lowerCase}>Convert to Lowercase</button>
                <button onClick={bolds}>Bold</button>
                <button onClick={speak}>Speak</button>
            </div>
        </>
    )
}
