import React from 'react';
import background from '../../src/assets/BFS-Logo.png';

function Header(prop) {
    return (
        <header style={{ backgroundImage: `url("${background}")` }}>
            {prop.children}
        </header>
    )
    }    

export default Header;

