import { mount, shallow } from 'enzyme'
import React from 'react'

import Bars from '../src/components/bars'

describe('Test <Bars />', () => {
	it('renders without crashing', () => {
		shallow(<Bars />)
	})
	it('viewBox property is defined', () => {
		const BarsComponent = mount(<Bars />).find('svg')
		expect(BarsComponent.prop('viewBox')).toBeDefined()
	})
})
