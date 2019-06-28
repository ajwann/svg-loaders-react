import React from 'react';
import { shallow } from 'enzyme';

import { BallTriangle } from './ball-triangle';

describe('Test <BallTriangle />', () => {
  it('renders without crashing', () => {
    shallow(<BallTriangle />);
  });
});
