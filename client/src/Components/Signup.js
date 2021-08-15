import React from 'react'
import signpic from '../assets/signup.png';
import {Link} from 'react-router-dom';

const Signup = () => {
    return (
        <div className= "register">
            <div className= "register-container">
                <h1>Sign Up</h1>

                <form className= "register-form" id= "register-form">
                    <div className= "form-group">
                        <label htmlFor="name">
                            <i className="zmdi zmdi-account"></i>   
                        </label>
                        <input type="text" name= "name" id= "name" autoComplete="off" placeholder="Your Name"/> 
                    </div>
                    <div className= "form-group">
                        <label htmlFor="name">
                            <i className="zmdi zmdi-email"></i>   
                        </label>
                        <input type="email" name= "email" id= "email" autoComplete="off" placeholder="Your Email"/> 
                    </div>
                    <div className= "form-group">
                        <label htmlFor="phone">
                            <i className="zmdi zmdi-phone-in-talk"></i>   
                        </label>
                        <input type="number" name= "phone" id= "phone" autoComplete="off" placeholder="Your Phone"/> 
                    </div>
                    <div className= "form-group">
                        <label htmlFor="work">
                            <i className="zmdi zmdi-slideshow"></i>   
                        </label>
                        <input type="text" name= "work" id= "work" autoComplete="off" placeholder="Your Profesion"/> 
                    </div>
                    <div className= "form-group">
                        <label htmlFor="password">
                            <i className="zmdi zmdi-lock-outline"></i>   
                        </label>
                        <input type="password" name= "password" id= "password" autoComplete="off" placeholder="Your Password"/> 
                    </div>
                    <div className= "form-group">
                        <label htmlFor="cpassword">
                            <i className="zmdi zmdi-lock"></i>   
                        </label>
                        <input type="password" name= "cpassword" id= "cpassword" autoComplete="off" placeholder="Confirm your password"/> 
                    </div>
                    
                </form>

                <div className= "button">
                    <button type="submit" name= "signup" id= "signup" className= "btn" value= "register">Register</button>
                </div>

            </div>
            <div className= "signup-image">
                <figure>
                    <img src={signpic} alt="signup-pic" className= "signimage"/>
                </figure>
                <Link to= "/login" className= "signup-link">Already a user ?</Link> 
            </div>
        </div>
    )
}

export default Signup
