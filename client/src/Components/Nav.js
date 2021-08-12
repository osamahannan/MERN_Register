import React from 'react'
import {Link} from 'react-router-dom';
const Nav = () => {
    return (
        <div className= "nav-bar">
            <h2>C A R N A G E</h2>
            <ul>
                <li><Link to= "/">Home</Link></li>
                <li><Link to= "/about">About</Link></li>
                <li><Link to= "/contact">Contact</Link></li>
                <li><Link to= "/login">Log In</Link></li>
                <li><Link to= "/signup">Sign Up</Link></li>
            </ul>
        </div>
    )
}

export default Nav
