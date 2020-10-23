////////////////////////////////////////////////////////////////////////////////
//
// PortfolioPage.jsx
//
// This component renders the portfolio page for the portfolio app.
//
////////////////////////////////////////////////////////////////////////////////


import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import GitHubImage from './GitHub-Mark-Light-32px.png';

import RussianFlashcardsImage from './russian-flashcards.PNG';
import InstashamImage from './Instasham.PNG';

import './PortfolioPage-component.scss'




const PortfolioPage = () => {

    return (
        <div className='portfolio-container'>
            <Carousel>
                <Carousel.Item interval={5000} style={{ 'height': '500px' }}>
                    <div className="w-100 d-flex justify-content-center">
                        <img src={RussianFlashcardsImage}
                             className='portfolio-project-image-russian-flashcards'
                             alt=">Russian Flashcards React"
                        />
                    </div>
                    <Carousel.Caption className='carousel-caption'>
                        <h3>Russian Flashcards</h3>
                        <p>A Russian flashcard application built using React.js.</p>
                        <span>Source code:</span>
                        <a href='https://github.com/scottlurowist/russian-flashcards-react'
                           className='portfolio-github-link'>
                            <img src={GitHubImage} alt='github' />
                        </a>
                        <a href='https://scottlurowist.github.io/russian-flashcards-react/#/'
                           className='try-the-app'
                           alt='Russian Flashcards'>Try The App</a>                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000} style={{ 'height': '500px' }}>
                    <div className="w-100 d-flex justify-content-center">
                        <img src={InstashamImage}
                             className='portfolio-project-image-russian-flashcards'
                             alt=">Russian Flashcards React"
                        />
                    </div>
                    <Carousel.Caption className='carousel-caption'>
                        <h3>Instasham</h3>
                        <p>A modest Instagram clone group project clone built using React.js.</p>
                        <span>Source code:</span>
                        <a href='https://github.com/SEI-Tigers-404BrainNotFound/group-project-front-end'
                           className='portfolio-github-link'>
                            <img src={GitHubImage} alt='github' />
                        </a>
                        <a href='https://sei-tigers-404brainnotfound.github.io/group-project-front-end/#/'
                           className='try-the-app'
                           alt='Instasham'>Try The App</a>  
                    </Carousel.Caption>
                </Carousel.Item>                
            </Carousel>
        </div>

    )

    // <h2>Portfolio Page - this is a temp placeholder</h2>);
};


export default PortfolioPage;
