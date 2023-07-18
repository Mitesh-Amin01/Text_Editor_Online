import React from 'react'
import PropTypes from 'prop-types'

function Navbar(props) {
    return (
        <nav>
            <div>
                <h1>{props.title}</h1>
            </div>
            <ul>
                <li><a href="/">{props.li1}</a></li>
                <li><a href="/">{props.li2}</a></li>
            </ul>
        </nav>
    )
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    li1 : PropTypes.string.isRequired,
    li2 : PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title : "Enter Title",
    li1 : "Enter Navbar Name",
    li2 : "Enter Navbar Name"
}
export default Navbar