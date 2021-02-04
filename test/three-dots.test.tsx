import { mount, shallow } from 'enzyme'
import React from 'react'

import ThreeDots from '../src/components/three-dots'

describe('Test <ThreeDots />', () => {
	it('renders without crashing', () => {
		shallow(<ThreeDots />)
	})
	it('viewBox property is defined', () => {
		const ThreeDotsComponent = mount(<ThreeDots />).find('svg')
		expect(ThreeDotsComponent.prop('viewBox')).toBeDefined()
	})
})
