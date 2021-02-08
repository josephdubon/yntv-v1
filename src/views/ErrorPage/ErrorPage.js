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

import errorPageStyle from 'assets/jss/yeshua-network/views/errorPageStyles.js'

import image from 'assets/img/clint-mckoy.jpg'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(errorPageStyle)

export default function ErrorPage ({ ...rest }) {
	React.useEffect(() => {
		window.scrollTo(0, 0)
		document.body.scrollTop = 0
	})
	const classes = useStyles()
	return (
		<div>
			<Header
				absolute
				color="transparent"
				brand="Yeshua Network"
				links={<HeaderLinks dropdownHoverColor="dark"/>}
				{...rest}
			/>
			<div
				className={classes.pageHeader}
				style={{
					backgroundImage: 'url(' + image + ')',
					backgroundSize: 'cover',
					backgroundPosition: 'top center'
				}}
			>
				{/* <div className={classes.container}> */}
				<div className={classes.contentCenter}>
					<GridContainer>
						<GridItem md={12}>
							<h1 className={classes.title}>404</h1>
							<h2 className={classes.subTitle}>Page not found :(</h2>
							<h4 className={classes.description}>
								Ooooups! Looks like you got lost.
							</h4>
						</GridItem>
					</GridContainer>
				</div>
				{/* </div> */}
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