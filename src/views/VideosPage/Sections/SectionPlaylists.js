import React from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
// @material-ui/icons
// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import Card from 'components/Card/Card.js'
import CardBody from 'components/Card/CardBody.js'
import CardHeader from 'components/Card/CardHeader.js'

import sectionPlaylistsStyle from 'assets/jss/yeshua-network/views/VideosPageSections/sectionPlaylistsStyle'
import classNames from 'classnames'

const useStyles = makeStyles(sectionPlaylistsStyle)

export default function SectionPlaylists () {
	const classes = useStyles()
	return (
		<div className={classes.section}>

			<GridContainer
				direction="row"
				justify="center"
				alignItems="center"
			>
				<GridItem
					md={10}
					sm={10}
					className={classNames(
						classes.mrAuto,
						classes.mlAuto,
						classes.textCenter,
					)}
				>
					<h3 className={classes.title}>Video Series Playlists</h3>
					<h5 className={classes.description}>
						See something you like?
						Click on the play button to start playlist or click the menu button for playlist video list.
					</h5>
				</GridItem>
				{/* Start playlist grid */}

				<GridItem className={classes.videoFeed} xs={12} sm={6} md={6}>
					<Card plain blog>
						<CardHeader image plain>
							<iframe
								src="https://www.youtube.com/embed/videoseries?list=PLdga4itzViRSvOBDYot3Gx5iAAWMG_6KY"
								width="100%"
								height="350"
								frameBorder="0"
								allow="autoplay; encrypted-media"
								allowFullScreen>

							</iframe>
						</CardHeader>
						<CardBody plain>
							<h4 className={classes.cardTitle}>
								Open Prayer Thursday
							</h4>
							<p className={classes.description}>
								Don't be scared of the truth because we need to restart the human foundation in truth
							</p>
						</CardBody>
					</Card>
				</GridItem>

				<GridItem className={classes.videoFeed} xs={12} sm={6} md={6}>
					<Card plain blog>
						<CardHeader image plain>
							<iframe
								src="https://www.youtube.com/embed/videoseries?list=PLdga4itzViRRZVixaj5q1oVcw2m8AtVpl"
								width="100%"
								height="350"
								frameBorder="0"
								allow="autoplay; encrypted-media"
								allowFullScreen>

							</iframe>
						</CardHeader>
						<CardBody plain>
							<h4 className={classes.cardTitle}>
								Encouraging Words - Nathan Wheeler
							</h4>
							<p className={classes.description}>
								Don't be scared of the truth because we need to restart the human foundation in truth
							</p>
						</CardBody>
					</Card>
				</GridItem>

				<GridItem className={classes.videoFeed} xs={12} sm={6} md={6}>
					<Card plain blog>
						<CardHeader image plain>
							<iframe
								src="https://www.youtube.com/embed/videoseries?list=PLdga4itzViRR_bglVDfLGu6fDeqFdYFXh"
								width="100%"
								height="350"
								frameBorder="0"
								allow="autoplay; encrypted-media"
								allowFullScreen>

							</iframe>
						</CardHeader>
						<CardBody plain>
							<h4 className={classes.cardTitle}>
								Understanding Yeshua and Christianity
							</h4>
							<p className={classes.description}>
								Don't be scared of the truth because we need to restart the human foundation in truth
							</p>
						</CardBody>
					</Card>
				</GridItem>
				<GridItem className={classes.videoFeed} xs={12} sm={6} md={6}>
					<Card plain blog>
						<CardHeader image plain>
							<iframe
								src="https://www.youtube.com/embed/videoseries?list=PLdga4itzViRTCZdZYFdaGlm2aOxB2l0hn"
								width="100%"
								height="350"
								frameBorder="0"
								allow="autoplay; encrypted-media"
								allowFullScreen>

							</iframe>
						</CardHeader>
						<CardBody plain>
							<h4 className={classes.cardTitle}>
								Life After Life
							</h4>
							<p className={classes.description}>
								Don't be scared of the truth because we need to restart the human foundation in truth
							</p>
						</CardBody>
					</Card>
				</GridItem>
				<GridItem className={classes.videoFeed} xs={12} sm={6} md={6}>
					<Card plain blog>
						<CardHeader image plain>
							<iframe
								src="https://www.youtube.com/embed/videoseries?list=PLdga4itzViRSPfevBkJuutykvINzp9Ldo"
								width="100%"
								height="350"
								frameBorder="0"
								allow="autoplay; encrypted-media"
								allowFullScreen>

							</iframe>
						</CardHeader>
						<CardBody plain>
							<h4 className={classes.cardTitle}>
								Testimony Tuesday
							</h4>
							<p className={classes.description}>
								Don't be scared of the truth because we need to restart the human foundation in truth
							</p>
						</CardBody>
					</Card>
				</GridItem>
				<GridItem className={classes.videoFeed} xs={12} sm={6} md={6}>
					<Card plain blog>
						<CardHeader image plain>
							<iframe
								src="https://www.youtube.com/embed/videoseries?list=PLdga4itzViRQtqGFqtjVZfOXtTsukAbMT"
								width="100%"
								height="350"
								frameBorder="0"
								allow="autoplay; encrypted-media"
								allowFullScreen>

							</iframe>
						</CardHeader>
						<CardBody plain>
							<h4 className={classes.cardTitle}>
								Entire Bible Read Through - 2018/2019 </h4>
							<p className={classes.description}>
								Don't be scared of the truth because we need to restart the human foundation in truth
							</p>
						</CardBody>
					</Card>
				</GridItem>
				<GridItem className={classes.videoFeed} xs={12} sm={6} md={6}>
					<Card plain blog>
						<CardHeader image plain>
							<iframe
								src="https://www.youtube.com/embed/videoseries?list=PLdga4itzViRTMEqHrpWJxlIuXd4KZHAaB"
								width="100%"
								height="350"
								frameBorder="0"
								allow="autoplay; encrypted-media"
								allowFullScreen>

							</iframe>
						</CardHeader>
						<CardBody plain>
							<h4 className={classes.cardTitle}>
								40 Day Prayer Challenge - 2018 </h4>
							<p className={classes.description}>
								Don't be scared of the truth because we need to restart the human foundation in truth
							</p>
						</CardBody>
					</Card>
				</GridItem>
				<GridItem className={classes.videoFeed} xs={12} sm={6} md={6}>
					<Card plain blog>
						<CardHeader image plain>
							<iframe
								src="https://www.youtube.com/embed/videoseries?list=PLdga4itzViRSJxbogPz-glXl9TMJukN5Z"
								width="100%"
								height="350"
								frameBorder="0"
								allow="autoplay; encrypted-media"
								allowFullScreen>

							</iframe>
						</CardHeader>
						<CardBody plain>
							<h4 className={classes.cardTitle}>
								#BeTheLight on the 22nd - Global Unity Event </h4>
							<p className={classes.description}>
								Don't be scared of the truth because we need to restart the human foundation in truth
							</p>
						</CardBody>
					</Card>
				</GridItem>
			</GridContainer>
		</div>
	)
}