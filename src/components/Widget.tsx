import { useState } from 'react'

const Widget = ({ websocket }: any) => {
	const [selectedPattern, setSelectedPattern] = useState('random')

	const handlePatternChange = (event: any) => {
		const pattern = event.target.value
		setSelectedPattern(pattern)
		websocket.send(JSON.stringify({ type: 'changePattern', pattern }))
		console.log('Web Socket sent:', pattern)
	}

	return (
		<div
			style={{
				position: 'absolute',
				width: 140,
				height: 40,
				top: 10,
				right: 10,
				zIndex: 999,
				backgroundColor: 'white',
				padding: 10,
				boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
				borderRadius: 4,
			}}
		>
			<label htmlFor='pattern-select'>Select Flight Pattern:</label>
			<select
				id='pattern-select'
				value={selectedPattern}
				onChange={handlePatternChange}
			>
				<option value='random'>Random</option>
				<option value='circle'>Circle</option>
				<option value='figure8'>Figure 8</option>
				<option value='zigzag'>Zigzag</option>
			</select>
		</div>
	)
}

export default Widget
