import React from 'react'
import signpic from '../assets/signup.png';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="register">

            <div className="signin-image">
                <figure>
                    <img src={signpic} alt="signin-pic" className="image" />
                </figure>
                <Link to="/signup" className="signin-link">Create an account ?</Link>
            </div>

            <div className="register-container">
                <h1>Sign Up</h1>

                <form className="register-form" id="register-form">
                    <div className="form-group">
                        <label htmlFor="name">
                            <i class="zmdi zmdi-email"></i>
                        </label>
                        <input type="email" name="email" id="email" autocomplete="off" placeholder="Your Email" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">
                            <i class="zmdi zmdi-lock"></i>
                        </label>
                        <input type="password" name="password" id="password" autocomplete="off" placeholder="Your Password" />
                    </div>

                </form>

                <div className="button">
                    <button type="submit" name="signin" id="signin" className="btn" value="register">Register</button>
                </div>

            </div>

        </div>
    )
}

export default Login
