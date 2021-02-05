import React from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
// @material-ui/icons
import TrendingUp from '@material-ui/icons/TrendingUp'
// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import Card from 'components/Card/Card.js'
import CardHeader from 'components/Card/CardHeader.js'
import Info from 'components/Typography/Info.js'
import Danger from 'components/Typography/Danger.js'
import Success from 'components/Typography/Success.js'

import blogsStyle from 'assets/jss/yeshua-network/views/sectionsSections/blogsStyle.js'

import cardBlog4 from 'assets/img/examples/card-blog4.jpg'
import office2 from 'assets/img/office2.jpg'
import blog8 from 'assets/img/examples/blog8.jpg'

const useStyles = makeStyles(blogsStyle)

export default function SectionBlogs ({ ...rest }) {
	const classes = useStyles()
	return (
		<div className="cd-section" {...rest}>
			<div className={classes.blog}>
				<div className={classes.container}>
					<GridContainer>
						<GridItem
							xs={12}
							sm={12}
							md={12}
							className={classes.mlAuto + ' ' + classes.mrAuto}
						>
							<h2 className={classes.title + ' ' + classes.title_center}>Latest Videos</h2>
							<br/>
							<Card plain blog className={classes.card}>
								<GridContainer>
									<GridItem xs={12} sm={4} md={4}>
										<CardHeader image plain>
											<a href="#" onClick={e => e.preventDefault()}>
												<img src={cardBlog4} alt="..."/>
											</a>
											<div
												className={classes.coloredShadow}
												style={{
													backgroundImage: `url(${cardBlog4})`,
													opacity: '1'
												}}
											/>
											<div
												className={classes.coloredShadow}
												style={{
													backgroundImage: `url(${cardBlog4})`,
													opacity: '1'
												}}
											/>
										</CardHeader>
									</GridItem>
									<GridItem xs={12} sm={8} md={8}>
										<Info>
											<h6 className={classes.cardCategory}>ENTERPRISE</h6>
										</Info>
										<h3 className={classes.cardTitle}>
											<a href="#" onClick={e => e.preventDefault()}>
												Why Your Work Matters
											</a>
										</h3>
										<p className={classes.description}>
											Let us not give up meeting together, as some are in the habit of doing, but
											let us encourage one another—and all the more as you see the Day
											approaching. Through these he has given us his very great and precious
											promises, so that through them...
											<a href="#" onClick={e => e.preventDefault()}>
												{' '}
												Read More{' '}
											</a>
										</p>
										<p className={classes.author}>
											by{' '}
											<a href="#" onClick={e => e.preventDefault()}>
												<b>Nathan Wheeler</b>
											</a>
											, 2 days ago
										</p>
									</GridItem>
								</GridContainer>
							</Card>
							<Card plain blog className={classes.card}>
								<GridContainer>
									<GridItem xs={12} sm={4} md={4}>
										<CardHeader image plain>
											<a href="#" onClick={e => e.preventDefault()}>
												<img src={office2} alt="..."/>
											</a>
											<div
												className={classes.coloredShadow}
												style={{
													backgroundImage: `url(${office2})`,
													opacity: '1'
												}}
											/>
											<div
												className={classes.coloredShadow}
												style={{
													backgroundImage: `url(${office2})`,
													opacity: '1'
												}}
											/>
										</CardHeader>
									</GridItem>
									<GridItem xs={12} sm={8} md={8}>
										<Danger>
											<h6 className={classes.cardCategory}>
												<TrendingUp/>
												TRENDING
											</h6>
										</Danger>
										<h3 className={classes.cardTitle}>
											<a href="#" onClick={e => e.preventDefault()}>
												In His Own Words
											</a>
										</h3>
										<p className={classes.description}>
											Let us not give up meeting together, as some are in the habit of doing, but
											let us encourage one another—and all the more as you see the Day
											approaching. Through these he has given us his very great and precious
											promises, so that through them...
											<a href="#" onClick={e => e.preventDefault()}>
												{' '}
												Read More{' '}
											</a>
										</p>
										<p className={classes.author}>
											by{' '}
											<a href="#" onClick={e => e.preventDefault()}>
												<b>Nathan Wheeler</b>
											</a>
											, 2 days ago
										</p>
									</GridItem>
								</GridContainer>
							</Card>
							<Card plain blog className={classes.card}>
								<GridContainer>
									<GridItem xs={12} sm={4} md={4}>
										<CardHeader image plain>
											<a href="#" onClick={e => e.preventDefault()}>
												<img src={blog8} alt="..."/>
											</a>
											<div
												className={classes.coloredShadow}
												style={{
													backgroundImage: `url(${blog8})`,
													opacity: '1'
												}}
											/>
											<div
												className={classes.coloredShadow}
												style={{
													backgroundImage: `url(${blog8})`,
													opacity: '1'
												}}
											/>
										</CardHeader>
									</GridItem>
									<GridItem xs={12} sm={8} md={8}>
										<Success>
											<h6 className={classes.cardCategory}>STARTUPS</h6>
										</Success>
										<h3 className={classes.cardTitle}>
											<a href="#" onClick={e => e.preventDefault()}>
												Always Go Forward
											</a>
										</h3>
										<p className={classes.description}>
											Let us not give up meeting together, as some are in the habit of doing, but
											let us encourage one another—and all the more as you see the Day
											approaching. Through these he has given us his very great and precious
											promises, so that through them...
											<a href="#" onClick={e => e.preventDefault()}>
												{' '}
												Read More{' '}
											</a>
										</p>
										<p className={classes.author}>
											by{' '}
											<a href="#" onClick={e => e.preventDefault()}>
												<b>Nathan Wheeler</b>
											</a>
											, 2 days ago
										</p>
									</GridItem>
								</GridContainer>
							</Card>
						</GridItem>
						<GridItem xs={12} sm={4} md={4}>
							<CardHeader image plain>
								<a href="#" onClick={e => e.preventDefault()}>
									<img src={office2} alt="..."/>
								</a>
								<div
									className={classes.coloredShadow}
									style={{
										backgroundImage: `url(${office2})`,
										opacity: '1'
									}}
								/>
								<div
									className={classes.coloredShadow}
									style={{
										backgroundImage: `url(${office2})`,
										opacity: '1'
									}}
								/>
							</CardHeader>
						</GridItem>
						<GridItem xs={12} sm={8} md={8}>
							<Danger>
								<h6 className={classes.cardCategory}>
									<TrendingUp/>
									TRENDING
								</h6>
							</Danger>
							<h3 className={classes.cardTitle}>
								<a href="#" onClick={e => e.preventDefault()}>
									Faith Is Our Salvation
								</a>
							</h3>
							<p className={classes.description}>
								Let us not give up meeting together, as some are in the habit of doing, but
								let us encourage one another—and all the more as you see the Day
								approaching. Through these he has given us his very great and precious
								promises, so that through them...
								<a href="#" onClick={e => e.preventDefault()}>
									{' '}
									Read More{' '}
								</a>
							</p>
							<p className={classes.author}>
								by{' '}
								<a href="#" onClick={e => e.preventDefault()}>
									<b>Nathan Wheeler</b>
								</a>{' '}
								, 2 days ago
							</p>
						</GridItem>
					</GridContainer>
				</div>
			</div>
		</div>
	)
}