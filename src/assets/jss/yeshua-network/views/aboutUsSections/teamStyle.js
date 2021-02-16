import { cardTitle, description, grayColor, mlAuto, mrAuto, title, } from 'assets/jss/yeshua-network'

const teamStyle = {
	mrAuto,
	mlAuto,
	title,
	description: {
		...description,
		color: grayColor[18],
		marginBottom: '80px',
	},
	cardTitle,
	cardDescription: {
		color: grayColor[4],
	},
	team: {
		padding: '80px 0px',
	},
	textCenter: {
		textAlign: 'center!important',
	},
	img: {
		width: '100%',
		height: 'auto',
	},
	textMuted: {
		color: grayColor[7] + ' !important',
	},
	justifyContent: {
		justifyContent: 'center!important',
	},
}

export default teamStyle