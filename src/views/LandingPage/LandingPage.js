/*eslint-disable*/
import React from 'react'
// react components for routing our app without refresh
// nodejs library to set properties for components
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
// @material-ui/icons
import Favorite from '@material-ui/icons/Favorite'
// core components
import Header from 'components/Header/Header.js'
import Footer from 'components/Footer/Footer.js'
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import HeaderLinks from 'components/Header/HeaderLinks.js'
import Parallax from 'components/Parallax/Parallax.js'

import landingPageStyle from 'assets/jss/yeshua-network/views/landingPageStyle.js'

// Sections for this page
import SectionProduct from './Sections/SectionProduct.js'
import SectionTeam from './Sections/SectionTeam.js'
import SectionWork from './Sections/SectionWork.js'
import SectionQuote from './Sections/SectionQuote'
import SectionTestimonial from './Sections/SectionTestimonials'

const useStyles = makeStyles(landingPageStyle)

export default function LandingPage ({ ...rest }) {
	React.useEffect(() => {
		window.scrollTo(0, 0)
		document.body.scrollTop = 0
	})
	const classes = useStyles()
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
			<Parallax image={require('assets/img/bg8.jpg')} filter='dark'>
				<div className={classes.container}>
					<GridContainer
						direction='row'
						justify='center'
						alignItems='center'
					>
						<GridItem xs={12} sm={6} md={6}>
							<h1 className={classes.title}>Be blessed by our ministry.</h1>
							<h5>
								Welcome to the Yeshua Network we create content and media of all types that inspire,
								educate and testify of the One True Living Creator (YHWH).
							</h5>
						</GridItem>
						<GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
							<GridContainer
								direction='row'
								justify='center'
								alignItems='center'
							>
								<div className={classes.iframeContainer}>
									<iframe
										height='250'
										src='https://www.youtube.com/embed/wRFVzkvUyEk'
										frameBorder='0'
										allow='encrypted-media'
										allowFullScreen=''
										title='Yeshua Network'
									/>
								</div>
							</GridContainer>
						</GridItem>
					</GridContainer>
				</div>
			</Parallax>
			<div className={classNames(classes.main, classes.mainRaised)}>
				<div className={classes.container}>
					<SectionProduct/>
					<SectionQuote/>
					<SectionTeam/>
					<SectionTestimonial/>
					<SectionWork/>
				</div>
			</div>
			<Footer
				content={
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
				}
			/>
		</div>
	)
}