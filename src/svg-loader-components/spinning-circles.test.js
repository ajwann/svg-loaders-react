import React from 'react';
import { shallow } from 'enzyme';

import { SpinningCircles } from './spinning-circles';

describe('Test <SpinningCircles />', () => {
  it('renders without crashing', () => {
    shallow(<SpinningCircles />);
  });
});
