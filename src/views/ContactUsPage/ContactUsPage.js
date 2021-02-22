/*eslint-disable*/
import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// react components used to create a google map
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
// @material-ui/icons
import Favorite from '@material-ui/icons/Favorite'
// core components
import Header from 'components/Header/Header.js'
import HeaderLinks from 'components/Header/HeaderLinks.js'
import Footer from 'components/Footer/Footer.js'

// Sections for this page
import SectionNewsletter from './Sections/SectionNewsletter'
import SectionContactForm from './Sections/SectionContactForm'
import SectionIntro from './Sections/SectionIntro'

import contactUsStyle from 'assets/jss/yeshua-network/views/contactUsStyle.js'
import { Link } from 'react-router-dom'
import GridContainer from '../../components/Grid/GridContainer'
import GridItem from '../../components/Grid/GridItem'
import Parallax from '../../components/Parallax/Parallax'

const useStyles = makeStyles(contactUsStyle)

export default function ContactUsPage () {
	React.useEffect(() => {
		window.scrollTo(0, 0)
		document.body.scrollTop = 0
	})
	const classes = useStyles()
	return (
		<div>
			<Header
				brand="Yeshua Network"
				links={<HeaderLinks dropdownHoverColor="primary"/>}
				fixed
				color="transparent"
				changeColorOnScroll={{
					height: 300,
					color: 'primary'
				}}
			/>

			<Parallax image={require('assets/img/bg-images/communitySittingReading.jpg')} filter="dark" small>
				<div className={classes.container}>
					<GridContainer justify="center">
						<GridItem
							md={12}
							sm={12}
							className={classNames(
								classes.mlAuto,
								classes.mrAuto,
								classes.textCenter
							)}
						>
							<h1 className={classes.title}>Contact Us</h1>
						</GridItem>
					</GridContainer>
				</div>
			</Parallax>
			<div className={classNames(classes.main, classes.mainRaised)}>
				<div className={classes.contactContent}>
					<div className={classes.container}>
						<SectionIntro/>
						<SectionNewsletter/>
						<SectionContactForm/>
					</div>
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
									<Link
										to='/videos'
										className={classes.block}
									>
										Videos
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