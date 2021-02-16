import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import Card from 'components/Card/Card.js'
import CardAvatar from 'components/Card/CardAvatar.js'
import CardBody from 'components/Card/CardBody.js'
import CardFooter from 'components/Card/CardFooter.js'
import Button from 'components/CustomButtons/Button.js'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'

import teamStyle from 'assets/jss/yeshua-network/views/aboutUsSections/teamStyle.js'

import FaceMarc from 'assets/img/faces/marc.jpg'
import FaceChristian from 'assets/img/faces/christian.jpg'
import FaceKendall from 'assets/img/faces/kendall.jpg'
import FaceAvatar from 'assets/img/faces/avatar.jpg'

const useStyles = makeStyles(teamStyle)

export default function SectionTeam () {
	const classes = useStyles()
	return (
		<div className={classes.team}>
			<GridContainer>
				<GridItem
					md={10}
					sm={10}
					className={classNames(
						classes.mrAuto,
						classes.mlAuto,
						classes.textCenter
					)}
				>
					<h3 className={classes.title}>Yeshua is our risen savior!</h3>
					<h5 className={classes.description}>
						The Yeshua Network was created by Nathan Wheeler under the Facebook page “YeshuaOfficial” on
						April 13th, 2014. Fulfilling a prophecy that was spoken over him by the Lord during his NDE in
						2013.
					</h5>
				</GridItem>
				<GridItem
					md={10}
					sm={10}
					className={classNames(
						classes.mrAuto,
						classes.mlAuto,
						classes.textCenter
					)}
				>
					<h3 className={classes.title}>Leadership Team</h3>
				</GridItem>

			</GridContainer>
			<GridContainer>
				<GridItem md={3} sm={6}>
					<Card profile plain>
						<CardAvatar profile plain>
							<a href="#">
								<img src={FaceMarc} alt="profile-pic" className={classes.img}/>
							</a>
						</CardAvatar>
						<CardBody plain>
							<h4 className={classes.cardTitle}>Nathan Wheeler</h4>
							<h6 className={classes.textMuted}>Founder/Owner</h6>
							<p className={classes.cardDescription}>
								As followers of Yeshua, we receive our greatest blessings when we ourselves are the
								blessing onto another.
							</p>
						</CardBody>
						<CardFooter className={classes.justifyContent}>
							<Button href="#pablo" justIcon simple color="twitter">
								<i className="fab fa-twitter"/>
							</Button>
							<Button href="#pablo" justIcon simple color="facebook">
								<FacebookIcon/>
							</Button>
							<Button href="#pablo" justIcon simple color="twitter">
								<TwitterIcon/>
							</Button>
						</CardFooter>
					</Card>
				</GridItem>
				<GridItem md={3} sm={6}>
					<Card profile plain>
						<CardAvatar profile plain>
							<a href="#">
								<img
									src={FaceKendall}
									alt="profile-pic"
									className={classes.img}
								/>
							</a>
						</CardAvatar>
						<CardBody plain>
							<h4 className={classes.cardTitle}>Brian Layne</h4>
							<h6 className={classes.textMuted}>Director of Content</h6>
							<p className={classes.cardDescription}>
								As followers of Yeshua, we receive our greatest blessings when we ourselves are the
								blessing onto another.
							</p>
						</CardBody>
						<CardFooter className={classes.justifyContent}>
							<Button href="#pablo" justIcon simple color="twitter">
								<i className="fab fa-twitter"/>
							</Button>
							<Button href="#pablo" justIcon simple color="facebook">
								<FacebookIcon/>
							</Button>
							<Button href="#pablo" justIcon simple color="twitter">
								<TwitterIcon/>
							</Button>
						</CardFooter>
					</Card>
				</GridItem>
				<GridItem md={3} sm={6}>
					<Card profile plain>
						<CardAvatar profile plain>
							<a href="#">
								<img
									src={FaceChristian}
									alt="profile-pic"
									className={classes.img}
								/>
							</a>
						</CardAvatar>
						<CardBody plain>
							<h4 className={classes.cardTitle}>Alex Lvovsky</h4>
							<h6 className={classes.textMuted}>Content Creator</h6>
							<p className={classes.cardDescription}>
								As followers of Yeshua, we receive our greatest blessings when we ourselves are the
								blessing onto another.
							</p>
						</CardBody>
						<CardFooter className={classes.justifyContent}>
							<Button href="#pablo" justIcon simple color="twitter">
								<i className="fab fa-twitter"/>
							</Button>
							<Button href="#pablo" justIcon simple color="facebook">
								<FacebookIcon/>
							</Button>
							<Button href="#pablo" justIcon simple color="twitter">
								<TwitterIcon/>
							</Button>
						</CardFooter>
					</Card>
				</GridItem>
				<GridItem md={3} sm={6}>
					<Card profile plain>
						<CardAvatar profile plain>
							<a href="#">
								<img
									src={FaceAvatar}
									alt="profile-pic"
									className={classes.img}
								/>
							</a>
						</CardAvatar>
						<CardBody plain>
							<h4 className={classes.cardTitle}>Michael Beam</h4>
							<h6 className={classes.textMuted}>Church Overseer</h6>
							<p className={classes.cardDescription}>
								As followers of Yeshua, we receive our greatest blessings when we ourselves are the
								blessing onto another.
							</p>
						</CardBody>
						<CardFooter className={classes.justifyContent}>
							<Button href="#pablo" justIcon simple color="twitter">
								<i className="fab fa-twitter"/>
							</Button>
							<Button href="#pablo" justIcon simple color="facebook">
								<FacebookIcon/>
							</Button>
							<Button href="#pablo" justIcon simple color="twitter">
								<TwitterIcon/>
							</Button>
						</CardFooter>
					</Card>
				</GridItem>
			</GridContainer>
		</div>
	)
}