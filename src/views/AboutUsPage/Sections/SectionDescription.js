import React from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
// @material-ui/icons
import Code from '@material-ui/icons/Code'
import FormatPaint from '@material-ui/icons/FormatPaint'
import Dashboard from '@material-ui/icons/Dashboard'
import ViewCarousel from '@material-ui/icons/ViewCarousel'
import AccessTime from '@material-ui/icons/AccessTime'
import AttachMoney from '@material-ui/icons/AttachMoney'
// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import InfoArea from 'components/InfoArea/InfoArea.js'

import featuresStyle from 'assets/jss/yeshua-network/views/sectionsSections/featuresStyle.js'
import bg9 from 'assets/img/bg-images/bwmountainTeamWork.jpg'

const useStyles = makeStyles(featuresStyle)

export default function SectionFeatures ({ ...rest }) {
	const classes = useStyles()
	return (
		<div className="cd-section" {...rest}>
			<div className={classes.container}>

			</div>
			{/* Feature 5 START */}
			<div
				className={classes.features5}
				style={{ backgroundImage: `url(${bg9})` }}
			>
				<GridContainer>
					<GridItem
						xs={12}
						sm={8}
						md={8}
						className={
							classes.mlAuto + ' ' + classes.mrAuto + ' ' + classes.textCenter
						}
					>
						<h2 className={classes.title}>Together We Can Change The World</h2>
					</GridItem>
					<div className={classes.container}>
						<GridContainer className={classes.gridContainer}>
							<GridItem xs={12} sm={4} className={classes.gridItem}>
								<InfoArea
									vertical
									className={classes.infoArea5}
									icon={Code}
									title="Words of Encouragement"
									description={
										<p>
											As followers of Yeshua, we receive our greatest blessings when we ourselves
											are the blessing onto another.
										</p>
									}
									iconColor="info"
								/>
							</GridItem>
							<GridItem xs={12} sm={4} className={classes.gridItem}>
								<InfoArea
									vertical
									className={classes.infoArea5}
									icon={FormatPaint}
									title="Grounded In Truth"
									description={
										<p>
											As followers of Yeshua, we receive our greatest blessings when we ourselves
											are the blessing onto another.
										</p>
									}
									iconColor="danger"
								/>
							</GridItem>
							<GridItem xs={12} sm={4} className={classes.gridItem}>
								<InfoArea
									vertical
									className={classes.infoArea5}
									icon={Dashboard}
									title="Bring Heaven To Earth"
									description={
										<p>
											As followers of Yeshua, we receive our greatest blessings when we ourselves
											are the blessing onto another.
										</p>
									}
									iconColor="primary"
								/>
							</GridItem>
						</GridContainer>
						<GridContainer className={classes.gridContainer}>
							<GridItem xs={12} sm={4} className={classes.gridItem}>
								<InfoArea
									vertical
									className={classes.infoArea5}
									icon={ViewCarousel}
									title="Yeshua Gear"
									description={
										<p>
											As followers of Yeshua, we receive our greatest blessings when we ourselves
											are the blessing onto another.
										</p>
									}
								/>
							</GridItem>
							<GridItem xs={12} sm={4} className={classes.gridItem}>
								<InfoArea
									vertical
									className={classes.infoArea5}
									icon={AccessTime}
									title="Be The Light"
									description={
										<p>
											As followers of Yeshua, we receive our greatest blessings when we ourselves
											are the blessing onto another.
										</p>
									}
								/>
							</GridItem>
							<GridItem xs={12} sm={4} className={classes.gridItem}>
								<InfoArea
									vertical
									className={classes.infoArea5}
									icon={AttachMoney}
									title="Audio Files"
									description={
										<p>
											As followers of Yeshua, we receive our greatest blessings when we ourselves
											are the blessing onto another.
										</p>
									}
								/>
							</GridItem>
						</GridContainer>
					</div>
				</GridContainer>
			</div>
		</div>
	)
}