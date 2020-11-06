////////////////////////////////////////////////////////////////////////////////
//
// PortfolioView.jsx
//
// This component renders the entire view for the portfolio.
//
////////////////////////////////////////////////////////////////////////////////


import React, { Fragment } from 'react';

import Introduction from '../components/Introduction/Introduction';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects/Projects';
import AboutMe from './../components/AboutMe/AboutMe';




class PortfolioView extends React.Component {

    constructor() {
        super();

        this.timer = null;

        this.state = {
            displaySite: 'block'
        };
    }


    introductionHasFinishedRendering = () => {
        this.timer = setTimeout(() => {
            this.setState({ displaySite: 'block' });
        }, 2500);
    };


    componentWillUnmount() {
        clearTimeout(this.timer);
    }


    render() {
        return (
            <Fragment>
                <div id='home' className='header__buffer'></div> 
                {/* <Introduction introductionIsFinishedCallback={this.introductionHasFinishedRendering} /> */}
                <div id='skills-buffer' className='header__buffer'></div>  
                <section className='container-skills-projects'
                         style={{display: this.state.displaySite}}>
                    <Skills />                    
                </section>
                <div id='portfolio-buffer' className='header__buffer'></div>  
                <section className='container-skills-projects'
                         style={{display: this.state.displaySite}}>
                    <Projects />             
                </section>                
                <div id='about-me-buffer' className='header__buffer'></div>
                <section className='container-about-me'
                         style={{display: this.state.displaySite}}>
                    <AboutMe />             
                </section>
            </Fragment>
        );
    }
}



export default PortfolioView;