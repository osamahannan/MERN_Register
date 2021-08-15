import React from 'react';
import profilepic from '../assets/profile.jpg';

const About = () => {
    return (
        <div className="about">

            <div className="about-link">
                <img src={profilepic} alt="profile pic" />

                <div className="form-group">
                    <a href="#">Linked In</a>
                    <a href="#">Github</a>
                    <a href="#">Instagram</a>
                    <a href="#">Facebook</a>
                    <a href="#">Twitter</a>
                </div>
            </div>

            <div className="about-details">

            </div>
        </div>
    )
}

export default About