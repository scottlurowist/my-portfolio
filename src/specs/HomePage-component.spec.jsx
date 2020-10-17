////////////////////////////////////////////////////////////////////////////////
//
// home-page-component.spec.js
//
// A set of tests for the HomePage component.
//
////////////////////////////////////////////////////////////////////////////////


import React from 'react';
import HomePage from '../pages/home/HomePage-component';

import { shallow } from 'enzyme'




describe('The HomePage component', () => {

  test('must render without crashing or throwing an exeption.', () => {

      // ARRANGE & ACT & ASSERT
      shallow(<HomePage />);
  })
});
