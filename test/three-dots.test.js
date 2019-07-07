import React from 'react';
import { shallow } from 'enzyme';

import { ThreeDots } from '../src/svg-loader-components/three-dots';

describe('Test <ThreeDots />', () => {
  it('renders without crashing', () => {
    shallow(<ThreeDots />);
  });
});
