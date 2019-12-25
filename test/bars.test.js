import React from 'react';
import { shallow, mount } from 'enzyme';

import { Bars } from '../src/svg-loader-components/bars';

describe('Test <Bars />', () => {
  it('renders without crashing', () => {
    shallow(<Bars />);
  });
  it('viewBox property is defined', () => {
    const BarsComponent = mount(<Bars />).find('svg');
    expect(BarsComponent.prop('viewBox')).toBeDefined();
  });
});
