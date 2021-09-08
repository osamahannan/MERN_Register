import React, {useState} from 'react'
import loginpic from '../assets/login.svg';
import { Link, useHistory } from 'react-router-dom';

const Login = () => {

    const history = useHistory();

    const  [email, setEmail] = useState('');
    const  [password, setPassword] = useState('');

    const loginUser = async (e) => {
        
        e.preventDefault();
        
        const res = await fetch("/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        });

        const data = res.json();

        if(res.status === 400 || !data) {
            window.alert("Invalid Credential");
        }
        else {
            window.alert("Login Successful");
            history.push('/');
        }

    }

    return (
        <div className="login">

            <div className="signin-image">
                <figure>
                    <img src={loginpic} alt="signin-pic" className="logimage" />
                </figure>
                <div className= "next-link">
                    <div>Create an account ?</div>
                    <Link to="/signup" className="signup-link">Sign Up</Link>
                </div>
            </div>

            <div className="register-container">
                <h1>Log In</h1>

                <form method= "POST" className="register-form" id="register-form">
                    <div className="form-group">
                        <label htmlFor="name">
                            <i className="zmdi zmdi-email"></i>
                        </label>
                        <input type="email" name="email" id="email" autoComplete="off"
                        value = {email}
                        onChange= {(e) => setEmail(e.target.value)}
                        placeholder="Your Email" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">
                            <i className="zmdi zmdi-lock"></i>
                        </label>
                        <input type="password" name="password" id="password" autoComplete="off" 
                        value = {password}
                        onChange= {(e) => setPassword(e.target.value)}
                        placeholder="Your Password" />
                    </div>

                </form>

                <div className="button">
                    <button type="submit" name="signin" onClick={loginUser} id="signin" className="btn" value="Log In">Log In</button>
                </div>

            </div>

        </div>
    )
}

export default Login
