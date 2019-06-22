import React from 'react';
import { shallow } from 'enzyme';

import { Bars } from './bars';

describe('Test <Bars />', () => {
  it('renders without crashing', () => {
    shallow(<Bars />);
  });
});
