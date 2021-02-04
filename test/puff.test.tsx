import { mount, shallow } from 'enzyme'
import React from 'react'

import Puff from '../src/components/puff'

describe('Test <Puff />', () => {
	it('renders without crashing', () => {
		shallow(<Puff />)
	})
	it('viewBox property is defined', () => {
		const PuffComponent = mount(<Puff />).find('svg')
		expect(PuffComponent.prop('viewBox')).toBeDefined()
	})
})
