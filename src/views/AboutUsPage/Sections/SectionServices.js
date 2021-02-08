import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
// @material-ui/icons
import Gesture from '@material-ui/icons/Gesture'
// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import InfoArea from 'components/InfoArea/InfoArea.js'

import servicesStyle from 'assets/jss/yeshua-network/views/aboutUsSections/servicesStyle.js'

const useStyles = makeStyles(servicesStyle)

export default function SectionServices () {
	const classes = useStyles()
	return (
		<div className={classes.services}>
			<GridContainer>
				<GridItem
					md={10}
					sm={10}
					className={classNames(
						classes.mlAuto,
						classes.mrAuto,
						classes.textCenter
					)}
				>
					<h2 className={classes.title}>Yeshua is our risen savior!</h2>
					<h5 className={classes.description}>
						Cast all your anxiety on him because he cares for you. For we are God’s workmanship, created in
						Christ Jesus to do good works, which God prepared in advance for us to do.
					</h5>
				</GridItem>
			</GridContainer>
			<GridContainer>
				<GridItem md={6} sm={6} xs={12}>
					<InfoArea
						title="Words of Encouragement"
						description={
							<span>
                <p>
                  Cast all your anxiety on him because he cares for you. For we are God’s workmanship, created in Christ
					Jesus to do good works, which God prepared in advance for us to do.
                </p>
                <a href="#pablo">Find more...</a>
              </span>
						}
						icon={Gesture}
						iconColor="rose"
					/>
				</GridItem>
				<GridItem md={6} sm={6} xs={12}>
					<InfoArea
						title="Grounded In Truth"
						description={
							<span>
                <p>
                  Cast all your anxiety on him because he cares for you. For we are God’s workmanship, created in Christ
					Jesus to do good works, which God prepared in advance for us to do.
                </p>
                <a href="#pablo">Find more...</a>
              </span>
						}
						icon={Gesture}
						iconColor="rose"
					/>
				</GridItem>
				<GridItem md={6} sm={6} xs={12}>
					<InfoArea
						title="Bring Heaven To Earth"
						description={
							<span>
                <p>
                  Cast all your anxiety on him because he cares for you. For we are God’s workmanship, created in Christ
					Jesus to do good works, which God prepared in advance for us to do.
                </p>
                <a href="#pablo">Find more...</a>
              </span>
						}
						icon={Gesture}
						iconColor="rose"
					/>
				</GridItem>
				<GridItem md={6} sm={6} xs={12}>
					<InfoArea
						title="Yeshua Gear"
						description={
							<span>
                 <p>
                  Cast all your anxiety on him because he cares for you. For we are God’s workmanship, created in Christ
					Jesus to do good works, which God prepared in advance for us to do.
                </p>
                <a href="#pablo">Find more...</a>
              </span>
						}
						icon={Gesture}
						iconColor="rose"
					/>
				</GridItem>
				<GridItem md={6} sm={6} xs={12}>
					<InfoArea
						title="Be The Light"
						description={
							<span>
                <p>
                  Cast all your anxiety on him because he cares for you. For we are God’s workmanship, created in Christ
					Jesus to do good works, which God prepared in advance for us to do.
                </p>
                <a href="#pablo">Find more...</a>
              </span>
						}
						icon={Gesture}
						iconColor="rose"
					/>
				</GridItem>
				<GridItem md={6} sm={6} xs={12}>
					<InfoArea
						title="Audio Files"
						description={
							<span>
                <p>
                  Cast all your anxiety on him because he cares for you. For we are God’s workmanship, created in Christ
					Jesus to do good works, which God prepared in advance for us to do.
                </p>
                <a href="#pablo">Find more...</a>
              </span>
						}
						icon={Gesture}
						iconColor="rose"
					/>
				</GridItem>
			</GridContainer>
		</div>
	)
}