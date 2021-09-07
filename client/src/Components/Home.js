import React, { useEffect, useState } from 'react';

const Home = () => {

    const [userName, setUserName] = useState('');
    const show = true;

    useEffect(() => {
        const callHomePage = async () => {
            try {
                const res = await fetch('/getData', {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                });

                const data = await res.json();
                setUserName(data.name);

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
                { show ? 'Happy to see you back!' : 'We Are The MERN Developer'}
            </div>

        </div>
    )
}

export default Home
