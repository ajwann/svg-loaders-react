import { mount, shallow } from 'enzyme'
import React from 'react'

import TailSpin from '../src/components/tail-spin'

describe('Test <TailSpin />', () => {
	it('renders without crashing', () => {
		shallow(<TailSpin />)
	})
	it('viewBox property is defined', () => {
		const TailSpinComponent = mount(<TailSpin />).find('svg')
		expect(TailSpinComponent.prop('viewBox')).toBeDefined()
	})
})
