import React from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

// @material-ui/icons
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver'
import MenuBookIcon from '@material-ui/icons/MenuBook'
import FlareIcon from '@material-ui/icons/Flare'
// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import InfoArea from 'components/InfoArea/InfoArea.js'

import productStyle from 'assets/jss/yeshua-network/views/landingPageSections/productStyle.js'

const useStyles = makeStyles(productStyle)

export default function SectionProduct () {
	const classes = useStyles()
	return (
		<div className={classes.section}>
			<GridContainer justify='center'>
				<GridItem xs={12} sm={12} md={12}>
					<h3 className={classes.title}>Welcome to the Yeshua Network!</h3>
					<h5 className={classes.description}>
						Welcome to the Yeshua Network we create content and media of all types that inspire, educate and
						testify of the One True Living Creator (YHWH). We create content that stands on the written word
						of YHWH, and the teachings of Yeshua Ha’Mashiach and His disciples. Our name is the “Yeshua”
						network because, like all of creation, everything here points towards Him.
						<br/><br/>
						Take a look around, enjoy the videos, blogs, pictures, news updates, links, upcoming and past
						events, and our sponsors’ pages!
						<br/><br/>
						We hope you are blessed by our ministry here at the Yeshua Network and that it inspires you to
						be a blessing in all that you do.
					</h5>
				</GridItem>
			</GridContainer>
			<div>
				<h3 className={classes.title}>Upcoming Videos</h3>
				<GridContainer>
					<GridItem xs={12} sm={4} md={4}>
						<InfoArea
							title='Testimony Tuesday'
							description='Every Tuesday  - Time: (TBD)'
							icon={RecordVoiceOverIcon}
							iconColor='primary'
							vertical
						/>
					</GridItem>
					<GridItem xs={12} sm={4} md={4}>
						<InfoArea
							title='Bible Read-Through'
							description='Every Sunday - 1pm (PST)'
							icon={MenuBookIcon}
							iconColor='primary'
							vertical
						/>
					</GridItem>
					<GridItem xs={12} sm={4} md={4}>
						<InfoArea
							title='#BeTheLight'
							description='Candle Lighting Event - 22nd of Every Month at Sunset (PST)'
							icon={FlareIcon}
							iconColor='primary'
							vertical
						/>
					</GridItem>
				</GridContainer>
			</div>
		</div>
	)
}