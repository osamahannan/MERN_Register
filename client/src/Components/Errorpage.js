import React from 'react'
import {Link} from 'react-router-dom';

const Errorpage = () => {
    return (
        <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h1>404</h1>
                </div>
                <div className="error-info">
                    <h2>WE ARE SORRY, PAGE NOT FOUND</h2>
                    <p>
                        The page you are looking for might have beeb removed or had its name changed or its temporarily unavailable.
                    </p>
                    <Link to= "/" className= "back-button">BACK TO HOME</Link>
                </div>
                
            </div>
        </div>
    )
}

export default Errorpage
