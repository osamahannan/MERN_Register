import React from 'react';
import profilepic from '../assets/profile.jpg';

const About = () => {
    return (
        <div className="about">

            <div className="about-link">
                <img src={profilepic} alt="profile pic" />

                <a href="https://www.linkedin.com/in/osama-hannan-7337921a0/" target="_blank" rel="noreferrer">Linked In</a>
                <a href="https://github.com/osamahannan" target="_blank" rel="noreferrer">Github</a>
                <a href="https://www.instagram.com/osamahannan5/" target="_blank" rel="noreferrer">Instagram</a>
                <a href="https://www.facebook.com/profile.php?id=100010625177535" target="_blank" rel="noreferrer">Facebook</a>
                <a href="https://twitter.com/Osamahannan1" target="_blank" rel="noreferrer">Twitter</a>
            </div>

            <div className="about-details">
                <div className="rank">
                    <div className="rank-container">
                        <h3>Osama Hannan</h3>
                        <h4>Web Developer</h4>
                        <p>RANKING: <span>1/10</span></p>
                    </div>
                    <din className="edit-button">
                        <button type="submit">Edit Profile</button>
                    </din>
                </div>

                <div className="timeline-container">
                    <div className= "timeline-navbar">
                        <ul>
                            <li><a href="#" id= "about">About</a></li>
                            <li><a href="#" id= "timeline">Timeline</a></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About