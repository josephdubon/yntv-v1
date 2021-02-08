import React from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
// @material-ui/icons
// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import Card from 'components/Card/Card.js'
import CardBody from 'components/Card/CardBody.js'
import CardHeader from 'components/Card/CardHeader.js'
import Info from 'components/Typography/Info.js'
import Success from 'components/Typography/Success.js'
import Danger from 'components/Typography/Danger.js'

import bg5 from 'assets/img/bg5.jpg'
import blog5 from 'assets/img/examples/blog5.jpg'
import blog6 from 'assets/img/examples/blog6.jpg'

import sectionInterestedStyle from 'assets/jss/yeshua-network/views/blogPostsSections/sectionInterestedStyle.js'

const useStyles = makeStyles(sectionInterestedStyle)

export default function SectionInterested () {
	const classes = useStyles()
	return (
		<div className={classes.section}>
			<h3 className={classes.title + ' ' + classes.textCenter}>
				You may also be interested in
			</h3>
			<br/>
			<GridContainer>
				<GridItem xs={12} sm={4} md={4} lg={4} xl={4}>
					<Card plain blog>
						<CardHeader image plain>
							<a href="#pablo">
								<img src={bg5} alt="..."/>
							</a>
							<div
								className={classes.coloredShadow}
								style={{
									backgroundImage: 'url(' + bg5 + ')',
									opacity: '1'
								}}
							/>
						</CardHeader>
						<CardBody plain>
							<Info>
								<h6>ENTERPRISE</h6>
							</Info>
							<h4 className={classes.cardTitle}>
								<a href="#pablo">
									He Puts His Peace in Our Hearts
								</a>
							</h4>
							<p className={classes.description}>
								Don't be scared of the truth because we need to restart the human foundation in truth
								And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...
								<a href="#pablo"> Read More </a>
							</p>
						</CardBody>
					</Card>
				</GridItem>
				<GridItem xs={12} sm={4} md={4} lg={4} xl={4}>
					<Card plain blog>
						<CardHeader plain image>
							<a href="#pablo">
								<img src={blog5} alt="..."/>
							</a>
							<div
								className={classes.coloredShadow}
								style={{
									backgroundImage: 'url(' + blog5 + ')',
									opacity: '1'
								}}
							/>
						</CardHeader>
						<CardBody plain>
							<Success>
								<h6>STARTUPS</h6>
							</Success>
							<h4 className={classes.cardTitle}>
								<a href="#pablo">
									God Is Always Listening
								</a>
							</h4>
							<p className={classes.description}>
								Don't be scared of the truth because we need to restart the human foundation in truth
								And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...
								<a href="#pablo"> Read More </a>
							</p>
						</CardBody>
					</Card>
				</GridItem>
				<GridItem xs={12} sm={4} md={4} lg={4} xl={4}>
					<Card plain blog>
						<CardHeader plain image>
							<a href="#pablo">
								<img src={blog6} alt="..."/>
							</a>
							<div
								className={classes.coloredShadow}
								style={{
									backgroundImage: 'url(' + blog6 + ')',
									opacity: '1'
								}}
							/>
						</CardHeader>
						<CardBody plain>
							<Danger>
								<h6>
									ENTERPRISE
								</h6>
							</Danger>
							<h4 className={classes.cardTitle}>
								<a href="#pablo">
									Darkness cannot put out the Light
								</a>
							</h4>
							<p className={classes.description}>
								Don't be scared of the truth because we need to restart the human foundation in truth
								And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...
								<a href="#pablo"> Read More </a>
							</p>
						</CardBody>
					</Card>
				</GridItem>
				<GridItem xs={12} sm={4} md={4} lg={4} xl={4}>
					<Card plain blog>
						<CardHeader plain image>
							<a href="#pablo">
								<img src={blog6} alt="..."/>
							</a>
							<div
								className={classes.coloredShadow}
								style={{
									backgroundImage: 'url(' + blog6 + ')',
									opacity: '1'
								}}
							/>
						</CardHeader>
						<CardBody plain>
							<Success>
								<h6>STARTUPS</h6>
							</Success>
							<h4 className={classes.cardTitle}>
								<a href="#pablo">
									His Kingdom is Heaven
								</a>
							</h4>
							<p className={classes.description}>
								Don't be scared of the truth because we need to restart the human foundation in truth
								And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...
								<a href="#pablo"> Read More </a>
							</p>
						</CardBody>
					</Card>
				</GridItem>
				<GridItem xs={12} sm={4} md={4} lg={4} xl={4}>
					<Card plain blog>
						<CardHeader plain image>
							<a href="#pablo">
								<img src={blog6} alt="..."/>
							</a>
							<div
								className={classes.coloredShadow}
								style={{
									backgroundImage: 'url(' + blog6 + ')',
									opacity: '1'
								}}
							/>
						</CardHeader>
						<CardBody plain>
							<Info>
								<h6>ENTERPRISE</h6>
							</Info>
							<h4 className={classes.cardTitle}>
								<a href="#pablo">
									Life Is A Journey
								</a>
							</h4>
							<p className={classes.description}>
								Don't be scared of the truth because we need to restart the human foundation in truth
								And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...
								<a href="#pablo"> Read More </a>
							</p>
						</CardBody>
					</Card>
				</GridItem>
				<GridItem xs={12} sm={4} md={4} lg={4} xl={4}>
					<Card plain blog>
						<CardHeader plain image>
							<a href="#pablo">
								<img src={blog6} alt="..."/>
							</a>
							<div
								className={classes.coloredShadow}
								style={{
									backgroundImage: 'url(' + blog6 + ')',
									opacity: '1'
								}}
							/>
						</CardHeader>
						<CardBody plain>
							<Danger>
								<h6>
									ENTERPRISE
								</h6>
							</Danger>
							<h4 className={classes.cardTitle}>
								<a href="#pablo">
									Faith Can Move Mountains
								</a>
							</h4>
							<p className={classes.description}>
								Don't be scared of the truth because we need to restart the human foundation in truth
								And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...
								<a href="#pablo"> Read More </a>
							</p>
						</CardBody>
					</Card>
				</GridItem>
			</GridContainer>
		</div>
	)
}