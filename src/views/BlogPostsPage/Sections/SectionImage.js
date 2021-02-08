import React from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
// @material-ui/icons
// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import Card from 'components/Card/Card.js'
import CardHeader from 'components/Card/CardHeader.js'
import CardBody from 'components/Card/CardBody.js'
import CardFooter from 'components/Card/CardFooter.js'
import Muted from 'components/Typography/Muted.js'
import Button from 'components/CustomButtons/Button.js'
// icons @material-ui
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'

import bg10 from 'assets/img/bg10.jpg'

import cardProfile1 from 'assets/img/faces/card-profile1-square.jpg'

import sectionImageStyle from 'assets/jss/yeshua-network/views/blogPostsSections/sectionImageStyle.js'

const useStyles = makeStyles(sectionImageStyle)

export default function SectionImage () {
	const classes = useStyles()
	return (
		<div
			className={classes.section}
			style={{ backgroundImage: 'url(' + bg10 + ')' }}
		>
			<div className={classes.container}>
				<GridContainer>
					<GridItem xs={12} sm={6} md={6}>
						<Card profile plain className={classes.textLeft}>
							<GridContainer>
								<GridItem xs={12} sm={5} md={5}>
									<CardHeader image plain>
										<a href="#pablo">
											<img src={cardProfile1} alt="..."/>
										</a>
									</CardHeader>
								</GridItem>
								<GridItem xs={12} sm={7} md={7}>
									<CardBody plain>
										<h4 className={classes.cardTitle}>Nathan Wheeler</h4>
										<Muted>
											<h6>Founder of Yeshua Network</h6>
										</Muted>
										<p className={classes.description}>
											Don{'\''}t be scared of the truth because we need to
											restart the human foundation in truth...
										</p>
									</CardBody>
									<CardFooter profile plain>
										<Button justIcon simple color="white" href="#pablo">
											<TwitterIcon/>
										</Button>
										<Button justIcon simple color="white" href="#pablo">
											<FacebookIcon/>
										</Button>
										<Button justIcon simple color="white" href="#pablo">
											<InstagramIcon/>
										</Button>
									</CardFooter>
								</GridItem>
							</GridContainer>
						</Card>
					</GridItem>
					<GridItem xs={12} sm={6} md={6}>
						<Card profile plain className={classes.textLeft}>
							<GridContainer>
								<GridItem xs={12} sm={5} md={5}>
									<CardHeader image plain>
										<a href="#pablo">
											<img src={cardProfile1} alt="..."/>
										</a>
									</CardHeader>
								</GridItem>
								<GridItem xs={12} sm={7} md={7}>
									<CardBody plain>
										<h4 className={classes.cardTitle}>Nathan Wheeler</h4>
										<Muted>
											<h6>Founder of Yeshua Network</h6>
										</Muted>
										<p className={classes.description}>
											Don{'\''}t be scared of the truth because we need to
											restart the human foundation in truth...
										</p>
									</CardBody>
									<CardFooter profile plain>
										<Button justIcon simple color="white" href="#pablo">
											<TwitterIcon/>
										</Button>
										<Button justIcon simple color="white" href="#pablo">
											<FacebookIcon/>
										</Button>
										<Button justIcon simple color="white" href="#pablo">
											<InstagramIcon/>
										</Button>
									</CardFooter>
								</GridItem>
							</GridContainer>
						</Card>
					</GridItem>
				</GridContainer>
			</div>
		</div>
	)
}