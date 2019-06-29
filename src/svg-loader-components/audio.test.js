import React from 'react';
import { shallow } from 'enzyme';

import { Audio } from './audio';

describe('Test <Audio />', () => {
  it('renders without crashing', () => {
    shallow(<Audio />);
  });
});
