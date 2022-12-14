import './Navbar.css';
import React from 'react'


function Navbar(props) {
    // console.log("props"+props)

    return (
        <div className='nav'>
            <ul className='nav-bar'>
                <li onClick={() => props.clickOnHeading("Sports")}>Sports</li>
                <li onClick={() => props.clickOnHeading("Politics")}>Politics</li>
                <li onClick={() => props.clickOnHeading("Entertainment")}>Entertainment </li>
                <li onClick={() => props.clickOnHeading("Business")}>Business </li>
                <li onClick={() => props.clickOnHeading("Health")}>Health</li>
            </ul>
        </div>
    )
}

export default Navbar; 