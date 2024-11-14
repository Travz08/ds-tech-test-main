import { useMemo } from 'react'
import { MapContainer, Polyline, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import { MarkerLayer, Marker } from 'react-leaflet-marker'
import DroneMarker from '../components/DroneMarker'

const mapStyles = {
	height: 'calc(100vh)',
}

interface MapProps {
	coordinates: [number, number]
	history: Array<[number, number]>
}

const Map = ({ coordinates, history }: MapProps) => {
	const positions = useMemo(() => history, [history])

	return (
		<MapContainer
			center={[-33.946765, 151.1796423]}
			zoom={14}
			scrollWheelZoom={false}
			style={mapStyles}
		>
			<TileLayer
				attribution=''
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
			/>
			<Polyline
				key={1}
				positions={positions}
				pathOptions={{
					color: 'red',
					dashArray: '10, 10',
				}}
			/>
			<MarkerLayer>
				<Marker position={coordinates}>
					<DroneMarker />
				</Marker>
			</MarkerLayer>
		</MapContainer>
	)
}

export default Map
