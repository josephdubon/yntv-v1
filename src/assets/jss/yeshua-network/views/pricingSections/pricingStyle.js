import { cardTitle, hexToRgb, infoColor, mlAuto, mrAuto, whiteColor, } from 'assets/jss/yeshua-network'

const pricingStyle = {
	mrAuto,
	mlAuto,
	cardTitle,
	cardTitleWhite: {
		...cardTitle,
		color: whiteColor + ' !important',
		'& small': {
			color: 'rgba(' + hexToRgb(whiteColor) + ',0.8)!important',
		},
	},
	textCenter: {
		textAlign: 'center',
	},
	pricingSection: {
		padding: '80px 0px',
	},
	textInfo: {
		color: infoColor[0] + ' !important',
	},
}

export default pricingStyle