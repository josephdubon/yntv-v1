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
import SectionPlaylists from './Sections/SectionPlaylists.js'
import SectionNewsletter from './Sections/SectionNewsletter.js'

import videosPageStyle from 'assets/jss/yeshua-network/views/videosPageStyle.js'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

const useStyles = makeStyles(videosPageStyle)

export default function VideosPage () {
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
					height: 400,
					color: 'primary'
				}}
			/>
			<Parallax image={require('assets/img/bg-images/standingCrossSky.jpg')} filter="dark" small>
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
							<h1 className={classes.title}>Videos</h1>
							<h4>
								Below you will find our video playlists. Press play to begin playlist or choose a video
								by clicking the menu.
							</h4>
						</GridItem>
					</GridContainer>
				</div>
			</Parallax>
			<div className={classes.main}>
				<div className={classes.container}>
					<SectionPlaylists/>
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