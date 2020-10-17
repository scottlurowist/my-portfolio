////////////////////////////////////////////////////////////////////////////////
//
// App.jsx
//
// The entry point for the portfolio app. it is invoked by index.js.
//
////////////////////////////////////////////////////////////////////////////////


import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/header/Header-component';
import HomePage from './pages/home/HomePage-component';
import PortfolioPage from './pages/Portfolio/PortfolioPage-component';
import ContactMePage from './pages/ContactMe/ContactMePage-component';

import './App.scss';




// The entry point for the portfolio app. 
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={ HomePage }></Route>
        <Route path='/portfolio' component={ PortfolioPage }></Route> 
        <Route path='/contact' component={ ContactMePage }></Route>                
      </Switch>
    </div>
  );
}


export default App;
