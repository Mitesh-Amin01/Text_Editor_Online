import React from 'react'
import PropTypes from 'prop-types'

function Navbar(props) {
    return (
        <nav style={props.mode}>
            <div>
                <h1>{props.title}</h1>
            </div>
            <ul>
                <li><a href="/" style={props.mode}>{props.li1}</a></li>
                <li><a href="/" style={props.mode}>{props.li2}</a></li>
            </ul>
            <label className="switch">
                <input type="checkbox" onClick={props.toggleMode}/>
                    <span className="slider round"></span>
            </label>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    li1: PropTypes.string.isRequired,
    li2: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "Enter Title",
    li1: "Enter Navbar Name",
    li2: "Enter Navbar Name"
}
export default Navbar