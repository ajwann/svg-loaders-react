import React from 'react';
import { shallow } from 'enzyme';

import { Bars } from '../src/svg-loader-components/bars';

describe('Test <Bars />', () => {
  it('renders without crashing', () => {
    shallow(<Bars />);
  });
});
