import React from 'react'
// react component for creating beautiful carousel
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
// @material-ui/icons
// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import Card from 'components/Card/Card.js'

import Countdown from '../../../components/Countdown/Countdown'

import dg2 from 'assets/img/dg2.jpg'
import countdownStyle from '../../../assets/jss/yeshua-network/views/landingPageSections/countdownStyle'

const useStyles = makeStyles(countdownStyle)

export default function SectionCountdown ({ ...rest }) {
	const classes = useStyles()
	return (
		<div className="cd-section" {...rest}>
			<div
				className={classes.sectionDark + ' ' + classes.sectionImage}
				style={{ backgroundImage: `url(${dg2})` }}
			>
				<div className={classes.container}>
					<GridContainer>
						<GridItem
							xs={12}
							sm={12}
							md={12}
							className={
								classes.mlAuto + ' ' + classes.mrAuto + ' ' + classes.textCenter
							}
						>
							<h2 className={classes.title}>Upcoming Events</h2>
						</GridItem>
					</GridContainer>
					<GridContainer
						direction="row"
						justify="center"
						alignItems="center"
					>
						<GridItem xs={12} sm={8} md={8}>
							<Card testimonial className={classes.card1}>
								<Countdown/>
							</Card>
						</GridItem>
					</GridContainer>
				</div>
			</div>
			<br/>
			<br/>
		</div>
	)
}