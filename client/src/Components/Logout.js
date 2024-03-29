import React, { useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import { UserContext } from "../App";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { baseUrl } from '../constants/apiConfig';
import { authHeader } from '../constants/header';

const Logout = () => {

    const { state, dispatch } = useContext(UserContext);

    const history = useHistory();

    //Promises
    useEffect(() => {
        fetch(`${baseUrl}/logout`, {
            method: "GET",
            headers: authHeader(),
            credentials: "include"
        }).then((res) => {
            dispatch({ type: "USER", payload: false })
            toast.success("You have successfully logged out!", {
                position: "top-center",
                autoClose: 2000
            });
            setTimeout(() => {
                history.push('/login');
            }, 2000);

            if (!res.status === 200) {
                toast.error("Error while logging out", {
                    position: "top-center",
                });
                const error = new Error(res.error);
                throw error;
            }
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    return (
        <>
            <ToastContainer />
        </>
    )
}

export default Logout