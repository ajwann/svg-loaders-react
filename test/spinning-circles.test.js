import React from 'react';
import { shallow, mount } from 'enzyme';

import { SpinningCircles } from '../src/svg-loader-components/spinning-circles';

describe('Test <SpinningCircles />', () => {
  it('renders without crashing', () => {
    shallow(<SpinningCircles />);
  });
  it('viewBox property is defined', () => {
    const SpinningCirclesComponent = mount(<SpinningCircles />).find('svg');
    expect(SpinningCirclesComponent.prop('viewBox')).toBeDefined();
  });
});
