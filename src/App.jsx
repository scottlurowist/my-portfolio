////////////////////////////////////////////////////////////////////////////////
//
// App.jsx
//
// The entry point for the portfolio app. it is invoked by index.js.
//
////////////////////////////////////////////////////////////////////////////////


import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar-component';
import HomePage from './pages/home/HomePage-component';
import PortfolioPage from './pages/Portfolio/PortfolioPage-component';
import SkillsPage from './pages/Skills/Skills-component';
import AboutContactMe from './pages/AboutContactMe/AboutContactMePage-component';

import './App.scss';





// The entry point for the portfolio app. 
function App() {
  return (
    <Fragment>
      <header>
        <Navbar />
      </header>  
      <div className='navbar-buffer'></div>
      <div>
      <Switch>
        <Route exact path='/' component={ HomePage }></Route>
        <Route path='/portfolio' component={ PortfolioPage }></Route> 
        <Route path='/about-contact' component={ AboutContactMe }></Route>  
        <Route path='/skills' component={ SkillsPage }></Route>                               
      </Switch>
      </div>    

    </Fragment>
  );
}


export default App;
