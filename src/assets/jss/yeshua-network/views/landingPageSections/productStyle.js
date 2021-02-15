import { blackColor, grayColor, title, whiteColor } from 'assets/jss/yeshua-network'

const productStyle = {
	avatar: {
		color: blackColor,
	},
	section: {
		padding: '70px 0',
		textAlign: 'center',
	},
	title: {
		...title,
		marginBottom: '1rem',
		marginTop: '30px',
		minHeight: '32px',
		textDecoration: 'none',
	},
	titleColor: {
		...title,
		background: grayColor[18],
		color: whiteColor,
		padding: '15px',
		marginBottom: '1rem',
		marginTop: '0',
		minHeight: '32px',
		textDecoration: 'none',
		borderRadius: '6px',
	},
	description: {
		color: grayColor[8],
		textAlign: 'justify',
	},
}

export default productStyle