export const getRandomPrice = () => {
	return Math.floor(Math.max(Math.random(), 0.2) * 60) + 0.99
}
