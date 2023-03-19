import React, { useState, useContext } from 'react'
import loginpic from '../assets/login.svg';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from "../App";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API_URI } from '../constants/apiConfig';

const Login = () => {

    const { state, dispatch } = useContext(UserContext);

    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async (e) => {

        e.preventDefault();

        const res = await fetch(`${API_URI}/signin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        });

        const data = res.json();

        if (res.status === 422 || !data) {
            toast.warn("Please fill all the details", {
                position: "top-center"
            });
        } else if (res.status === 400 || !data) {
            toast.error("Ïnvalid Credentials", {
                position: "top-center"
            });
        }
        else {
            dispatch({ type: "USER", payload: true })
            toast.success("Login Successful", {
                position: "top-center",
                autoClose: 2000
            });
            setTimeout(() => {
                history.push('/');
            }, 2000);
        }

    }

    return (
        <>

            <div className="login">

                <div className="signin-image">
                    <figure>
                        <img src={loginpic} alt="signin-pic" className="logimage" />
                    </figure>
                    <div className="next-link">
                        <div>Create an account ?</div>
                        <Link to="/signup" className="signup-link">Sign Up</Link>
                    </div>
                </div>

                <div className="register-container">
                    <h1>Log In</h1>

                    <form method="POST" className="register-form" id="register-form">
                        <div className="form-group">
                            <label htmlFor="name">
                                <i className="zmdi zmdi-email"></i>
                            </label>
                            <input type="email" name="email" id="email" autoComplete="off"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your Email" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">
                                <i className="zmdi zmdi-lock"></i>
                            </label>
                            <input type="password" name="password" id="password" autoComplete="off"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Your Password" />
                        </div>

                    </form>

                    <div className="button">
                        <button type="submit" name="signin" onClick={loginUser} id="signin" className="btn" value="Log In">Log In</button>
                    </div>

                </div>

            </div>

            <ToastContainer />
        </>
    )
}

export default Login