////////////////////////////////////////////////////////////////////////////////
//
// PortfolioView.tsx
//
// This component renders the entire view for the portfolio.
//
////////////////////////////////////////////////////////////////////////////////


import { Fragment, useState, useEffect } from 'react';

import Introduction from '../components/Introduction/Introduction';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects/Projects';
import AboutMe from '../components/AboutMe/AboutMe';

import UpArrowImage from '../images/white-up-arrow-png-10-transparent.png';




// This component renders the entire view for the portfolio.
//
const PortfolioView = (props: any) => {

    enum DisplayType {None = 'none', Block = 'block'};
    const IntroductionFinishedRenderingDelayInMilliseconds = 0;

    // Set to 'none' so that the rest of the site does not appear until
    // the typing text is finished.
    const [displaySite, setDisplaySite] = useState(DisplayType.None);
    const[timerId, setTimer] = useState(0);

    useEffect(() => {

        return () => {
            clearTimeout(timerId);
        };
    });

 
    // A callback that is invoked when the typing text is finished. It makes
    // the rest of the site appear.
    //
    const introductionHasFinishedRendering = () => {
        const timer: number = window.setTimeout(() => {
            setDisplaySite(DisplayType.Block);
        }, IntroductionFinishedRenderingDelayInMilliseconds);

        setTimer(timer);
    };

    return (
        <Fragment>
            <section id='container-introduction' className='section--portfolio-introduction'>
                <Introduction className='portfolio-container'
                              introductionIsFinishedCallback={introductionHasFinishedRendering} />
            </section>
            <section id='container-skills' className='section--portfolio'
                     style={{display: displaySite}}>
                <Skills />                    
            </section>
            <section id='container-projects' className='section--portfolio'
                     style={{display: displaySite}}>
                <Projects />             
            </section>                
            <section id='container-about-me' className='section--portfolio-about-me'
                     style={{display: displaySite}}>
                <AboutMe />             
            </section>
            <footer>
                <div id='footer__div'>
                    <div>
                        <a href='#container-introduction'>
                            <img src={UpArrowImage} alt='home' height='60' width='60'
                                 style={{display: displaySite}} />
                        </a> 
                    </div>
                </div>
            </footer>
        </Fragment>
    );

}


export default PortfolioView;