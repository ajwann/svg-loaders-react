import React from 'react';
import { shallow } from 'enzyme';

import { TailSpin } from './tail-spin';

describe('Test <TailSpin />', () => {
  it('renders without crashing', () => {
    shallow(<TailSpin />);
  });
});
