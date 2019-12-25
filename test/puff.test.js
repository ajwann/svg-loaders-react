import React from 'react';
import { shallow, mount } from 'enzyme';

import { Puff } from '../src/svg-loader-components/puff';

describe('Test <Puff />', () => {
  it('renders without crashing', () => {
    shallow(<Puff />);
  });
  it('viewBox property is defined', () => {
    const PuffComponent = mount(<Puff />).find('svg');
    expect(PuffComponent.prop('viewBox')).toBeDefined();
  });
});
