import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

import officeStyle from 'assets/jss/yeshua-network/views/aboutUsSections/officeStyle.js'

// office
import office1 from 'assets/img/examples/office1.jpg'
import office2 from 'assets/img/examples/office2.jpg'
import office3 from 'assets/img/examples/office3.jpg'
import office4 from 'assets/img/examples/office4.jpg'
import office5 from 'assets/img/examples/office5.jpg'

const useStyles = makeStyles(officeStyle)

export default function SectionOffice () {
	const classes = useStyles()
	return (
		<div className={classes.office}>
			<GridContainer className={classNames(classes.textCenter, classes.section)}>
				<GridItem
					md={10}
					sm={10}
					xs={12}
					className={classNames(classes.mrAuto, classes.mlAuto)}
				>
					<h3 className={classes.title}>Some Photos From The Road</h3>
					<h5 className={classes.description}>
						Cast all your anxiety on him because he cares for you. For we are God’s workmanship, created in
						Christ Jesus to do good works, which God prepared in advance for us to do. No temptation has
						seized you except what is common to man.
					</h5>
				</GridItem>
			</GridContainer>
			<GridContainer>
				<GridItem md={4} sm={4}>
					<img
						className={classNames(
							classes.imgRaised,
							classes.imgFluid,
							classes.rounded
						)}
						src={office1}
						alt="office1"
					/>
				</GridItem>
				<GridItem md={4} sm={4}>
					<img
						className={classNames(
							classes.imgRaised,
							classes.imgFluid,
							classes.rounded
						)}
						src={office2}
						alt="office2"
					/>
				</GridItem>
				<GridItem md={4} sm={4}>
					<img
						className={classNames(
							classes.imgRaised,
							classes.imgFluid,
							classes.rounded
						)}
						src={office3}
						alt="office3"
					/>
				</GridItem>
				<GridItem md={6} sm={6}>
					<img
						className={classNames(
							classes.imgRaised,
							classes.imgFluid,
							classes.rounded
						)}
						src={office4}
						alt="office4"
					/>
				</GridItem>
				<GridItem md={6} sm={6}>
					<img
						className={classNames(
							classes.imgRaised,
							classes.imgFluid,
							classes.rounded
						)}
						src={office5}
						alt="office5"
					/>
				</GridItem>
			</GridContainer>
		</div>
	)
}