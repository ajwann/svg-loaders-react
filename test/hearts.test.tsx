import { mount, shallow } from 'enzyme'
import React from 'react'

import Hearts from '../src/components/hearts'

describe('Test <Hearts />', () => {
	it('renders without crashing', () => {
		shallow(<Hearts />)
	})
	it('viewBox property is defined', () => {
		const HeartsComponent = mount(<Hearts />).find('svg')
		expect(HeartsComponent.prop('viewBox')).toBeDefined()
	})
})
