////////////////////////////////////////////////////////////////////////////////
//
// Projects.jsx
//
// This component renders the information about some of my projects.
//
////////////////////////////////////////////////////////////////////////////////


import React, { Fragment } from 'react';

import Project from '../Project/Project';

import RussianFlashcardsImage from '../../images/RussianFlashCard_01.png';
import InstashamImage from '../../images/Instasham_01.png';




class Projects extends React.Component {

    constructor(props) {
        super(props);

        this.projectImageHeight = '100';
        this.projectImageWidth = '100';
    }


    render() {
        return(
            <Fragment>
                <div>
                    <h4>PORTFOLIO</h4>
                    <p>Some of my work... </p>
                    <div className='container-projects'>
                        <Project imageUrl={RussianFlashcardsImage}
                                 altText='Russian Flashcards'
                                 projectTitle='RUSSIAN FLASHCARDS'
                                 projectSummary='A Russian flashcards app for vocabulary acquisition.'
                                 gitHubUrl='https://github.com/scottlurowist/russian-flashcards-react'
                                 applicationUrl='https://scottlurowist.github.io/russian-flashcards-react/#/' />
                        <Project imageUrl={InstashamImage}
                                 altText='Instasham'
                                 projectTitle='INSTASHAM'
                                 projectSummary='A group project that is a lightweight clone of Instagram.'
                                 gitHubUrl='https://github.com/scottlurowist/group-project-front-end'
                                 applicationUrl='https://sei-tigers-404brainnotfound.github.io/group-project-front-end/#/' />                                 
                    </div>
                </div>
            </Fragment>
        );
    }
}




export default Projects;