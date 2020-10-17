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


import './App.scss';




// The entry point for the portfolio app. 
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path='/' component={ HomePage }></Route>
      </Switch>
    </div>
  );
}


export default App;
