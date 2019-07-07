import React from 'react';
import { shallow } from 'enzyme';

import { TailSpin } from '../src/svg-loader-components/tail-spin';

describe('Test <TailSpin />', () => {
  it('renders without crashing', () => {
    shallow(<TailSpin />);
  });
});
