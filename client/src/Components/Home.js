import React, { useEffect, useState } from 'react';

const Home = () => {

    const [userName, setUserName] = useState('');

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
                userName(data.name);

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

        </div>
    )
}

export default Home
