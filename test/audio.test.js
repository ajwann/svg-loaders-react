import React from 'react';
import { shallow, mount } from 'enzyme';

import { Audio } from '../src/svg-loader-components/audio';

describe('Test <Audio />', () => {
  it('renders without crashing', () => {
    shallow(<Audio />);
  });
  it('viewBox property is defined', () => {
    const AudioComponent = mount(<Audio />).find('svg');
    expect(AudioComponent.prop('viewBox')).toBeDefined();
  });
});
