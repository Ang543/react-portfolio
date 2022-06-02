import React from 'react';

function Navbar(props) {
    return (
        <nav>
        <ul>
            <li onClick={()=>{props.setCurrentPage("About")}}>
                <a href="#about-me">About Me</a>
            </li>
            <li onClick={()=>{props.setCurrentPage("Projects")}}>
                <a href="#projects">Projects</a>
            </li>
            <li onClick={()=>{props.setCurrentPage("Resume")}}>
                <a href="#resume">Resume</a>
            </li>
            <li onClick={()=>{props.setCurrentPage("Contact")}}>
                <a href="#contact-me">Contact Me</a>
            </li>
        </ul>
    </nav>
    );
}

export default Navbar;