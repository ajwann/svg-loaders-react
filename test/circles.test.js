import React from 'react';
import { shallow, mount } from 'enzyme';

import { Circles } from '../src/svg-loader-components/circles';

describe('Test <Circles />', () => {
  it('renders without crashing', () => {
    shallow(<Circles />);
  });
  it('viewBox property is defined', () => {
    const CirclesComponent = mount(<Circles />).find('svg');
    expect(CirclesComponent.prop('viewBox')).toBeDefined();
  });
});
