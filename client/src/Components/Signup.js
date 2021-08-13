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
                            <i class="zmdi zmdi-account"></i>   
                        </label>
                        <input type="text" name= "name" id= "name" autocomplete="off" placeholder="Your Name"/> 
                    </div>
                    <div className= "form-group">
                        <label htmlFor="name">
                            <i class="zmdi zmdi-email"></i>   
                        </label>
                        <input type="email" name= "email" id= "email" autocomplete="off" placeholder="Your Email"/> 
                    </div>
                    <div className= "form-group">
                        <label htmlFor="phone">
                            <i class="zmdi zmdi-phone-in-talk"></i>   
                        </label>
                        <input type="number" name= "phone" id= "phone" autocomplete="off" placeholder="Your Phone"/> 
                    </div>
                    <div className= "form-group">
                        <label htmlFor="work">
                            <i class="zmdi zmdi-slideshow"></i>   
                        </label>
                        <input type="text" name= "work" id= "work" autocomplete="off" placeholder="Your Profesion"/> 
                    </div>
                    <div className= "form-group">
                        <label htmlFor="password">
                            <i class="zmdi zmdi-lock-outline"></i>   
                        </label>
                        <input type="password" name= "password" id= "password" autocomplete="off" placeholder="Your Password"/> 
                    </div>
                    <div className= "form-group">
                        <label htmlFor="cpassword">
                            <i class="zmdi zmdi-lock"></i>   
                        </label>
                        <input type="password" name= "cpassword" id= "cpassword" autocomplete="off" placeholder="Confirm your password"/> 
                    </div>
                    
                </form>

                <div className= "button">
                    <button type="submit" name= "signup" id= "signup" className= "btn" value= "register">Register</button>
                </div>

            </div>
            <div className= "signup-image">
                <figure>
                    <img src={signpic} alt="signup-pic" className= "image"/>
                </figure>
                <Link to= "/login" className= "signup-link">Already a user ?</Link> 
            </div>
        </div>
    )
}

export default Signup
