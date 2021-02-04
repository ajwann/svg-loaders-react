import { mount, shallow } from 'enzyme'
import React from 'react'

import Audio from '../src/components/audio'

describe('Test <Audio />', () => {
	it('renders without crashing', () => {
		shallow(<Audio />)
	})
	it('viewBox property is defined', () => {
		const AudioComponent = mount(<Audio />).find('svg')
		expect(AudioComponent.prop('viewBox')).toBeDefined()
	})
})
