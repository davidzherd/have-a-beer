import React from 'react';
import logo from '../assets/logo.png';
import './navbar.css'
const Navbar = ()=>{

    return(
        
        <nav className='navigation'>
            <div className='main-navigation'>
            <img src={logo} alt="Company Logo" className='logo' />
            <ul className='navigation-list'>
                <li>Home</li>
                <li>Find a beer</li>
                <li>Contact Us</li>
            </ul>
            </div>
        </nav>
    );
}
export default Navbar;