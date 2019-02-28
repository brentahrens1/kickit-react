import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Navigation.css'
import LogOut from '../../LogOut/LogOut'

const Navigation = (props) => {
    console.log(props.currentUser)
    return(
        <div className="nav-container">
            <ul className="nav-flex">
                <Link to='/'><img className="logo-nav" src="https://i.imgur.com/OAZNiat.png"/></Link>
                <li id="list1" className="nav-list"><Link to='/shoes'>Kicks</Link></li>
                <li id="list2" className="nav-list"><Link to='/profile'>Profile</Link></li>
                {
                    props.currentUser.username
                        ? <li id="list3" className="nav-list"><LogOut/></li>
                        : <li id="list3" className="nav-list">Log In</li>
                }
                <li id="list4" className="nav-list"><Link to='/register'>Register</Link></li>
            </ul>
        </div> 
    )
}


export default Navigation