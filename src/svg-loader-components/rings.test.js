import React from 'react';
import { shallow } from 'enzyme';

import { Rings } from './rings';

describe('Test <Rings />', () => {
  it('renders without crashing', () => {
    shallow(<Rings />);
  });
});
