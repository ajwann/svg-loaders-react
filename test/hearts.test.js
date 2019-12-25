import React from 'react';
import { shallow, mount } from 'enzyme';

import { Hearts } from '../src/svg-loader-components/hearts';

describe('Test <Hearts />', () => {
  it('renders without crashing', () => {
    shallow(<Hearts />);
  });
  it('viewBox property is defined', () => {
    const HeartsComponent = mount(<Hearts />).find('svg');
    expect(HeartsComponent.prop('viewBox')).toBeDefined();
  });
});
