/*eslint-disable*/
import React from 'react'
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
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import Parallax from 'components/Parallax/Parallax.js'
// sections for this page
import SectionInterested from './Sections/SectionInterested.js'
import SectionNewsletter from './Sections/SectionNewsletter.js'

import blogPostsPageStyle from 'assets/jss/yeshua-network/views/blogPostsPageStyle.js'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

const useStyles = makeStyles(blogPostsPageStyle)

export default function BlogPostsPage () {
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
					height: 400,
					color: 'info'
				}}
			/>
			<Parallax image={require('assets/img/bg10.jpg')} filter="dark" small>
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
							<h1 className={classes.title}>News</h1>
							<h4>
								Here you find updates for things going on within the Yeshua Network and its affiliates,
								as well as what is going on in the world around you.
							</h4>
						</GridItem>
					</GridContainer>
				</div>
			</Parallax>
			<div className={classes.main}>
				<div className={classes.container}>
					<SectionInterested/>
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