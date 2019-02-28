import React from 'react';
import './Landing.css'
import Login from '../../Login/Login'

const Splash = () => {
    return (
        <div className="splash-container">
        <div className="splash">
            <h1>//Kickit.</h1>
            <Login/>
            <video id="bgvid" style={{ width: '100%' }}
                src="/kickit.mp4"
                loop
                autoPlay
                muted />
        </div>
        </div>
    )
}

export default Splash