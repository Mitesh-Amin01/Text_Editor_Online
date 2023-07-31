import React from 'react'
import "./alert.css"

function Alert(props) {
    const close = () =>{
        let butt = document.getElementById('al')
        butt.style.display = "none"
    }
  return (
    props.alert &&  <div className="al" id='al'>
        <div className="name">
            <h4 style= {{ color : props.alert.type + ";"}}>{props.alert.msg}</h4>
        </div>
        <div className="btn">
            <button onClick={close}>X</button>
        </div>
    </div>
  )
}

export default Alert