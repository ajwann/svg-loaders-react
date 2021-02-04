import { mount, shallow } from 'enzyme'
import React from 'react'

import Grid from '../src/components/grid'

describe('Test <Grid />', () => {
	it('renders without crashing', () => {
		shallow(<Grid />)
	})
	it('viewBox property is defined', () => {
		const GridComponent = mount(<Grid />).find('svg')
		expect(GridComponent.prop('viewBox')).toBeDefined()
	})
})
