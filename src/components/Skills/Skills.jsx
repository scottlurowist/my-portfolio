////////////////////////////////////////////////////////////////////////////////
//
// SKills.jsx
//
// This component renders the information about some of my skills.
//
////////////////////////////////////////////////////////////////////////////////


import React, { Fragment } from 'react';

import Html5Image from '../../images/HTML5.png';
import Css3Image from '../../images/css3.png';
import SassImage from '../../images/Sass-01.54d4c686.png';
import JavaSriptImage from '../../images/Mmww2.png';
import ReactJsImage from '../../images/react-logo-png-transparent.png';
import CSharpImage from '../../images/th.jpeg';
import NodeJsImage from '../../images/nodejs-logo.png';
import MongoDbImage from '../../images/mongodb-logo.png';



class Skills extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Fragment>
                <div>
                    <h3 className='section-title'>SKILLS</h3>
                    <p>I am experienced with and a continual student of some
                       of the following technologies:
                    </p>
                    <div className='section--skills'>
                        <div>
                            <img src={Html5Image} alt='skill'
                                 className='skill-card' />
                        </div>
                        <div>
                            <img src={Css3Image} alt='skill'
                                 className='skill-card' />
                        </div>
                        <div>
                            <img src={SassImage} alt='skill'
                                 className='skill-card' />
                        </div>
                        <div>
                            <img src={JavaSriptImage} alt='skill'
                                    className='skill-card-javascript' />
                        </div>
                        <div>
                            <img src={ReactJsImage} alt='skill'
                                    className='skill-card' />
                        </div>
                        <div>
                            <img src={CSharpImage} alt='skill'
                                    className='skill-card' />
                        </div>
                    </div>    
                    <div className='section--skills'>    
                        <div>
                            <img src={NodeJsImage} alt='skill'
                                    className='skill-card-nodejs' />
                        </div>
                        <div>
                            <img src={MongoDbImage} alt='skill'
                                 className='skill-card-mongodb' />
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}




export default Skills;
