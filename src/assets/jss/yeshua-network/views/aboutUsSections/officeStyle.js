import { description, mlAuto, mrAuto, title } from 'assets/jss/yeshua-network'
import imagesStyles from 'assets/jss/yeshua-network/imagesStyles.js'

const imgRaised = imagesStyles.imgRaised
const rounded = imagesStyles.imgRounded
const imgFluid = imagesStyles.imgFluid

const officeStyle = {
	section: {
		padding: '40px',
	},
	title,
	description,
	mrAuto,
	mlAuto,
	textCenter: {
		textAlign: 'center!important',
	},
	office: {
		'& img': {
			margin: '20px 0px',
		},
	},
	imgRaised,
	rounded,
	imgFluid,
}

export default officeStyle