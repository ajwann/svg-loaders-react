import React from 'react';
import { shallow, mount } from 'enzyme';

import { TailSpin } from '../src/svg-loader-components/tail-spin';

describe('Test <TailSpin />', () => {
  it('renders without crashing', () => {
    shallow(<TailSpin />);
  });
  it('viewBox property is defined', () => {
    const TailSpinComponent = mount(<TailSpin />).find('svg');
    expect(TailSpinComponent.prop('viewBox')).toBeDefined();
  });
});
