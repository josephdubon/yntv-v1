/* eslint-disable */
import React from 'react'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
// react components for routing our app without refresh
import { Link } from 'react-router-dom'

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

// @material-ui/icons
import Home from '@material-ui/icons/Home'
import AccountBalance from '@material-ui/icons/AccountBalance'

// core components
import styles from 'assets/jss/yeshua-network/components/headerLinksStyle.js'
import { ViewQuilt } from '@material-ui/icons'
import LocationOn from '@material-ui/icons/LocationOn'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';

const useStyles = makeStyles(styles)

export default function HeaderLinks (props) {
	const easeInOutQuad = (t, b, c, d) => {
		t /= d / 2
		if (t < 1) return (c / 2) * t * t + b
		t--
		return (-c / 2) * (t * (t - 2) - 1) + b
	}

	const smoothScroll = (e, target) => {
		if (window.location.pathname === '/sections') {
			let isMobile = navigator.userAgent.match(
				/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
			)
			if (isMobile) {
				// if we are on mobile device the scroll into view will be managed by the browser
			} else {
				e.preventDefault()
				let targetScroll = document.getElementById(target)
				scrollGo(document.documentElement, targetScroll.offsetTop, 1250)
			}
		}
	}
	const scrollGo = (element, to, duration) => {
		let start = element.scrollTop,
			change = to - start,
			currentTime = 0,
			increment = 20

		let animateScroll = function () {
			currentTime += increment
			let val = easeInOutQuad(currentTime, start, change, duration)
			element.scrollTop = val
			if (currentTime < duration) {
				setTimeout(animateScroll, increment)
			}
		}
		animateScroll()
	}

	const { dropdownHoverColor } = props
	const classes = useStyles()
	return (
		<List className={classes.list + ' ' + classes.mlAuto}>
			<ListItem className={classes.listItem}>
				<Link to='/' className={classes.listItem}>
					<Home className={classes.dropdownIcons}/> Home
				</Link>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Link to='/about' className={classes.listItem}>
					<AccountBalance className={classes.dropdownIcons}/> About
				</Link>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Link to='/videos' className={classes.listItem}>
					<VideoLibraryIcon className={classes.dropdownIcons}/> Videos
				</Link>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Link to='/news' className={classes.listItem}>
					<ViewQuilt className={classes.dropdownIcons}/> News
				</Link>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Link to='/contact' className={classes.listItem}>
					<LocationOn className={classes.dropdownIcons}/> Contact
				</Link>
			</ListItem>
		</List>
	)
}

HeaderLinks.defaultProps = {
	hoverColor: 'primary'
}

HeaderLinks.propTypes = {
	dropdownHoverColor: PropTypes.oneOf([
		'dark',
		'primary',
		'info',
		'success',
		'warning',
		'danger',
		'rose'
	])
}