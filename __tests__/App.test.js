/**
 * @format
 */

import 'react-native';

// Note: import explicitly to use the types shipped with jest.
import {it, expect} from '@jest/globals';

// Test the app can be imported
it('App module imports successfully', () => {
  const App = require('../App');
  expect(App).toBeDefined();
  expect(App.default).toBeDefined();
});


