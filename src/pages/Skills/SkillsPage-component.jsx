////////////////////////////////////////////////////////////////////////////////
//
// SkillsPage-component.jsx
//
// This component renders the skills page for the portfolio app.
//
////////////////////////////////////////////////////////////////////////////////


import React, { Fragment } from 'react';

import html5logo from './800px-HTML5_logo_and_wordmark.svg.png';
import cssLogo from './css3.png';
import sassLogo from './Sass-01.54d4c686.png';
import javaScriptLogo from './Mmww2.png';
import nodeJsLogo from './nodejs-logo.png';
import reactLogo from './react-logo-png-transparent.png';
import pythonLogo from './python-logo@2x.png'
import mongoDBLogo from './mongodb-logo.png';

import './SkillsPage-component.scss';




// This component renders the skills page for the portfolio app.
//
const SkillsPage = () => {

    return (
        <Fragment>
            <h2 className='skills-page-title'>
                Some Of My Skills
            </h2>
            <div className='skills-container'>
                <div>
                    <img src={html5logo} alt='html5'
                         className='skill-card' />                 
                </div>
                <div>
                    <img src={cssLogo} alt='css3'
                         className='skill-card' />                 
                </div>  
                <div>
                    <img src={sassLogo} alt='sass'
                         className='skill-card' />                 
                </div>                                
                <div>
                    <img src={javaScriptLogo} alt='javascript'
                         className='skill-card-javascript' />                
                </div>
                <div>
                    <img src={reactLogo} alt='react'
                         className='skill-card' />              
                </div>                      
                <div>
                    <img src={nodeJsLogo} alt='react'
                         className='skill-card-nodejs' />               
                </div>
                <div>
                    <img src={mongoDBLogo} alt='mongodb'
                         className='skill-card-mongodb' />               
                </div>                   
                <div>
                    <img src={pythonLogo} alt='python'
                         className='skill-card-python' />               
                </div> 
            </div>
        </Fragment>
    );
}


export default SkillsPage;