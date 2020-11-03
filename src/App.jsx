////////////////////////////////////////////////////////////////////////////////
//
// App.jsx
//
// The entry point for the portfolio app. it is invoked by index.js.
//
////////////////////////////////////////////////////////////////////////////////


import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import HomePage from './pages/home/HomePage-component';

import MyImage from './images/Scott_02.jpg';
import GitHubImage from './images/GitHub-Mark-Light-64px.png';
import LinkedInImage from './images/LI-In-Bug.png'

import './App.scss';




// The entry point for the portfolio app. 
function App() {
  return (
    <Fragment>
      <header>
        <Navbar bg="dark" expand="lg">
          <Navbar.Brand href="#home">
            <div className='brand__container'>
              <img src={MyImage} alt='Scott Lurowist'
                   className='rounded-circle'
                   height='5%' width='5%' />
              <div>
                <div>
                  <span className='ml-3 text-light'>SCOTT LUROWIST</span>   
                </div>
                <div>
                  <span className='ml-3 text-light'>Fullstack Developer</span>   
                </div>           
              </div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle className='navbar-dark' aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className='collapse__container'>
              <div className='collapse__container--top-row'>
                <Nav className="mr-auto">
                  <Nav.Link href="#home">HOME</Nav.Link>
                  <Nav.Link href="#link">SKILLS</Nav.Link>
                  <Nav.Link href="#link">PORTFOLIO</Nav.Link>
                  <Nav.Link href="#link">ABOOT</Nav.Link>
                </Nav>
              </div>
              <div className='collapse__container--bottom-row'>
                <span className='mr-3 pl-2'>scottlurowist@gmail.com</span>
                <a href='https://github.com/scottlurowist' >
                  <img src={GitHubImage} alt='GitHub' height='32' width='32'
                      className='mr-3' />
                </a>
                <a href='https://www.linkedin.com/in/slurowistnynet' >
                  <img src={LinkedInImage} alt='GitHub' height='32' width='32' />
                </a>
              </div>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </header>  
      <Switch>
        <Route exact path='/' component={ HomePage }></Route>
      </Switch>
    </Fragment>
  );
}


export default App;
