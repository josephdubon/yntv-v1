import {
	blackColor,
	container,
	hexToRgb,
	main,
	mainRaised,
	mrAuto,
	title,
	whiteColor,
} from 'assets/jss/yeshua-network'

const landingPageStyle = {
	sectionBlank: {
		height: '70px',
		display: 'block',
	},
	pageHeader: {
		position: 'relative',
		height: '100vh',
		maxHeight: '1600px',
		backgroundPosition: '50%',
		backgroundSize: 'cover',
		margin: '0',
		padding: '0',
		border: '0',
		display: 'flex',
		WebkitBoxAlign: 'center',
		MsFlexAlign: 'center',
		alignItems: 'center',
		'&:before': {
			background: 'rgba(' + hexToRgb(blackColor) + ', 0.5)',
		},
		'&:after,&:before': {
			position: 'absolute',
			zIndex: '1',
			width: '100%',
			height: '100%',
			display: 'block',
			left: '0',
			top: '0',
			content: '\'\'',
		},
	},
	container: {
		color: whiteColor,
		...container,
		zIndex: '2',
	},
	title: {
		...title,
		display: 'inline-block',
		position: 'relative',
		marginTop: '30px',
		minHeight: '32px',
		color: whiteColor,
		textDecoration: 'none',
	},
	subtitle: {
		fontSize: '1.313rem',
		maxWidth: '500px',
		margin: '10px auto 0',
	},
	main: {
		...main,
	},
	mainRaised: {
		...mainRaised,
	},
	block: {
		color: 'inherit',
		padding: '0.9375rem',
		fontWeight: '500',
		fontSize: '12px',
		textTransform: 'uppercase',
		borderRadius: '3px',
		textDecoration: 'none',
		position: 'relative',
		display: 'block',
	},
	inlineBlock: {
		display: 'inline-block',
		padding: '0px',
		width: 'auto',
	},
	list: {
		marginBottom: '0',
		padding: '0',
		marginTop: '0',
	},
	left: {
		float: 'left!important',
		display: 'block',
	},
	right: {
		padding: '15px 0',
		margin: '0',
		float: 'right',
	},
	icon: {
		width: '18px',
		height: '18px',
		top: '3px',
		position: 'relative',
	},
	mrAuto,
	textCenter: {
		textAlign: 'center',
	},
	card: {
		marginTop: '60px',
	},
	formControl: {
		margin: '0',
		padding: '8px 0 0 0',
	},
	textRight: {
		textAlign: 'right',
	},
	button: {
		margin: '0 !important',
	},
}

export default landingPageStyle