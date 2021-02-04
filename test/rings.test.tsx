import { mount, shallow } from 'enzyme'
import React from 'react'

import Rings from '../src/components/rings'

describe('Test <Rings />', () => {
	it('renders without crashing', () => {
		shallow(<Rings />)
	})
	it('viewBox property is defined', () => {
		const RingsComponent = mount(<Rings />).find('svg')
		expect(RingsComponent.prop('viewBox')).toBeDefined()
	})
})
