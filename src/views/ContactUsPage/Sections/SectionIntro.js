import React from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

// @material-ui/icons
// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'

import productStyle from 'assets/jss/yeshua-network/views/landingPageSections/productStyle.js'

const useStyles = makeStyles(productStyle)

export default function SectionIntro () {
	const classes = useStyles()
	return (
		<div className={classes.section}>
			<GridContainer
				direction="row"
				justify="center"
				alignItems="center"
			>
				<GridItem xs={12} sm={12} md={12}>
					<h3 className={classes.title}>Thank You For Visiting The Yeshua Network!</h3>
				</GridItem>
				<GridItem xs={12} sm={12} md={8}>
					<h5 className={classes.description}>
						For prayer request, site suggestions, or professional inquiries please use the form below.
						<br/>
						Please sign up for our newsletter below.
					</h5>
				</GridItem>
			</GridContainer>
		</div>
	)
}