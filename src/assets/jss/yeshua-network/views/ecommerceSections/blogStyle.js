import { cardTitle, coloredShadow, container, grayColor, roseColor, section, } from 'assets/jss/yeshua-network'

const styles = {
	cardTitle,
	container,
	section: {
		...section,
		padding: '70px 0px',
	},
	coloredShadow,
	cardDescription: {
		color: grayColor[0],
	},
	cardCategory: {
		marginTop: '10px',
	},
	textRose: {
		color: roseColor[0] + ' !important',
	},
}

export default styles