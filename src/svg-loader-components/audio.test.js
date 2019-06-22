import React from 'react';
import { shallow } from 'enzyme';

import Audio from './Audio';

describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
    shallow(Audio);
  });
});
