import React from 'react';
import profilepic from '../assets/profile.jpg';

const About = () => {
    return (
        <div className="about">

            <div className="about-link">
                <img src={profilepic} alt="profile pic" />

                <div className="form-group">
                    <a href="/#" target ="_blank" rel="noreferrer">Linked In</a>
                    <a href="/#" target ="_blank" rel="noreferrer">Github</a>
                    <a href="/#" target ="_blank" rel="noreferrer">Instagram</a>
                    <a href="/#" target ="_blank" rel="noreferrer">Facebook</a>
                    <a href="/  #" target ="_blank" rel="noreferrer">Twitter</a>
                </div>
            </div>

            <div className="about-details">

            </div>
        </div>
    )
}

export default About