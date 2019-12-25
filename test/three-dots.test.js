import React from 'react';
import { shallow, mount } from 'enzyme';

import { ThreeDots } from '../src/svg-loader-components/three-dots';

describe('Test <ThreeDots />', () => {
  it('renders without crashing', () => {
    shallow(<ThreeDots />);
  });
  it('viewBox property is defined', () => {
    const ThreeDotsComponent = mount(<ThreeDots />).find('svg');
    expect(ThreeDotsComponent.prop('viewBox')).toBeDefined();
  });
});
