import React from 'react'
import loginpic from '../assets/login.svg';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="register">

            <div className="signin-image">
                <figure>
                    <img src={loginpic} alt="signin-pic" className="logimage" />
                </figure>
                <Link to="/signup" className="signin-link">Create an account ?</Link>
            </div>

            <div className="register-container">
                <h1>Log In</h1>

                <form className="register-form" id="register-form">
                    <div className="form-group">
                        <label htmlFor="name">
                            <i className="zmdi zmdi-email"></i>
                        </label>
                        <input type="email" name="email" id="email" autoComplete="off" placeholder="Your Email" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">
                            <i className="zmdi zmdi-lock"></i>
                        </label>
                        <input type="password" name="password" id="password" autoComplete="off" placeholder="Your Password" />
                    </div>

                </form>

                <div className="button">
                    <button type="submit" name="signin" id="signin" className="btn" value="register">Log In</button>
                </div>

            </div>

        </div>
    )
}

export default Login
