import {
	blackColor,
	cardTitle,
	container,
	description,
	hexToRgb,
	mlAuto,
	section,
	sectionDark,
	title,
	whiteColor,
} from 'assets/jss/yeshua-network'

import customCheckboxRadioSwitch from 'assets/jss/yeshua-network/customCheckboxRadioSwitchStyle.js'

const contactsSection = {
	...customCheckboxRadioSwitch,
	container,
	mlAuto,
	title,
	description,
	cardTitle,
	section: {
		...sectionDark,
		...section,
		borderRadius: '6px',
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
			backgroundColor: 'rgba(' + hexToRgb(blackColor) + ', 0.8)',
			borderRadius: '6px',
		},
		'& $title': {
			color: whiteColor,
		},
		'& $description': {
			color: 'rgba(' + hexToRgb(whiteColor) + ', 0.76)',
		},
		'& $infoArea': {},
	},
	contacts: {
		padding: '80px 40px',
	},
	infoArea: {
		padding: '0',
		margin: '0',
		'& svg,& .fab,& .fas,& .far,& .fal,& .material-icons': {
			color: whiteColor,
		},
		'& h4': {
			marginTop: '20px',
			color: whiteColor,
		},
	},
	card1: {
		marginTop: '30px',
		'& $cardTitle': {
			marginBottom: '0.75rem !important',
			color: whiteColor,
		},
	},
	textCenter: {
		textAlign: 'center',
	},
	justifyContentBetween: {
		WebkitBoxPack: 'justify !important',
		MsFlexPack: 'justify !important',
		justifyContent: 'space-between !important',
	},
	pullRight: {
		float: 'right',
	},
	card2: {
		'@media (min-width: 991px)': {
			margin: '80px 0 80px 150px',
		},
		maxWidth: '560px',
		float: 'left',
		'& $cardTitle': {
			marginBottom: '0.75rem !important',
			color: whiteColor,
		},
	},
	map: {
		overflow: 'hidden',
		width: '100%',
		height: '800px',
		position: 'absolute',
	},
	contacts2: {
		padding: '0',
		height: '800px',
	},
	infoArea2: {
		padding: '0',
		margin: '0',
		'& h4': {
			fontSize: '1.0625rem',
			lineHeight: '1.55em',
		},
	},
}

export default contactsSection