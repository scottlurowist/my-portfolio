////////////////////////////////////////////////////////////////////////////////
//
// PortfolioView.jsx
//
// This component renders the entire view for the portfolio.
//
////////////////////////////////////////////////////////////////////////////////


import React, { Fragment } from 'react';

import Introduction from '../components/Introduction/Introduction';
import AboutMe from './../components/AboutMe/AboutMe';




class PortfolioView extends React.Component {

    constructor() {
        super();

        this.timer = null;

        this.state = {
            displaySite: 'none'
        };
    }


    introductionHasFinishedRendering = () => {
        this.timer = setTimeout(() => {
            this.setState({ displaySite: 'block' });
        }, 1000);
    };


    componentWillUnmount() {
        clearTimeout(this.timer);
    }


    render() {
        return (
            <Fragment>
                <div id='home' className='header__buffer'></div> 
                <Introduction introductionIsFinishedCallback={this.introductionHasFinishedRendering} />
                <div id='skills-buffer' className='header__buffer'></div>  
                <section className='container-skills'
                         style={{display: this.state.displaySite}}>
                    <h4>Skills</h4>                    
                </section>
                <div id='portfolio-buffer' className='header__buffer'></div>  
                <section className='container-portfolio'
                         style={{display: this.state.displaySite}}>
                    <h4>Portfolio</h4>                    
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