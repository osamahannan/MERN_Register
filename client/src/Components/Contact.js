import React from 'react'

const Contact = () => {
    return (
        <div className= "contact-main">
            
            <div className="saved-detail">

                <div className="phone-info">
                    <img src="#" alt="phone pic" />

                    <div className="phone">
                        <span>Phone</span>
                        <span>+91 6306020618</span>
                    </div>
                </div>
                <div className="email-info">
                    <img src="#" alt="email pic" />

                    <div className="email">
                        <span>Email</span>
                        <span>osamahannan9@gmail.com</span>
                    </div>
                </div>
                <div className="address-info">
                    <img src="#" alt="address pic" />

                    <div className="address">
                        <span>Address</span>
                        <span>Lko, UP, India</span>
                    </div>
                </div>
            </div>

            <div className="contact-form">
                contact form here !
            </div>
        </div>
    )
}

export default Contact
