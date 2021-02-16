import {
	blackColor,
	cardTitle,
	container,
	description,
	grayColor,
	hexToRgb,
	mlAuto,
	mrAuto,
	section,
	sectionDark,
	title,
	whiteColor,
} from 'assets/jss/yeshua-network'

const countdownSection = {
	container,
	mlAuto,
	mrAuto,
	title,
	description,
	cardTitle,
	sectionDark: {
		...sectionDark,
		'& $cardDescription': {
			color: 'rgba(' + hexToRgb(whiteColor) + ', 0.76)',
		},
		'& $cardTitle': {
			color: whiteColor,
		},
		backgroundSize: '550% 450%',
		padding: '25px',
	},
	cardDescription: {
		...description,
	},
	cardCategory: {
		...description,
	},
	sectionImage: {
		...sectionDark,
		...section,
		position: 'relative',
		'& $container': {
			zIndex: '2',
			position: 'relative',
		},
		'&:after': {
			position: 'absolute',
			zIndex: '1',
			width: '100%',
			height: '100%',
			display: 'block',
			left: '0',
			top: '0',
			content: '\'\'',
			backgroundColor: 'rgba(' + hexToRgb(blackColor) + ', 0.7)',
			borderRadius: '6px',
		},
		'& $title': {
			color: whiteColor,
		},
		'& $description': {
			color: 'rgba(' + hexToRgb(whiteColor) + ', 0.76)',
		},
	},
	testimonials: {
		padding: '80px 0',
		borderRadius: '6px',
		'& $cardDescription': {
			fontStyle: 'italic',
		},
	},
	textCenter: {
		textAlign: 'center',
	},
	icon: {
		marginTop: '30px',
		'& .fab,& .fas,& .far,& .fal,& .material-icons': {
			fontSize: '40px',
			lineHeight: '40px',
		},
		'& svg': {
			width: '40px',
			height: '40px',
		},
	},
	card1: {
		'& $cardDescription': {
			marginBottom: '50px',
			fontStyle: 'italic',
			color: grayColor[18],
		},
	},
	starIcons: {
		width: '24px',
		height: '24px',
	},
	testimonial2: {
		'& .slick-dots': {
			display: 'none !important',
		},
	},
	card2: {
		maxWidth: '650px',
		margin: '60px auto',
		'& $cardDescription': {
			fontStyle: 'italic',
		},
	},
	errorMsg: {
		color: whiteColor,
		textTransform: 'uppercase',
		fontWeight: 'bold',
		letterSpacing: '1px',
	},
	reactDatetimePicker: {
		paddingLeft: '10px',
	},
	counter: {
		'& $time': {
			marginRight: '30px',
		},
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
		width: '70%',
		margin: '100px auto',
		padding: '10px',
		background: 'linear-gradient(25deg, #95e2ff, #5f79ff, #8ed5ff)',
	},
	'& $timeValue': {
		padding: '1px',
		fontSize: '500%',
		color: '#fff',
		lineHeight: '1',
	},
	'& $timelL': {
		textAlign: 'center',
		fontSize: '20px',
	},
}

export default countdownSection