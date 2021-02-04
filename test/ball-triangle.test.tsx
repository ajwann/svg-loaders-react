import { mount, shallow } from 'enzyme'
import React from 'react'

import BallTriangle from '../src/components/ball-triangle'

describe('Test <BallTriangle />', () => {
	it('renders without crashing', () => {
		shallow(<BallTriangle />)
	})
	it('viewBox property is defined', () => {
		const BallTriangleComponent = mount(<BallTriangle />).find('svg')
		expect(BallTriangleComponent.prop('viewBox')).toBeDefined()
	})
})
