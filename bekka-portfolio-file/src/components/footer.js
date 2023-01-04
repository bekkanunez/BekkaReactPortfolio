import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';

function Footer() {
    return (
        <div className="Footer">
            <a href="https://github.com/bekkanunez">
                <FaGithub size='5rem' />
            </a>
            <a href="https://facebook.com/bekkasfunshop">
                <FaFacebook size='5rem' />
            </a>
        </div>

    );
}


export default Footer