/*eslint-disable*/
import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
// @material-ui/icons
import Favorite from '@material-ui/icons/Favorite'
// core components
import Header from 'components/Header/Header.js'
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import Parallax from 'components/Parallax/Parallax.js'
import Footer from 'components/Footer/Footer.js'
// sections for this page
import HeaderLinks from 'components/Header/HeaderLinks.js'
import SectionDescription from 'views/AboutUsPage/Sections/SectionDescription.js'
import SectionTeam from 'views/AboutUsPage/Sections/SectionTeam.js'
import SectionServices from 'views/AboutUsPage/Sections/SectionServices.js'
import SectionOffice from 'views/AboutUsPage/Sections/SectionOffice.js'
import SectionMailingList from 'views/AboutUsPage/Sections/SectionMailingList.js'
import SectionNewsletter from 'views/AboutUsPage/Sections/SectionNewsletter.js'

import aboutUsStyle from 'assets/jss/yeshua-network/views/aboutUsStyle.js'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(aboutUsStyle)

export default function AboutUsPage () {
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
			<Parallax image={require('assets/img/bg9.jpg')} filter="dark" small>
				<div className={classes.container}>
					<GridContainer justify="center">
						<GridItem
							md={10}
							sm={10}
							className={classNames(
								classes.mlAuto,
								classes.mrAuto,
								classes.textCenter
							)}
						>
							<h1 className={classes.title}>About Us</h1>
							<h4>
								Come get to know us. Meet the amazing team that run Yeshua Network.
							</h4>
						</GridItem>
					</GridContainer>
				</div>
			</Parallax>
			<div className={classNames(classes.main, classes.mainRaised)}>
				<div className={classes.container}>
					<SectionDescription/>
					<SectionTeam/>
					<SectionServices/>
					<SectionMailingList/>
					<SectionOffice/>
					<SectionNewsletter/>
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