import React, { useEffect } from 'react'
import {useHistory} from 'react-router-dom';

const Logout = () => {
    const history = useHistory();

    //Promises
    useEffect(() => {
        fetch('/logout', {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        }).then((res) => {
            history.push('/login')
            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        }).catch((err) => {
            console.log(err);
        });
    });

    return (
        <>
            <h1>User Logout Successful</h1>
        </>
    )
}

export default Logout
