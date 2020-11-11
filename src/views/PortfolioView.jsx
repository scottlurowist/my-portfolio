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

import UpArrowImage from '../images/white-up-arrow-png-10-transparent.png';




// This component renders the entire view for the portfolio.
//
class PortfolioView extends React.Component {

    constructor() {
        super();

        this.timer = null;

        // Set to 'none' so that the rest of the site does not appear until
        // the typing text is finished.
        this.state = {
            displaySite: 'none'
        };
    }


    // A callback that is invoked when the typing text is finished. It makes
    // the rest of the site appear.
    //
    introductionHasFinishedRendering = () => {
        this.timer = setTimeout(() => {
            this.setState({ displaySite: 'block' });
        }, 2750);
    };


    // A React.js lifecycle method that is invoked before after a
    // component is unmounted (removed from the DOM). 
    //
    componentWillUnmount() {
        clearTimeout(this.timer);
    }


    // A React.js lifecyle method that is invoked whenever state and/or props
    // change and renders the component.
    //
    render() {
        return (
            <Fragment>
                <section id='container-introduction' className='section--portfolio-introduction'>
                    <Introduction className='portfolio-container'
                                  introductionIsFinishedCallback={this.introductionHasFinishedRendering} />
                </section>
                <section id='container-skills' className='section--portfolio'
                         style={{display: this.state.displaySite}}>
                    <Skills />                    
                </section>
                <section id='container-projects' className='section--portfolio'
                         style={{display: this.state.displaySite}}>
                    <Projects />             
                </section>                
                <section id='container-about-me' className='section--portfolio-about-me'
                         style={{display: this.state.displaySite}}>
                    <AboutMe />             
                </section>
                <footer>
                    <div id='footer__div'>
                        <div>
                            <a href='#container-introduction'>
                                <img src={UpArrowImage} alt='home' height='60' weight='60'
                                    style={{display: this.state.displaySite}} />
                            </a> 
                        </div>
                    </div>
                </footer>
            </Fragment>
        );
    }
}


export default PortfolioView;