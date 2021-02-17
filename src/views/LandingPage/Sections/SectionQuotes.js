import React from 'react'
// react component for creating beautiful carousel
import Carousel from 'react-slick'
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
import testimonialsStyle from 'assets/jss/yeshua-network/views/sectionsSections/testimonialsStyle.js'

import dg2 from 'assets/img/bg-images/mountainValleyGreenSnow.jpg'

const useStyles = makeStyles(testimonialsStyle)

export default function SectionQuotes ({ ...rest }) {
	const classes = useStyles()
	const settings = {
		dots: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true
	}
	return (
		<div className="cd-section" {...rest}>
			<div
				className={classes.testimonials + ' ' + classes.sectionImage}
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
							<h2 className={classes.title}>Inspirational Quotes</h2>
						</GridItem>
					</GridContainer>
					<GridContainer
						direction="row"
						justify="center"
						alignItems="center"
					>
						<GridItem xs={12} sm={8} md={8}>
							<Card testimonial className={classes.card1}>
								<Carousel {...settings}>

									<div>
										<div className={classes.icon}>
											<FormatQuote/>
										</div>
										<CardBody>
											<h5 className={classes.cardDescription}>
												I believe in Christianity (following Christ) as I believe that the sun
												has
												risen: not only because I see it, but because by it I see everything
												else.
											</h5>
										</CardBody>
										<CardFooter testimonial>
											<h5 className={classes.cardTitle}>C.S. Lewis</h5>
										</CardFooter>
									</div>

									<div>
										<div className={classes.icon}>
											<FormatQuote/>
										</div>
										<CardBody>
											<h5 className={classes.cardDescription}>
												I believe God is managing affairs and that He doesn't need any advice
												from me. With God in charge, I believe everything will work out for the
												best in the end. So what is there to worry about.
											</h5>
										</CardBody>
										<CardFooter testimonial>
											<h4 className={classes.cardTitle}>Henry Ford</h4>
										</CardFooter>
									</div>

									<div>
										<div className={classes.icon}>
											<FormatQuote/>
										</div>
										<CardBody>
											<h5 className={classes.cardDescription}>
												God will not permit any troubles to come upon us, unless He has a
												specific plan by which great blessing can come out of the difficulty.
											</h5>
										</CardBody>
										<CardFooter testimonial>
											<h4 className={classes.cardTitle}>Peter Marshall</h4>
										</CardFooter>
									</div>

									<div>
										<div className={classes.icon}>
											<FormatQuote/>
										</div>
										<CardBody>
											<h5 className={classes.cardDescription}>
												Within the covers of the Bible are all the answers for all the problems
												men face.
											</h5>
										</CardBody>
										<CardFooter testimonial>
											<h4 className={classes.cardTitle}>Ronald Reagan</h4>
										</CardFooter>
									</div>

									<div>
										<div className={classes.icon}>
											<FormatQuote/>
										</div>
										<CardBody>
											<h5 className={classes.cardDescription}>
												As followers of Yeshua, we receive our greatest blessings when we
												ourselves are the blessing onto another.
											</h5>
										</CardBody>
										<CardFooter testimonial>
											<h4 className={classes.cardTitle}>Nathan Wheeler</h4>
										</CardFooter>
									</div>

								</Carousel>
							</Card>
						</GridItem>
					</GridContainer>
				</div>
			</div>
		</div>
	)
}