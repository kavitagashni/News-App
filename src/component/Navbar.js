import './Navbar.css';
import React from 'react'
import { NavLink } from 'react-router-dom';


function Navbar(props) {

    return (
        <div className='nav'>
            <ul className='nav-bar'>
                <li onClick={() => props.clickOnHeading("sports")}><NavLink to={"./sports"}>Sports</NavLink></li>
                <li onClick={() => props.clickOnHeading("politics")}><NavLink to={"./politics"}>Politics</NavLink></li>
                <li onClick={() => props.clickOnHeading("entertainment")}><NavLink to={"./entertainment"}>Entertainment</NavLink> </li>
                <li onClick={() => props.clickOnHeading("business")}><NavLink to={"./business"}>Business</NavLink> </li>
                <li onClick={() => props.clickOnHeading("health")}><NavLink to={"./health"}>Health</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar;