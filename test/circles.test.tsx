import { mount, shallow } from 'enzyme'
import React from 'react'

import Circles from '../src/components/circles'

describe('Test <Circles />', () => {
	it('renders without crashing', () => {
		shallow(<Circles />)
	})
	it('viewBox property is defined', () => {
		const CirclesComponent = mount(<Circles />).find('svg')
		expect(CirclesComponent.prop('viewBox')).toBeDefined()
	})
})
