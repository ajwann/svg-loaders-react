import React from 'react';
import { shallow } from 'enzyme';

import { Oval } from '../src/svg-loader-components/oval';

describe('Test <Oval />', () => {
  it('renders without crashing', () => {
    shallow(<Oval />);
  });
});
