import React from 'react';
import { shallow, mount } from 'enzyme';

import { Oval } from '../src/svg-loader-components/oval';

describe('Test <Oval />', () => {
  it('renders without crashing', () => {
    shallow(<Oval />);
  });
  it('viewBox property is defined', () => {
    const OvalComponent = mount(<Oval />).find('svg');
    expect(OvalComponent.prop('viewBox')).toBeDefined();
  });
});
