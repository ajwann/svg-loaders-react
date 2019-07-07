import React from 'react';
import { shallow } from 'enzyme';

import { Audio } from '../src/svg-loader-components/audio';

describe('Test <Audio />', () => {
  it('renders without crashing', () => {
    shallow(<Audio />);
  });
});
