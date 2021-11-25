const board = document.querySelector('#board')
const SQUARES_NUMBER = 1600

const colors = ['#5e1919', '#b89d03', '#03b8a0', '#7f03b8', '#ff7300', '#ff004c', '#00ff73', '#075eff', '#f53030', '#d0ff00', '#ff4800']

for (let i = 0; i < SQUARES_NUMBER; i++) {
	const square = document.createElement('div')
	square.classList.add('square')

	square.addEventListener('mouseover', () => setColor(square))
	square.addEventListener('mouseleave', () => removeColor(square))

	board.append(square)
}

function setColor(e) {
	const color = getColor()
	e.style.backgroundColor = color
	e.style.boxShadow = `0 0 2px ${color},0 0 10px ${color}`
}

function removeColor(e) {
	e.style.backgroundColor = '#1d1d1d'
	e.style.boxShadow = `0 0 2px #000`
}

function getColor() {
	const index = Math.floor(Math.random() * colors.length)
	return colors[index]
}