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
import TicTacToeImage from '../../images/TicTacToe_Ani_01.gif';




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
                    <h4 className='section-title'>PORTFOLIO</h4>
                    <p>Some of my work... </p>
                    <div className='container-projects'>
                        <Project imageUrl={RussianFlashcardsImage}
                                 altText='Russian Flashcards'
                                 projectTitle='RUSSIAN FLASHCARDS'
                                 projectSummary='A Russian flashcards app for vocabulary acquisition.' 
                                 techStack='React.js,React Bootstrap, SCSS, Axios, Express.js, Node.js,
                                                 Mongoose.js, MongoDB'
                                 gitHubUrl='https://github.com/scottlurowist/russian-flashcards-react'
                                 applicationUrl='https://scottlurowist.github.io/russian-flashcards-react/#/' />
                        <Project imageUrl={InstashamImage}
                                 altText='Instasham'
                                 projectTitle='INSTASHAM'
                                 projectSummary='A group project that is a lightweight clone of Instagram.'
                                 techStack='React.js,React Bootstrap, SCSS, Axios, Express.js, Node.js,
                                            Mongoose.js, MongoDB, AWS S3'
                                 gitHubUrl='https://github.com/scottlurowist/group-project-front-end'
                                 applicationUrl='https://sei-tigers-404brainnotfound.github.io/group-project-front-end/#/' /> 
                        <Project imageUrl={TicTacToeImage}
                                 altText='Tic-Tac-Toe'
                                 projectTitle='TIC-TAC-TOE'
                                 projectSummary='Single player Tic-tac-toe. The user plays both X and O.'
                                 techStack='Vanilla JavaScript, HTML, SCSS, jQuery'
                                 gitHubUrl='https://github.com/scottlurowist/tic-tac-toe'
                                 applicationUrl='https://scottlurowist.github.io/tic-tac-toe/' />                                          
                    </div>
                </div>
            </Fragment>
        );
    }
}




export default Projects;