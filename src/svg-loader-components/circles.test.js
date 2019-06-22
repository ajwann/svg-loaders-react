import React from 'react';
import { shallow } from 'enzyme';

import { Circles } from './circles';

describe('Test <Circles />', () => {
  it('renders without crashing', () => {
    shallow(<Circles />);
  });
});
