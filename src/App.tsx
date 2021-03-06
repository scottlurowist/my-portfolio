////////////////////////////////////////////////////////////////////////////////
//
// App.tsx
//
// The entry point for the portfolio app. it is invoked by index.js.
//
////////////////////////////////////////////////////////////////////////////////


import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import PortfolioView from './views/PortfolioView';

import MyImage from './images/Scott_02.jpg';
import GitHubImage from './images/GitHub-Mark-Light-64px.png';
import LinkedInImage from './images/LI-In-Bug.png'
import MediumImage from './images/IdJV4Pog.png';

import './App.scss';




// The entry point for the portfolio app. 
function App() {
  return (
    <Fragment>
      <header>
        <Navbar bg="dark" expand="lg" className='navbar-container'>
          <Navbar.Brand href="#home">
            <div className='brand__container'>
              <div>
                <img id='img--scott' src={MyImage} 
                     alt='Scott Lurowist'
                     className='rounded-circle' />
              </div>
              <div>
                <div>
                  <span id='header-my-name' className='ml-3 text-light'>SCOTT LUROWIST</span>   
                </div>
                <div>
                  <span className='ml-3 text-secondary'>Software Engineer</span>   
                </div>   
              </div>     
            </div>
          </Navbar.Brand>
          <Navbar.Toggle className='navbar-dark' aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className='collapse__container'>
              <div className='collapse__container--top-row'>
                <Nav className="ml-auto">
                  <Nav.Link href="#container-introduction">HOME</Nav.Link>
                  <Nav.Link href="#container-skills">SKILLS</Nav.Link>
                  <Nav.Link href="#container-projects">PORTFOLIO</Nav.Link>
                  <Nav.Link href="#container-about-me">ABOUT</Nav.Link>
                </Nav>
              </div>
              <div className='collapse__container--bottom-row'>
                <a href='mailto:scottlurowist@gmail.com'>
                  <span className='mr-3 pl-2 text-secondary'>
                    scottlurowist@gmail.com
                  </span>
                </a>
                <a href='https://github.com/scottlurowist'
                   target='_blank' rel='noopener noreferrer' >
                  <img src={GitHubImage} alt='GitHub' height='32' width='32'
                      className='mr-3' />
                </a>
                <a href='https://www.linkedin.com/in/slurowistnynet'
                   target='_blank' rel='noopener noreferrer' >
                  <img src={LinkedInImage} alt='LinkedIn' height='32' width='37.8'
                       className='mr-3' />
                </a>
                <a href='https://scottlurowist.medium.com/'
                   target='_blank' rel='noopener noreferrer' >
                  <img src={MediumImage} alt='LinkedIn' height='32' width='32'
                       className='mr-3' />
                </a>
              </div>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </header>
      <Switch>
        <Route path='/' component={ PortfolioView }></Route>
      </Switch>
    </Fragment>
  );
}


export default App;
