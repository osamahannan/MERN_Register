import React, { useContext } from 'react'
import { UserContext } from "../App";
import { Link } from 'react-router-dom';
import logopic from '../assets/logopic.png';

const Nav = () => {

    const { state, dispatch } = useContext(UserContext);

    const RenderMenu = () => {
        if (state) {
            return (
                <>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">AboutMe</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/logout">Log Out</Link></li>
                </>
            )
        } else {
            return (
                <>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">AboutMe</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/login">Log In</Link></li>
                    <li><Link to="/signup" id="signup-button">Sign Up</Link></li>
                </>
            )
        }
    }

    return (
        <div className="nav-bar">
            <div className="logo">
                <img src={logopic} alt="logopic" />
                <h2><span className="car">C A R </span> <span className="nage">N A G E </span></h2>
            </div>
            <ul>
                <RenderMenu />
            </ul>
        </div>
    )
}

export default Nav
