////////////////////////////////////////////////////////////////////////////////
//
// Navbar-component.jsx
//
// This component renders the Navbar for the portfolio app.
//
////////////////////////////////////////////////////////////////////////////////


import React from 'react';
import { Link } from 'react-router-dom';

// Webpack will do the right thing with these images:
// https://create-react-app.dev/docs/adding-images-fonts-and-files
import GithubImage from './GitHub-Mark-Light-32px.png';
import LinkedInImage from './linkedin.jpeg';
import MediumImage from './medium.jpeg'

import './Navbar-component.scss';



// This function component renders the header for the portfolio app.
//
const Navbar = () => {

    return (
        <nav className='navbar-container'>
            <div>
                <h3 className='brand'>Scott Lurowist</h3>
            </div>
            <div className='follow-me'>
                <div className='local-links'>
                    <Link to='/' className='social-link'>Home</Link>
                    {/* <span>-</span> */}
                    <Link to='/portfolio' className='social-link'>Portfolio</Link>
                    {/* <span>|</span> */}
                    <Link to='/contact' className='social-link'>Contact Me</Link>                
                    {/* <span>|</span> */}
                </div>
                <div className='social-links'>
                    <a href='https://github.com/scottlurowist' className='social-link'>
                        <img src={GithubImage} alt='GitHub'
                            title='Follow me on GitHub'
                            width='32' height='32'/>
                    </a>
                    <a href='https://www.linkedin.com/in/slurowistnynet' className='social-link'>
                        <img src={LinkedInImage} alt='GitHub'
                            title='Follow me on LinkedIn'
                            width='32' height='32'/>
                    </a>
                    <a href='https://medium.com/@scottlurowist' className='social-link'>
                        <img src={MediumImage} alt='GitHub'
                            title='Follow me on Medium'
                            width='40' height='40'/>
                    </a> 
                </div>
               
            </div>
        </nav>
    )
};


export default Navbar;
