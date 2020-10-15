////////////////////////////////////////////////////////////////////////////////
//
// App.spec.js
//
// A set of tests for the App.js component.
//
////////////////////////////////////////////////////////////////////////////////


import React from 'react';
import App from '../App';

import { shallow } from 'enzyme'




describe('foo', () => {

  test('sss', () => {

    // ARRANGE
    const expectedText = 'HELLO WORLD!'

    // ACT
    const actualText = shallow(<App />).text();

    // ASSERT
    expect(actualText).toBe(expectedText);
  })
});
