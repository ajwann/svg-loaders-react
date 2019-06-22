import React from 'react';
import { shallow } from 'enzyme';

import { Grid } from './grid';

describe('Test <Grid />', () => {
  it('renders without crashing', () => {
    shallow(<Grid />);
  });
});
