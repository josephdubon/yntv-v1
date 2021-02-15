/*eslint-disable*/
import React from 'react'
// react components for routing our app without refresh
// nodejs library to set properties for components
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui
import Favorite from '@material-ui/icons/Favorite'
import Share from '@material-ui/icons/Share'
import ShoppingCart from '@material-ui/icons/ShoppingCart'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
// core components
import Header from 'components/Header/Header.js'
import Footer from 'components/Footer/Footer.js'
import HeaderLinks from 'components/Header/HeaderLinks.js'
// react component for creating beautiful carousel
import landingPageStyle from 'assets/jss/yeshua-network/views/landingPageStyle.js'

// Sections for this page
import SectionIntro from './Sections/SectionIntro.js'
import SectionCurrentMinistries from './Sections/SectionCurrentMinistries.js'
import SectionContactForm from './Sections/SectionContactForm'
import SectionQuotes from './Sections/SectionQuotes'
import SectionLatestVideos from './Sections/SectionLatestVideos'
import SectionNewsletter from './Sections/SectionNewsletter'

// @material-ui/core components
import GridContainer from '../../components/Grid/GridContainer'
import GridItem from '../../components/Grid/GridItem'
import Button from '../../components/CustomButtons/Button'

import { makeStyles } from '@material-ui/core/styles'

// For slider
import Carousel from 'react-slick'
import dg1 from '../../assets/img/dg1.jpg'
import dg2 from '../../assets/img/dg2.jpg'
import dg3 from '../../assets/img/dg3.jpg'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(landingPageStyle)

export default function LandingPage ({ ...rest }) {
	React.useEffect(() => {
		window.scrollTo(0, 0)
		document.body.scrollTop = 0
	})
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
		<div>
			<Header
				color='transparent'
				brand='Yeshua Network'
				links={<HeaderLinks dropdownHoverColor='info'/>}
				fixed
				changeColorOnScroll={{
					height: 300,
					color: 'info'
				}}
				{...rest}
			/>
			<Carousel {...settings}>
				{/* Carousel 1 START */}
				<div>
					<div
						className={classes.pageHeader}
						style={{ backgroundImage: `url("${dg1}")` }}
					>
						<div className={classes.container}>
							<GridContainer>
								<GridItem xs={12} sm={6} md={6}>
									<h1 className={classes.title}>Yeshua Network</h1>
									<h4>
										Welcome to the Yeshua Network we create content and media of all types that
										inspire, educate and testify of the One True Living Creator (YHWH).
										<br/>
										<br/>
										We create content that stands on the written word of YHWH, and the teachings of
										Yeshua Ha’Mashiach and His disciples.
									</h4>
									<br/>
									<Button color="danger" size="lg">
										Read more
									</Button>
									<Button justIcon color="white" simple>
										<TwitterIcon/>
									</Button>
									<Button justIcon color="white" simple>
										<FacebookIcon/>
									</Button>
									<Button justIcon color="white" simple>
										<InstagramIcon/>
									</Button>
								</GridItem>
							</GridContainer>
						</div>
					</div>
				</div>
				{/* Carousel 1 END */}
				{/* Carousel 2 START */}
				<div>
					<div
						className={classes.pageHeader}
						style={{ backgroundImage: `url("${dg2}")` }}
					>
						<div className={classes.container}>
							<GridContainer>
								<GridItem
									xs={12}
									sm={8}
									md={8}
									className={classNames(
										classes.mlAuto,
										classes.mrAuto,
										classes.textCenter
									)}
								>
									<h2 className={classes.title}>...like all of creation, everything here points
										towards Him.</h2>
									<h4>
										Take a look around, enjoy the videos, blogs, pictures, news updates, links,
										upcoming and past events, and our sponsors’ pages, all of which glorify the King
										of Kings! Our name is the “Yeshua” network because, like
										all of creation, everything here points towards Him.
									</h4>
									<br/>
									<h6>Connect with us on:</h6>
									<div>
										<Button color="white" simple size="lg" justIcon>
											<TwitterIcon/>
										</Button>
										<Button color="white" simple size="lg" justIcon>
											<FacebookIcon/>
										</Button>
										<Button color="white" simple size="lg" justIcon>
											<InstagramIcon/>
										</Button>
									</div>
								</GridItem>
							</GridContainer>
						</div>
					</div>
				</div>
				{/* Carousel 2 END */}


				{/* Carousel 3 START */}
				<div>
					<div
						className={classes.pageHeader}
						style={{ backgroundImage: `url("${dg3}")` }}
					>
						<div className={classes.container}>
							<GridContainer>
								<GridItem
									xs={12}
									sm={7}
									md={7}
									className={classNames(classes.mlAuto, classes.textRight)}
								>
									<h2 className={classes.title}>Be blessed by our ministry.</h2>
									<h4>
										We hope you are blessed by our ministry here at the Yeshua Network and that it
										inspires you to be a blessing in all that you do.
										<br/>
										<br/>
										Feel free to stop by our shop and show support by purchasing a t-shirt, coffee
										mug or t-shirt.
									</h4>
									<br/>
									<div>
										<Button color="white" simple size="lg">
											<Share/> Share Offer
										</Button>
										<Button color="danger" size="lg">
											<ShoppingCart/> Shop now
										</Button>
									</div>
								</GridItem>
							</GridContainer>
						</div>
					</div>
				</div>
				{/* Carousel 3 END */}
			</Carousel>
			<div className={classNames(classes.main, classes.mainRaised)}>
				<div className={classes.container}>
					<SectionIntro/>
					<SectionNewsletter/>
					<SectionCurrentMinistries/>
					<SectionQuotes/>
					<SectionLatestVideos/>
					<SectionContactForm/>
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
			/>
		</div>
	)
}