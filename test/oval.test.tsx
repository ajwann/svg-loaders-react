import { mount, shallow } from 'enzyme'
import React from 'react'

import Oval from '../src/components/oval'

describe('Test <Oval />', () => {
	it('renders without crashing', () => {
		shallow(<Oval />)
	})
	it('viewBox property is defined', () => {
		const OvalComponent = mount(<Oval />).find('svg')
		expect(OvalComponent.prop('viewBox')).toBeDefined()
	})
})
