import React from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

// @material-ui/icons
import MenuBookIcon from '@material-ui/icons/MenuBook'
import PanToolIcon from '@material-ui/icons/PanTool'
import FireplaceIcon from '@material-ui/icons/Fireplace'

// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'

import productStyle from 'assets/jss/yeshua-network/views/landingPageSections/productStyle.js'
import classNames from 'classnames'

const useStyles = makeStyles(productStyle)

export default function SectionIntro () {
	const classes = useStyles()
	return (
		<div className={classes.section}>
			<GridContainer justify='flex-start'>
				<GridItem
					xs={12}
					sm={12}
					md={12}
				>
					<h2 className={classes.title}>Welcome to the Yeshua Network!</h2>
					<br/><br/>
				</GridItem>
				<GridItem
					xs={12}
					sm={12}
					md={8}
				>
					<h5 className={classes.description}>
						Welcome to the Yeshua Network we create content and media of all types that inspire, educate and
						testify of the One True Living Creator (YHWH). We create content that stands on the written word
						of YHWH, and the teachings of Yeshua Ha’Mashiach and His disciples. Our name is the “Yeshua”
						network because, like all of creation, everything here points towards Him.
						<br/><br/>
						Take a look around, enjoy the videos, blogs, pictures, news updates, links, upcoming and past
						events, and our sponsors’ pages!
						<br/><br/>
						We hope you are blessed by our ministry here at the Yeshua
						Network and that it inspires you to
						be a blessing in all that you do.
					</h5>
				</GridItem>
				<GridItem xs={12} sm={12} md={4}>
					<h4 className={classes.titleColor}>Upcoming Video Posting</h4>
					<List className={classes.title}>
						<ListItem>
							<ListItemAvatar>
								<Avatar className={classes.titleColor}>
									<PanToolIcon/>
								</Avatar>
							</ListItemAvatar>
							<ListItemText primary="Testimony Tuesday" secondary="Every Tuesday - Time: (TBD)"/>
						</ListItem>
						<ListItem>
							<ListItemAvatar>
								<Avatar className={classes.titleColor}>
									<MenuBookIcon/>
								</Avatar>
							</ListItemAvatar>
							<ListItemText primary="Bible Read-Through" secondary="Every Sunday - 1pm (PST)"/>
						</ListItem>
						<ListItem>
							<ListItemAvatar>
								<Avatar className={classes.titleColor}>
									<FireplaceIcon/>
								</Avatar>
							</ListItemAvatar>
							<ListItemText primary="#BeTheLight"
										  secondary="Candle Lighting Event - 22nd of Every Month at Sunset (PST)"/>
						</ListItem>
					</List>
				</GridItem>
			</GridContainer>
		</div>
	)
}