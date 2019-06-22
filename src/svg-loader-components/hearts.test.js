import React from 'react';
import { shallow } from 'enzyme';

import { Hearts } from './hearts';

describe('Test <Hearts />', () => {
  it('renders without crashing', () => {
    shallow(<Hearts />);
  });
});
