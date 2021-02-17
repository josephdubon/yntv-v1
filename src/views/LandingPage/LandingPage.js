/*eslint-disable*/
import React from 'react'
// react components for routing our app without refresh
// nodejs library to set properties for components
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui
import Favorite from '@material-ui/icons/Favorite'
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

import { makeStyles } from '@material-ui/core/styles'

// For slider
import Carousel from 'react-slick'
import dg1 from '../../assets/img/bg-images/handsCircle.jpg'
import dg2 from '../../assets/img/bg-images/handPrayingBible.jpg'
import dg3 from '../../assets/img/bg-images/mountainEagles.jpg'
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
		speed: 2000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true
	}
	return (
		<div>
			<Header
				color='transparent'
				brand='Yeshua Network'
				links={<HeaderLinks dropdownHoverColor='primary'/>}
				fixed
				changeColorOnScroll={{
					height: 300,
					color: 'primary'
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
							<GridContainer
								justify="center"
								alignItems="center"
							>
								<GridItem xs={12} sm={10} md={8}>
									<h1 className={classes.title}>Yeshua Network</h1>
									<h4>
										Welcome to the Yeshua Network we create content and media of all types that
										inspire, educate and testify of the One True Living Creator (YHWH).
										<br/>
										<br/>
										We create content that stands on the written word of YHWH, and the teachings of
										Yeshua Ha’Mashiach and His disciples.
									</h4>
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
							<GridContainer
								justify="center"
								alignItems="center"
							>
								<GridItem xs={12} sm={10} md={8}>
									<h2 className={classes.title}>...like all of creation, everything here points
										towards Him.</h2>
									<h4>
										Take a look around, enjoy the videos, blogs, pictures, news updates, links,
										upcoming and past events, and our sponsors’ pages, all of which glorify the King
										of Kings! Our name is the “Yeshua” network because, like
										all of creation, everything here points towards Him.
									</h4>
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
							<GridContainer
								justify="center"
								alignItems="center"
							>
								<GridItem xs={12} sm={10} md={8}>
									<h2 className={classes.title}>Be blessed by our ministry.</h2>
									<h4>
										We hope you are blessed by our ministry here at the Yeshua Network and that it
										inspires you to be a blessing in all that you do.
										<br/>
										Please check back soon, we are constantly creating content and updates.
									</h4>
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
					{/*<SectionCountdown/>*/}
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
										to='/about'
										className={classes.block}
									>
										About
									</Link>
								</ListItem>
								<ListItem className={classes.inlineBlock}>
									<Link to='news' className={classes.block}>
										News
									</Link>
								</ListItem>
								<ListItem className={classes.inlineBlock}>
									<Link
										to='/contact'
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