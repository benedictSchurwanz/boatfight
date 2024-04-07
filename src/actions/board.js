const pick_coordinates = () => {
	const row = Math.random() * 10;
	const col = Math.random() * 10;
	
	return [row, col]
}

export {
	pick_coordinates
}