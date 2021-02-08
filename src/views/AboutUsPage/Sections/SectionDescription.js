import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

import descriptionStyle from 'assets/jss/yeshua-network/views/aboutUsSections/descriptionStyle.js'

const useStyles = makeStyles(descriptionStyle)

export default function SectionDescription () {
	const classes = useStyles()
	return (
		<div className={classNames(classes.aboutDescription, classes.textCenter)}>
			<GridContainer>
				<GridItem
					md={12}
					sm={12}
					className={classNames(classes.mrAuto, classes.mlAuto)}
				>
					<h5 className={classes.description}>
						You are not what the world says you are, you are what Yeshua says you are. You have been bought
						by His love on the cross and in Him alone you are free.
						<br/>
						<br/>
						Every happening, great and small, is a parable whereby God speaks to us, and the art of life is
						to get the message.
					</h5>
				</GridItem>
			</GridContainer>
		</div>
	)
}