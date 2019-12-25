import React from 'react';
import { shallow, mount } from 'enzyme';

import { Rings } from '../src/svg-loader-components/rings';

describe('Test <Rings />', () => {
  it('renders without crashing', () => {
    shallow(<Rings />);
  });
  it('viewBox property is defined', () => {
    const RingsComponent = mount(<Rings />).find('svg');
    expect(RingsComponent.prop('viewBox')).toBeDefined();
  });
});
