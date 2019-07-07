import React from 'react';
import { shallow } from 'enzyme';

import { Hearts } from '../src/svg-loader-components/hearts';

describe('Test <Hearts />', () => {
  it('renders without crashing', () => {
    shallow(<Hearts />);
  });
});
