import React from 'react';
import Navbar from './Navbar';

function Header(props) {
    return (
        <header>
    <div class="header">
        <h1>Angelo Saverino's Portfolio</h1>

     <Navbar setCurrentPage={props.setCurrentPage}/>
        
    </div>
</header>
    );
}

export default Header;