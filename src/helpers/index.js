// number from 0-9
const randTen = () => {
	return Math.floor(Math.random() * 10)
}

export const pickCoordinates = () => {
	return [randTen, randTen]
}
