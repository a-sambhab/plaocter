import React from 'react';
import './landing.css'

const Landing = () => {
    return(
        <>
            <div className="landcontainer">
                <img className="landimg" src="https://res.cloudinary.com/dgy8ybeoy/image/upload/v1632570377/samples/plaocter/landimg_wuzzl6.png"/>
                <div className="landcontent">
                    <h1>
                        plaocter
                    </h1>
                    <p>
                        because we care about your plants
                    </p>
                </div>
            </div>
        </>
    )
}

export default Landing;