import React from 'react';
import { shallow } from 'enzyme';

import { Puff } from './puff';

describe('Test <Puff />', () => {
  it('renders without crashing', () => {
    shallow(<Puff />);
  });
});
