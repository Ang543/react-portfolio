import React from 'react';

function Navbar(props) {
    return (
        <nav>
        <ul>
            <li>
                <a href="#about-me">About Me</a>
            </li>
            <li>
                <a href="#projects">Projects</a>
            </li>
            <li>
                <a href="#resume">Resume</a>
            </li>
            <li>
                <a href="#contact-me">Contact Me</a>
            </li>
        </ul>
    </nav>
    );
}

export default Navbar;