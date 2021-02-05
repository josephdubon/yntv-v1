import React from 'react'
// react component for creating beautiful carousel
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
// @material-ui/icons
import FormatQuote from '@material-ui/icons/FormatQuote'
// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import Card from 'components/Card/Card.js'
import CardBody from 'components/Card/CardBody.js'
import CardFooter from 'components/Card/CardFooter.js'
import CardAvatar from 'components/Card/CardAvatar.js'

import testimonialsStyle from 'assets/jss/yeshua-network/views/sectionsSections/testimonialsStyle.js'

import dg2 from 'assets/img/dg2.jpg'
import cardProfile1Square from 'assets/img/faces/card-profile1-square.jpg'
import cardProfile2Square from 'assets/img/faces/card-profile2-square.jpg'
import cardProfile4Square from 'assets/img/faces/card-profile4-square.jpg'
import Button from '../../../components/CustomButtons/Button'

const useStyles = makeStyles(testimonialsStyle)

export default function SectionTestimonials ({ ...rest }) {
	const classes = useStyles()
	return (
		<div className="cd-section" {...rest}>
			{/* Testimonials 1 START */}
			<div
				className={classes.testimonials + ' ' + classes.sectionImage}
				style={{ backgroundImage: `url(${dg2})` }}
			>
				<div className={classes.container}>
					<GridContainer>
						<GridItem
							xs={12}
							sm={6}
							md={6}
							className={
								classes.mlAuto + ' ' + classes.mrAuto + ' ' + classes.textCenter
							}
						>
							<h3 className={classes.title}>
								"See How They Love One Another!"
								<br/>
								<small>-1 Peter 1:22-2:3</small>
							</h3>
							<h5 className={classes.description}>
								Before you join, please read what members of our community are saying...
							</h5>
						</GridItem>
					</GridContainer>
					<GridContainer>
						<GridItem xs={12} sm={6} md={6}>
							<Card testimonial className={classes.card1}>
								<div className={classes.icon}>
									<FormatQuote/>
								</div>
								<CardBody>
									<h5 className={classes.cardDescription}>
										Your products, all the kits that I have downloaded from your
										site and worked with are sooo cool! I love the color
										mixtures, cards... everything. Keep up the great work!
									</h5>
								</CardBody>
								<CardFooter testimonial>
									<h4 className={classes.cardTitle}>Alec Thompson</h4>
									<h6 className={classes.cardCategory}>@ALECTHOMPSON</h6>
									<CardAvatar testimonial testimonialFooter>
										<a href="#" onClick={e => e.preventDefault()}>
											<img src={cardProfile1Square} alt="..."/>
										</a>
									</CardAvatar>
								</CardFooter>
							</Card>
						</GridItem>
						<GridItem xs={12} sm={6} md={6}>
							<Card testimonial className={classes.card1}>
								<div className={classes.icon}>
									<FormatQuote/>
								</div>
								<CardBody>
									<h5 className={classes.cardDescription}>
										{'"'}Don{'\''}t be scared of the truth because we need to
										restart the human foundation in truth. That{'\''}s why I love
										you like Kanye loves Kanye I love Rick Owens’ bed design but
										the back is not so attractive{'"'}
									</h5>
								</CardBody>
								<CardFooter testimonial>
									<h4 className={classes.cardTitle}>Gina Andrew</h4>
									<h6 className={classes.cardCategory}>@GINAANDREW</h6>
									<CardAvatar testimonial testimonialFooter>
										<a href="#" onClick={e => e.preventDefault()}>
											<img src={cardProfile4Square} alt="..."/>
										</a>
									</CardAvatar>
								</CardFooter>
							</Card>
						</GridItem>
						<GridItem xs={12} sm={12} md={12}>
							<Card testimonial className={classes.card1}>
								<div className={classes.icon}>
									<FormatQuote/>
								</div>
								<CardBody>
									<h5 className={classes.cardDescription}>
										{'"'}Your products, all the kits that I have downloaded from
										your site and worked with are sooo cool! I love the color
										mixtures, cards... everything. Keep up the great work!{'"'}
									</h5>
								</CardBody>
								<CardFooter testimonial>
									<h4 className={classes.cardTitle}>George West</h4>
									<h6 className={classes.cardCategory}>@GEORGEWEST</h6>
									<CardAvatar testimonial testimonialFooter>
										<a href="#" onClick={e => e.preventDefault()}>
											<img src={cardProfile2Square} alt="..."/>
										</a>
									</CardAvatar>
								</CardFooter>
							</Card>
							<br/>
							<br/>
							<GridItem xs={12} sm={12} md={12} className={
								classes.mlAuto + ' ' + classes.mrAuto + ' ' + classes.textCenter
							}>
								<Button color="danger" size="lg">
									Sign Up
								</Button>
							</GridItem>
						</GridItem>
					</GridContainer>
				</div>
			</div>
			{/* Testimonials 1 END */}
		</div>
	)
}