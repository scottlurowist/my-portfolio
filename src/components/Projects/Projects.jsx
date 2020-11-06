////////////////////////////////////////////////////////////////////////////////
//
// Projects.jsx
//
// This component renders the information about some of my projects.
//
////////////////////////////////////////////////////////////////////////////////


import React, { Fragment } from 'react';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import GitHubImage from '../../images/GitHub-Mark-Light-64px.png';
import RussianFlashcardsImage from '../../images/RussianFlashCard_01.png';



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
                    <p>Some of the #$%^ I did done</p>
                    <div className='container-projects'>
                        <div className='project'>
                            <img src={RussianFlashcardsImage}
                                 height={this.projectImageHeight}
                                 witdh={this.projectImageWidth}
                                 alt='Russian Flashcards' />
                            <div>
                                <p>RUSSIAN FLASHCARDS</p>
                                <p>
                                    An Russian flashcard app built using React.js
                                </p>
                                <div>
                                    <div>
                                        <span>View the source code:</span>
                                        <a href='https://github.com/scottlurowist/russian-flashcards-react' 
                                           target='_blank' rel='noopener noreferrer'>
                                            <img src={GitHubImage} alt='GitHub' height='32' width='32' />
                                        </a>
                                    </div>
                                    <div>
                                        <a href='https://scottlurowist.github.io/russian-flashcards-react/#/' >
                                            Try the app!
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='project'>
                            <img src={RussianFlashcardsImage}
                                 height={this.projectImageHeight}
                                 witdh={this.projectImageWidth}
                                 alt='Russian Flashcards' />
                            <div>
                                <p>RUSSIAN FLASHCARDS</p>
                                <p>
                                    An Russian flashcard app built using React.js
                                </p>
                                <div>
                                    <div>
                                        <span>View the source code:</span>
                                        <a href='https://github.com/scottlurowist/russian-flashcards-react' 
                                           target='_blank' rel='noopener noreferrer'>
                                            <img src={GitHubImage} alt='GitHub' height='32' width='32' />
                                        </a>
                                    </div>
                                    <div>
                                        <a href='https://scottlurowist.github.io/russian-flashcards-react/#/' >
                                            Try the app!
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <div className='project'>
                            <img src={RussianFlashcardsImage}
                                 height={this.projectImageHeight}
                                 witdh={this.projectImageWidth}
                                 alt='Russian Flashcards' />
                            <div>
                                <p>RUSSIAN FLASHCARDS</p>
                                <p>
                                    An Russian flashcard app built using React.js
                                </p>
                                <div>
                                    <div>
                                        <span>View the source code:</span>
                                        <a href='https://github.com/scottlurowist/russian-flashcards-react' 
                                           target='_blank' rel='noopener noreferrer'>
                                            <img src={GitHubImage} alt='GitHub' height='32' width='32' />
                                        </a>
                                    </div>
                                    <div>
                                        <a href='https://scottlurowist.github.io/russian-flashcards-react/#/' >
                                            Try the app!
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>                                                  
                    </div>
                    
                </div>
            </Fragment>
        );
    }
}




export default Projects;
