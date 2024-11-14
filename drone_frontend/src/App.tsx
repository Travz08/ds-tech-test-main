import { useEffect, useState } from 'react'
import Map from './views/Map'
import './App.css'
import Widget from './components/Widget'

const App = () => {
	const [coordinates, setCoordinates] = useState<[number, number]>([
		-33.946765, 151.1796423,
	])
	const [history, setHistory] = useState<Array<[number, number]>>([
		[-33.946765, 151.1796423],
	])

	const [websocket, setWebsocket] = useState<WebSocket | null>(null)

	useEffect(() => {
		const websocket = new WebSocket('ws://localhost:8080/')
		setWebsocket(websocket)

		websocket.onopen = () => {
			console.log('Web Socket connected.')
		}

		websocket.onmessage = (event) => {
			const data = JSON.parse(event.data)
			console.log(data)
			const { latitude, longitude } = data

			setCoordinates([latitude, longitude])
			setHistory((prev) => [...prev, [latitude, longitude]])
		}

		websocket.onerror = (err) => {
			console.error('Web Socket error:', err)
		}

		return () => {
			websocket.close()
			setWebsocket(null)
		}
	}, [])

	return (
		<>
			<Widget websocket={websocket} />
			<Map coordinates={coordinates} history={history} />
		</>
	)
}

export default App
