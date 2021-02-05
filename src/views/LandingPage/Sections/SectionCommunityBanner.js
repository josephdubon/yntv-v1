import React from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
// @material-ui icons
import Subject from '@material-ui/icons/Subject'
import WatchLater from '@material-ui/icons/WatchLater'
// core components
import Card from 'components/Card/Card.js'
import CardBody from 'components/Card/CardBody.js'
import Button from 'components/CustomButtons/Button.js'

import cardsStyle from 'assets/jss/yeshua-network/views/componentsSections/sectionCards.js'

const style = {
	...cardsStyle
}

const useStyles = makeStyles(style)

export default function SectionCommunityBanner () {
	const classes = useStyles()
	return (
		<Card
			background
			style={{
				backgroundImage: `url(https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=750&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D)`
			}}
		>
			<CardBody background>
				<h6 className={classes.cardCategoryWhite}>JOIN OUR COMMUNITY</h6>
				<a href="#" onClick={e => e.preventDefault()}>
					<h3 className={classes.cardTitleWhite}>
						Yeshua Network Online Community Coming Soon...
					</h3>
				</a>
				<p className={classes.cardDescriptionWhite}>
					"You shall know the truth and it shall make you free."- Yeshua
					(John 8:32)
				</p>
				<Button simple color="white">
					<Subject/> Read Article
				</Button>
				<Button simple color="white">
					<WatchLater/> Watch Video
				</Button>
			</CardBody>
		</Card>
	)
}