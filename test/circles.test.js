import React from 'react';
import { shallow } from 'enzyme';

import { Circles } from '../src/svg-loader-components/circles';

describe('Test <Circles />', () => {
  it('renders without crashing', () => {
    shallow(<Circles />);
  });
});
