import React from 'react';
import { shallow, mount } from 'enzyme';

import { BallTriangle } from '../src/svg-loader-components/ball-triangle';

describe('Test <BallTriangle />', () => {
  it('renders without crashing', () => {
    shallow(<BallTriangle />);
  });
  it('viewBox property is defined', () => {
    const BallTriangleComponent = mount(<BallTriangle />).find('svg');
    expect(BallTriangleComponent.prop('viewBox')).toBeDefined();
  });
});
