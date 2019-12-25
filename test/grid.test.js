import React from 'react';
import { shallow, mount } from 'enzyme';

import { Grid } from '../src/svg-loader-components/grid';

describe('Test <Grid />', () => {
  it('renders without crashing', () => {
    shallow(<Grid />);
  });
  it('viewBox property is defined', () => {
    const GridComponent = mount(<Grid />).find('svg');
    expect(GridComponent.prop('viewBox')).toBeDefined();
  });
});
