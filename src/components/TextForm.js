import React, { useState } from 'react'
import './textform.css'

export default function TextForm(props) {
    const [text, setText] = useState('')
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
    const bolds = () => {
        let a = document.getElementById('textarea')
        a.style.fontWeight = 'bold'
    }
    const removeExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const copy = () => {
        let copytext = document.getElementById("textarea");
        copytext.select();
        copytext.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copytext.value)
    }
    return (
        <>

            <h1 className='h1' style={props.color}>{props.heading}</h1>
            <div className="colorMode">
                <button onClick={props.blue}  style={props.btn}>Blue</button>
                <button onClick={props.Purpal} style={props.btn}>Purpal</button>
                <button onClick={props.cyan} style={props.btn}>Cyan</button>
            </div>
            <div className='textarea'>
                <textarea onChange={headChange} style={props.textarea} id="textarea" name="" rows="20" cols="100" value={text} placeholder='Enter Text Here'></textarea>
            </div>
            <div className="counts">
                <p className='number-count'>Charchter:- {text.length} Word:-{text.split(" ").length}</p>
            </div>
            <div className="button">
                <button onClick={uperCase} style={props.btn}>Convert to Uppercase</button>
                <button onClick={lowerCase} style={props.btn}>Convert to Lowercase</button>
                <button onClick={bolds} style={props.btn}>Bold</button>
                <button onClick={removeExtraSpace} style={props.btn}>Remove Extra Space</button>
                <button onClick={copy} style={props.btn}>Copy Text</button>
            </div>
        </>
    )
}
