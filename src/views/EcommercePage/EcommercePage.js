/*eslint-disable*/
import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// core components
import Header from 'components/Header/Header.js'
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import Parallax from 'components/Parallax/Parallax.js'
import Button from 'components/CustomButtons/Button.js'
import Card from 'components/Card/Card.js'
import CardBody from 'components/Card/CardBody.js'
import CustomInput from 'components/CustomInput/CustomInput.js'
import Footer from 'components/Footer/Footer.js'
// sections for this page
import HeaderLinks from 'components/Header/HeaderLinks.js'
import SectionLatestOffers from 'views/EcommercePage/Sections/SectionLatestOffers.js'
import SectionProducts from 'views/EcommercePage/Sections/SectionProducts.js'
import SectionBlog from 'views/EcommercePage/Sections/SectionBlog.js'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import InputAdornment from '@material-ui/core/InputAdornment'
// @material-ui icons
import Mail from '@material-ui/icons/Mail'

import ecommerceHeader from 'assets/img/examples/ecommerce-header.jpg'
import face1 from 'assets/img/faces/card-profile6-square.jpg'
import face2 from 'assets/img/faces/christian.jpg'
import face3 from 'assets/img/faces/card-profile4-square.jpg'
import face4 from 'assets/img/faces/card-profile1-square.jpg'
import face5 from 'assets/img/faces/marc.jpg'
import face6 from 'assets/img/faces/kendall.jpg'
import face7 from 'assets/img/faces/card-profile5-square.jpg'
import face8 from 'assets/img/faces/card-profile2-square.jpg'

import styles from 'assets/jss/yeshua-network/views/ecommerceStyle.js'
import { Link } from 'react-router-dom'
import Favorite from '@material-ui/icons/Favorite'

const useStyles = makeStyles(styles)

export default function EcommercePage () {
	React.useEffect(() => {
		window.scrollTo(0, 0)
		document.body.scrollTop = 0
	})
	const classes = useStyles()
	return (
		<div>
			<Header
				brand="Yeshua Network"
				links={<HeaderLinks dropdownHoverColor="info"/>}
				fixed
				color="transparent"
				changeColorOnScroll={{
					height: 300,
					color: 'info'
				}}
			/>
			<Parallax
				image={require('assets/img/examples/clark-street-merc.jpg')}
				filter="dark"
				small
			>
				<div className={classes.container}>
					<GridContainer>
						<GridItem
							md={8}
							sm={8}
							className={classNames(
								classes.mlAuto,
								classes.mrAuto,
								classes.textCenter
							)}
						>
							<div className={classes.brand}>
								<h1 className={classes.title}>Ecommerce Page!</h1>
								<h4>
									Free global delivery for all products. Use coupon{' '}
									<b>25summer</b> for an extra 25% Off
								</h4>
							</div>
						</GridItem>
					</GridContainer>
				</div>
			</Parallax>

			<div className={classNames(classes.main, classes.mainRaised)}>
				<SectionLatestOffers/>
				<SectionProducts/>
			</div>
			<SectionBlog/>
			<div
				className={classNames(
					classes.subscribeLine,
					classes.subscribeLineImage
				)}
				style={{ backgroundImage: `url(${ecommerceHeader})` }}
			>
				<div className={classes.container}>
					<GridContainer>
						<GridItem
							xs={12}
							sm={6}
							md={6}
							className={classNames(classes.mlAuto, classes.mrAuto)}
						>
							<div className={classes.textCenter}>
								<h3 className={classes.title}>Subscribe to our Newsletter</h3>
								<p className={classes.description}>
									Join our newsletter and get news in your inbox every week! We
									hate spam too, so no worries about this.
								</p>
							</div>
							<Card raised className={classes.card}>
								<CardBody className={classes.cardBody}>
									<form>
										<GridContainer>
											<GridItem xs={12} sm={6} md={6} lg={8}>
												<CustomInput
													id="emailPreFooter"
													formControlProps={{
														fullWidth: true,
														className: classes.cardForm
													}}
													inputProps={{
														startAdornment: (
															<InputAdornment position="start">
																<Mail/>
															</InputAdornment>
														),
														placeholder: 'Your Email...'
													}}
												/>
											</GridItem>
											<GridItem xs={12} sm={6} md={6} lg={4}>
												<Button
													color="rose"
													block
													className={classes.subscribeButton}
												>
													subscribe
												</Button>
											</GridItem>
										</GridContainer>
									</form>
								</CardBody>
							</Card>
						</GridItem>
					</GridContainer>
				</div>
			</div>
			<Footer
				content={
					<div>
						<div className={classes.left}>
							<List className={classes.list}>
								<ListItem className={classes.inlineBlock}>
									<Link
										to='/'
										className={classes.block}
									>
										Home
									</Link>
								</ListItem>
								<ListItem className={classes.inlineBlock}>
									<Link
										to='/about-us'
										className={classes.block}
									>
										About
									</Link>
								</ListItem>
								<ListItem className={classes.inlineBlock}>
									<Link to='blog-posts' className={classes.block}>
										Blog
									</Link>
								</ListItem>
								<ListItem className={classes.inlineBlock}>
									<Link
										to='/contact-us'
										className={classes.block}
									>
										Contact
									</Link>
								</ListItem>
							</List>
						</div>
						<div className={classes.right}>
							&copy; {1900 + new Date().getYear()} | made with{' '}
							<Favorite className={classes.icon}/> by{' '}
							<a
								href='mailto:josephdubon@pm.me'
								target='_blank'
							>
								Yeshua Network
							</a>{' '}
							for a better world.
						</div>
					</div>
				}
			>
				<GridContainer>
					<GridItem xs={12} sm={4} md={4}>
						<h5>About Us</h5>
						<p>
							Welcome to the Yeshua Network we create content and media of all types that inspire, educate
							and testify of the One True Living Creator (YHWH). We hope you are blessed by our ministry
							here at the Yeshua Network and that it inspires you
							to be a blessing in all that you do.
						</p>
						<p>
							Take a look around, enjoy the videos, blogs, pictures, news updates, links, upcoming and
							past events, and our sponsors’ pages, all of which glorify the King of Kings!
						</p>
					</GridItem>
					<GridItem xs={12} sm={4} md={4}>
						<h5>Social Feed</h5>
						<div className={classes.socialFeed}>
							<div>
								<i className="fab fa-twitter"/>
								<p>How to handle ethical disagreements with your clients.</p>
							</div>
							<div>
								<i className="fab fa-twitter"/>
								<p>The tangible benefits of designing at 1x pixel density.</p>
							</div>
							<div>
								<i className="fab fa-facebook-square"/>
								<p>
									A collection of 25 stunning sites that you can use for
									inspiration.
								</p>
							</div>
						</div>
					</GridItem>
					<GridItem xs={12} sm={4} md={4}>
						<h5>Instagram Feed</h5>
						<div className={classes.galleryFeed}>
							<img
								src={face1}
								className={classNames(
									classes.img,
									classes.imgRaised,
									classes.imgRounded
								)}
								alt="..."
							/>
							<img
								src={face2}
								className={classNames(
									classes.img,
									classes.imgRaised,
									classes.imgRounded
								)}
								alt="..."
							/>
							<img
								src={face3}
								className={classNames(
									classes.img,
									classes.imgRaised,
									classes.imgRounded
								)}
								alt="..."
							/>
							<img
								src={face4}
								className={classNames(
									classes.img,
									classes.imgRaised,
									classes.imgRounded
								)}
								alt="..."
							/>
							<img
								src={face5}
								className={classNames(
									classes.img,
									classes.imgRaised,
									classes.imgRounded
								)}
								alt="..."
							/>
							<img
								src={face6}
								className={classNames(
									classes.img,
									classes.imgRaised,
									classes.imgRounded
								)}
								alt="..."
							/>
							<img
								src={face7}
								className={classNames(
									classes.img,
									classes.imgRaised,
									classes.imgRounded
								)}
								alt="..."
							/>
							<img
								src={face8}
								className={classNames(
									classes.img,
									classes.imgRaised,
									classes.imgRounded
								)}
								alt="..."
							/>
						</div>
					</GridItem>
				</GridContainer>
			</Footer>
		</div>
	)
}