import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Navigation.css'


const Navigation = () => {
    return(
        <div className="nav-container">
            <ul className="nav-flex">
                <img className="logo-nav" src="https://i.imgur.com/OAZNiat.png"/>
                <li id="list1" className="nav-list"><Link to='/shoes'>Kicks</Link></li>
                <li id="list2" className="nav-list"><Link to='/profile'>Profile</Link></li>
                <li id="list3" className="nav-list">Log In</li>
                <li id="list4" className="nav-list">Log out</li>
            </ul>
        </div>
    )
}


export default Navigation