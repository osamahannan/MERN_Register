import React, { useEffect, useState } from 'react'
import mobilepic from '../assets/mobile.png';
import emailpic from '../assets/email.png';
import addresspic from '../assets/address.png';

const Contact = () => {

    const [userData, setUserData] = useState({
        name: "", email: "", phone: "", message: ""
    });

    useEffect(() => {
        const callContactPage = async () => {
            try {
                const res = await fetch('/getData', {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                });

                const data = await res.json();
                setUserData({ ...userData, name: data.name, email: data.email, phone: data.phone });

                if (!res.status === 200) {
                    const error = new Error(res.error);
                    throw error;
                }

            } catch (err) {
                console.log(err);
            }
        }
        callContactPage();
    }, []);

    // storing data in states
    const handleInputs = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserData({ ...userData, [name]: value })
    }

    // sending data in backend
    const contactForm = async (e) => {
        e.preventDefault();

        const { name, email, phone, message} = userData;

        const res= await fetch('/contact', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, phone, message
            })
        });

        const data = await res.json();

        if(!data) {
            console.log("message not send")
        } else {
            alert("Message Send");
            setUserData({...userData, message: ""});
        }

    }

    return (
        <div className="contact-main">

            <div className="saved-detail">

                <div className="phone-info">
                    <img src={mobilepic} className="contact-pic" alt="phone pic" />

                    <div className="phone">
                        <span>Phone</span>
                        <span>8181007106</span>
                    </div>
                </div>
                <div className="email-info">
                    <img src={emailpic} className="contact-pic" alt="email pic" />

                    <div className="email">
                        <span>Email</span>
                        <span>contactosama@gmail.com</span>
                    </div>
                </div>
                <div className="address-info">
                    <img src={addresspic} className="contact-pic" alt="address pic" />

                    <div className="address">
                        <span>Address</span>
                        <span>Lko, UP, India</span>
                    </div>
                </div>
            </div>

            <div className="contact-form">

                <div className="contact-heading">
                    <h1>Get in touch</h1>
                </div>
                <form method= "POST">

                    <div className="contact-detail">

                        <div className="contact-name">
                            <input type="text" id="conatct-form-name" className="contact-form-name"
                                name="name"
                                placeholder="Your Name" required={true}
                                onChange={handleInputs}
                                value={userData.name} />
                        </div>

                        <div className="contact-email">
                            <input type="email" id="conatct-form-email" className="contact-form-email"
                                name="email"
                                placeholder="Your Email" required={true}
                                onChange={handleInputs}
                                value={userData.email} />
                        </div>

                        <div className="contact-phone">
                            <input type="number" id="conatct-form-phone" className="contact-form-phone"
                                name="phone"
                                placeholder="Your Phone Number" required={true}
                                onChange={handleInputs}
                                value={userData.phone} />
                        </div>

                    </div>

                    <div className="contact-text">
                        <textarea className="contact-text-field"
                            name="message"
                            onChange={handleInputs}
                            value={userData.message}
                            placeholder="Message" cols="30" rows="10"></textarea>
                    </div>

                    <div className="contact-button">
                        <button type="submit" className="btn" onClick={contactForm} >Send Message</button>
                    </div>
                </form>

            </div>

        </div>
    )
}

export default Contact
