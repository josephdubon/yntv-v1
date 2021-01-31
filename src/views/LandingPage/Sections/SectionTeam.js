import React from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
// @material-ui/icons
// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import Card from 'components/Card/Card.js'
import CardHeader from 'components/Card/CardHeader.js'
import CardBody from 'components/Card/CardBody.js'

import teamsStyle from 'assets/jss/yeshua-network/views/sectionsSections/teamsStyle.js'
import teamStyle from 'assets/jss/yeshua-network/views/landingPageSections/teamStyle.js'
import cardBlog4 from '../../../assets/img/examples/card-blog4.jpg'
import Info from '../../../components/Typography/Info'
import blog5 from '../../../assets/img/examples/blog5.jpg'
import Success from '../../../components/Typography/Success'

const style = {
	...teamsStyle,
	...teamStyle,
	justifyContentCenter: {
		justifyContent: 'center'
	}
}

const useStyles = makeStyles(style)

export default function SectionTeam () {
	const classes = useStyles()
	return (
		<div className={classes.section}>
			{/* Blogs 2 START */}
			<div className={classes.blog}>
				<div className={classes.container}>
					<GridContainer>
						<GridItem
							xs={12}
							sm={12}
							md={10}
							className={classes.mlAuto + ' ' + classes.mrAuto}
						>
							<h2 className={classes.title}>Current Ministries</h2>
							<br/>
							<GridContainer>
								<GridItem xs={12} sm={6} md={6}>
									<Card plain blog>
										<CardHeader plain image>
											<a href='#pablito' onClick={e => e.preventDefault()}>
												<img src={cardBlog4} alt='...'/>
											</a>
											<div
												className={classes.coloredShadow}
												style={{
													backgroundImage: `url(${cardBlog4})`,
													opacity: '1'
												}}
											/>
										</CardHeader>
										<CardBody plain>
											<Info>
												<h6 className={classes.cardCategory}>Entire Bible Read Through</h6>
											</Info>
											<h4 className={classes.cardTitle}>
												<a href='#pablo' onClick={e => e.preventDefault()}>
													'GOT QUESTIONS?'
												</a>
											</h4>
											<p className={classes.description}>
												<small>Luke 4:4: 'Live by EVERY WORD of God” – Yeshua</small>
												<br/>Join us Sundays at 1 pm (PST).
												<br/>
												Click here to learn what
												passages
												will be covered next.

												Leave your comments and questions to be read live this Sunday!
												<br/>
												<a href='#pablo' onClick={e => e.preventDefault()}>
													{' '}
													Read More{' '}
												</a>
											</p>
										</CardBody>
									</Card>
								</GridItem>
								<GridItem xs={12} sm={6} md={6}>
									<Card plain blog>
										<CardHeader plain image>
											<a href='#pablito' onClick={e => e.preventDefault()}>
												<img src={blog5} alt='...'/>
											</a>
											<div
												className={classes.coloredShadow}
												style={{
													backgroundImage: `url(${blog5})`,
													opacity: '1'
												}}
											/>
										</CardHeader>
										<CardBody plain>
											<Success>
												<h6 className={classes.cardCategory}>Testimony Tuesdays</h6>
											</Success>
											<h4 className={classes.cardTitle}>
												<a href='#pablo' onClick={e => e.preventDefault()}>
													Come and testify of His goodness with us!
												</a>
											</h4>
											<p className={classes.description}>
												<small>Matthew 28:19-20 'Go and testify” – Yeshua</small>
												<br/>
												Every day is a day to testify of YHWH in your life! These videos don’t
												just give you a chance to hear what YHWH did in other people’s lives but
												gives you a chance to share what He did in yours as well! Come and
												testify of His goodness with us!
												<br/>
												<a href='#pablo' onClick={e => e.preventDefault()}>
													{' '}
													Read More{' '}
												</a>
											</p>
										</CardBody>
									</Card>
								</GridItem>
								<GridItem xs={12} sm={6} md={6}>
									<Card plain blog>
										<CardHeader plain image>
											<a href='#pablito' onClick={e => e.preventDefault()}>
												<img src={blog5} alt='...'/>
											</a>
											<div
												className={classes.coloredShadow}
												style={{
													backgroundImage: `url(${blog5})`,
													opacity: '1'
												}}
											/>
										</CardHeader>
										<CardBody plain>
											<Success>
												<h6 className={classes.cardCategory}>Testimony Tuesdays</h6>
											</Success>
											<h4 className={classes.cardTitle}>
												<a href='#pablo' onClick={e => e.preventDefault()}>
													Truth Me Free
												</a>
											</h4>
											<p className={classes.description}>
												<small>John 8:32 'The truth shall make you free” – Yeshua</small>
												<br/>
												Hear the story of how Yeshua Network founder, Nathan Wheeler, flatlined,
												visited paradise (heaven) and was sent back to life by YHWH (God) to
												tell his story and start the ministry you see here today.
												<br/>
												<a href='#pablo' onClick={e => e.preventDefault()}>
													{' '}
													Read More{' '}
												</a>
											</p>
										</CardBody>
									</Card>
								</GridItem>
								<GridItem xs={12} sm={6} md={6}>
									<Card plain blog>
										<CardHeader plain image>
											<a href='#pablito' onClick={e => e.preventDefault()}>
												<img src={blog5} alt='...'/>
											</a>
											<div
												className={classes.coloredShadow}
												style={{
													backgroundImage: `url(${blog5})`,
													opacity: '1'
												}}
											/>
										</CardHeader>
										<CardBody plain>
											<Success>
												<h6 className={classes.cardCategory}>Testimony Tuesdays</h6>
											</Success>
											<h4 className={classes.cardTitle}>
												<a href='#pablo' onClick={e => e.preventDefault()}>
													#BeTheLight - Event
												</a>
											</h4>
											<p className={classes.description}>
												<small>Matthew 5:14-16 “You are the light of the world…” –
													Yeshua</small>
												<br/>
												On the 22nd of every month believers all over the world stand in unity
												(regardless of denomination), they light a candle at sunset, post a
												picture of it with #BeTheLight on their social media pages. Together the
												body of Christ shines brightly for all to see!
												<br/>
												<a href='#pablo' onClick={e => e.preventDefault()}>
													{' '}
													Read More{' '}
												</a>
											</p>
										</CardBody>
									</Card>
								</GridItem>

							</GridContainer>
						</GridItem>
					</GridContainer>
				</div>
			</div>
			{/* Blogs 2 END */}
		</div>
	)
}