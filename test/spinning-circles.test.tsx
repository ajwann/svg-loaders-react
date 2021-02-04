import { mount, shallow } from 'enzyme'
import React from 'react'

import SpinningCircles from '../src/components/spinning-circles'

describe('Test <SpinningCircles />', () => {
	it('renders without crashing', () => {
		shallow(<SpinningCircles />)
	})
	it('viewBox property is defined', () => {
		const SpinningCirclesComponent = mount(<SpinningCircles />).find('svg')
		expect(SpinningCirclesComponent.prop('viewBox')).toBeDefined()
	})
})
