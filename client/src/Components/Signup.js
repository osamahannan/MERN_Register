import React, { useState } from 'react'
import signpic from '../assets/signup.png';
import { Link, useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { baseUrl } from '../constants/apiConfig';
import { authHeader } from '../constants/header';

const Signup = () => {

    const history = useHistory();

    const [user, setUser] = useState({
        name: "", email: "", phone: "", work: "", password: "", cpassword: ""
    });

    let name, value;
    const handleInputs = (e) => {
        // console.log(e);
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value })
    }

    const PostData = async (e) => {
        e.preventDefault();

        const { name, email, phone, work, password, cpassword } = user;

        const res = await fetch(`${baseUrl}/register`, {
            method: "POST",
            headers: authHeader(),
            credentials: "include",
            body: JSON.stringify({
                name, email, phone, work, password, cpassword
            })
        });

        const data = await res.json();
        if (res.status === 409 || !data) {
            toast.error("Email already exists", {
                position: "top-center"
            });
        }
        else if (res.status === 422 || !data) {
            toast.error("Please fill all the details", {
                position: "top-center"
            });
        } else {
            toast.success("Registration Successful", {
                position: "top-center",
                autoClose: 2000
            });
            setTimeout(() => {
                history.push('/login');
            }, 2000);
        }
    }

    return (
        <>

            <div className="register">
                <div className="register-container">
                    <h1>Sign Up</h1>

                    <form method="POST" className="register-form" id="register-form">
                        <div className="form-group">
                            <label htmlFor="name">
                                <i className="zmdi zmdi-account"></i>
                            </label>
                            <input type="text" name="name" id="name" autoComplete="off"
                                value={user.name}
                                onChange={handleInputs}
                                placeholder="Your Name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">
                                <i className="zmdi zmdi-email"></i>
                            </label>
                            <input type="email" name="email" id="email" autoComplete="off"
                                value={user.email}
                                onChange={handleInputs}
                                placeholder="Your Email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">
                                <i className="zmdi zmdi-phone-in-talk"></i>
                            </label>
                            <input type="number" name="phone" id="phone" autoComplete="off"
                                value={user.phone}
                                onChange={handleInputs}
                                placeholder="Your Phone" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="work">
                                <i className="zmdi zmdi-slideshow"></i>
                            </label>
                            <input type="text" name="work" id="work" autoComplete="off"
                                value={user.work}
                                onChange={handleInputs}
                                placeholder="Your Profesion" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">
                                <i className="zmdi zmdi-lock-outline"></i>
                            </label>
                            <input type="password" name="password" id="password" autoComplete="off"
                                value={user.password}
                                onChange={handleInputs}
                                placeholder="Your Password" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cpassword">
                                <i className="zmdi zmdi-lock"></i>
                            </label>
                            <input type="password" name="cpassword" id="cpassword" autoComplete="off"
                                value={user.cpassword}
                                onChange={handleInputs}
                                placeholder="Confirm your password" required />
                        </div>

                    </form>

                    <div className="button">
                        <button type="submit" name="signup" id="signup" className="btn" value="register"
                            onClick={PostData} >Register</button>
                    </div>

                </div>
                <div className="signup-image">
                    <figure>
                        <img src={signpic} alt="signup-pic" className="signimage" />
                    </figure>
                    <div className="next-link">
                        <div>already a user ?</div>
                        <Link to="/login" className="signup-link">Log In</Link>
                    </div>
                </div>
            </div>

            <ToastContainer />

        </>
    )
}

export default Signup