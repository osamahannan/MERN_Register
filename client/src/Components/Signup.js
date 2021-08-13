import React from 'react'

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
                        <input type="text" name= "name" id= "name" autocomplete="off" placeholder="your name"/> 
                    </div>
                    <div className= "form-group">
                        <label htmlFor="name">
                            <i class="zmdi zmdi-email"></i>   
                        </label>
                        <input type="email" name= "email" id= "email" autocomplete="off" placeholder="your email"/> 
                    </div>
                    <div className= "form-group">
                        <label htmlFor="phone">
                            <i class="zmdi zmdi-phone-in-talk"></i>   
                        </label>
                        <input type="phone" name= "phone" id= "name" autocomplete="off" placeholder="your phone"/> 
                    </div>
                    <div className= "form-group">
                        <label htmlFor="name">
                            <i class="zmdi zmdi-slideshow"></i>   
                        </label>
                        <input type="text" name= "work" id= "name" autocomplete="off" placeholder="your profesion"/> 
                    </div>
                    <div className= "form-group">
                        <label htmlFor="name">
                            <i class="zmdi zmdi-lock"></i>   
                        </label>
                        <input type="password" name= "password" id= "name" autocomplete="off" placeholder="your password"/> 
                    </div>
                    <div className= "form-group">
                        <label htmlFor="cpassword">
                            <i class="zmdi zmdi-lock"></i>   
                        </label>
                        <input type="password" name= "cpassword" id= "name" autocomplete="off" placeholder="confirm your password"/> 
                    </div>
                    
                </form>
            </div>
            <div className= "image">
                    image
            </div>
        </div>
    )
}

export default Signup
