import { render } from '@testing-library/react'
// import App from './App'
import Map from './views/Map'

test('should render map container', () => {
	const { container } = render(
		<Map
			coordinates={[-33.946765, 151.1796423]}
			history={[[-33.946765, 151.1796423]]}
		/>
	)
	expect(container.querySelector('.leaflet-container')).toBeDefined()
})
