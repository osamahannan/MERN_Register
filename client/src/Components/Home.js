import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from "../App";
import { API_URI } from '../constants/apiConfig';
// import { authHeader } from '../constants/header';

const Home = () => {

    const [userName, setUserName] = useState('');
    const [show, setShow] = useState(false);
    const { state, dispatch } = useContext(UserContext);

    useEffect(() => {
        const callHomePage = async () => {
            try {
                const res = await fetch(`${API_URI}/getData`, {
                    method: "GET"
                    // headers: authHeader()
                });

                const data = await res.json();
                setUserName(data.name);
                setShow(true);
                dispatch({ type: "USER", payload: true })

            } catch (err) {
                console.log(err);
            }
        }
        callHomePage();
    }, []);

    return (
        <div className="container">

            <div className="welcome">
                WELCOME
            </div>
            <div className="developer">
                {userName}
            </div>
            <div className="greetings">
                {show ? 'Happy to see you back!' : 'We Are The MERN Developer'}
            </div>

        </div>
    )
}

export default Home