import React, { useEffect, useState } from 'react';
import profilepic from '../assets/profile.jpg';
import { useHistory } from 'react-router-dom';
import { API_URI } from '../constants/apiConfig';

const About = () => {

    const history = useHistory();

    const [toggleState, setToggleState] = useState(1);
    const [userData, setUserData] = useState({});

    const toggleTab = (index) => {
        setToggleState(index);
    }

    const callAboutPage = async () => {
        try {
            const res = await fetch(`${API_URI}/about`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();
            setUserData(data);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }

        } catch (err) {
            console.log(err);
            history.push('/login');
        }
    }

    useEffect(() => {
        callAboutPage();
    }, []);

    return (
        <div className="about">
            <form method="GET" className="about-form">

                <div className="about-link">
                    <img src={profilepic} alt="profile pic" />
                    <h4>WORK LINKS</h4>

                    <a href="https://www.linkedin.com/in/osama-hannan-7337921a0/" target="_blank" rel="noreferrer">Linked In</a>
                    <a href="https://github.com/osamahannan" target="_blank" rel="noreferrer">Github</a>
                    <a href="https://www.instagram.com/osamahannan5/" target="_blank" rel="noreferrer">Instagram</a>
                    <a href="https://www.facebook.com/profile.php?id=100010625177535" target="_blank" rel="noreferrer">Facebook</a>
                    <a href="https://twitter.com/Osamahannan1" target="_blank" rel="noreferrer">Twitter</a>
                </div>

                <div className="about-details">
                    <div className="rank">
                        <div className="rank-container">
                            <h3>{userData.name}</h3>
                            <h4>{userData.work}</h4>
                            <p>RANKING: <span>1/10</span></p>
                        </div>
                        <div className="edit-button">
                            <button type="submit" disabled>Edit Profile</button>
                        </div>
                    </div>

                    <div className="timeline-container">
                        <nav className="timeline-navbar">
                            <ul>
                                <li><label onClick={() => toggleTab(1)} className={toggleState === 1 ? "default default-active" : "default"}>About</label></li>
                                <li><label onClick={() => toggleTab(2)} className={toggleState === 2 ? "timeline timeline-active" : "timeline"}>Timeline</label></li>
                            </ul>
                        </nav>

                        <div className={toggleState === 1 ? "first-slide active" : "hide"}>
                            <div className="detail-field">
                                <label className="userid">User Id</label>
                                <p className="profession">{userData._id}</p>
                            </div>
                            <div className="detail-field">
                                <label className="userid">Name</label>
                                <p className="profession">{userData.name}</p>
                            </div>
                            <div className="detail-field">
                                <label className="userid">Email</label>
                                <p className="profession">{userData.email}</p>
                            </div>
                            <div className="detail-field">
                                <label className="userid">Phone</label>
                                <p className="profession">{userData.phone}</p>
                            </div>
                            <div className="detail-field">
                                <label className="userid">Profession</label>
                                <p className="profession">{userData.work}</p>
                            </div>
                        </div>

                        <div className={toggleState === 2 ? "second-slide active" : "hide"}>

                            <div className="detail-field">
                                <label className="userid">Experience</label>
                                <p className="profession">Expert</p>
                            </div>
                            <div className="detail-field">
                                <label className="userid">Hourly Rate</label>
                                <p className="profession">10$/hr</p>
                            </div>
                            <div className="detail-field">
                                <label className="userid">Total Projects</label>
                                <p className="profession">16</p>
                            </div>
                            <div className="detail-field">
                                <label className="userid">English Level</label>
                                <p className="profession">Expert</p>
                            </div>
                            <div className="detail-field">
                                <label className="userid">Availability</label>
                                <p className="profession">6 Months</p>
                            </div>
                        </div>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default About