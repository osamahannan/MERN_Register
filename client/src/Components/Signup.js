import React, {useState} from 'react'
import signpic from '../assets/signup.png';
import { Link, useHistory} from 'react-router-dom';

const Signup = () => {

    const history = useHistory();

    const [user, setUser] = useState({
        name:"", email:"", phone:"", work:"", password:"", cpassword:""
    });
    
    let name, value;
    const handleInputs = (e) => {
        // console.log(e);
        name = e.target.name;
        value = e.target.value;
        setUser({...user, [name]: value})
    }

    const PostData = async (e) => {
        e.preventDefault();

        const { name, email, phone, work, password, cpassword } = user;

        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, phone, work, password, cpassword
            })
        });

        const data = await res.json();
        if(res.status === 409 || !data) {
            window.alert("Email Already Exists");
            console.log("Invalid Registration");
        } else {
            window.alert("Registration Successful");
            console.log("Registration Successful");
            history.push('/login');
        }
    }

    return (
        <div className="register">
            <div className="register-container">
                <h1>Sign Up</h1>

                <form method= "POST" className="register-form" id="register-form">
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
                            placeholder="Confirm your password" />
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
                <div className= "next-link">
                    <div>already a user ?</div>
                    <Link to="/login" className="signup-link">Log In</Link>
                </div>
            </div>
        </div>
    )
}

export default Signup
