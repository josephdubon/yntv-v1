/*eslint-disable*/
import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// react components used to create a google map
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps'
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

// Sections for this page
import SectionNewsletter from './Sections/SectionNewsletter'
import SectionContactForm from './Sections/SectionContactForm'

import contactUsStyle from 'assets/jss/yeshua-network/views/contactUsStyle.js'
import { Link } from 'react-router-dom'
import GridContainer from '../../components/Grid/GridContainer'
import GridItem from '../../components/Grid/GridItem'
import Parallax from '../../components/Parallax/Parallax'

const CustomSkinMap = withScriptjs(
	withGoogleMap(() => (
		<GoogleMap
			defaultZoom={14}
			defaultCenter={{ lat: 44.43353, lng: 26.093928 }}
			defaultOptions={{
				scrollwheel: false,
				zoomControl: true,
				styles: [
					{
						featureType: 'water',
						stylers: [
							{ saturation: 43 },
							{ lightness: -11 },
							{ hue: '#0088ff' }
						]
					},
					{
						featureType: 'road',
						elementType: 'geometry.fill',
						stylers: [
							{ hue: '#ff0000' },
							{ saturation: -100 },
							{ lightness: 99 }
						]
					},
					{
						featureType: 'road',
						elementType: 'geometry.stroke',
						stylers: [{ color: '#808080' }, { lightness: 54 }]
					},
					{
						featureType: 'landscape.man_made',
						elementType: 'geometry.fill',
						stylers: [{ color: '#ece2d9' }]
					},
					{
						featureType: 'poi.park',
						elementType: 'geometry.fill',
						stylers: [{ color: '#ccdca1' }]
					},
					{
						featureType: 'road',
						elementType: 'labels.text.fill',
						stylers: [{ color: '#767676' }]
					},
					{
						featureType: 'road',
						elementType: 'labels.text.stroke',
						stylers: [{ color: '#ffffff' }]
					},
					{ featureType: 'poi', stylers: [{ visibility: 'off' }] },
					{
						featureType: 'landscape.natural',
						elementType: 'geometry.fill',
						stylers: [{ visibility: 'on' }, { color: '#b8cb93' }]
					},
					{ featureType: 'poi.park', stylers: [{ visibility: 'on' }] },
					{
						featureType: 'poi.sports_complex',
						stylers: [{ visibility: 'on' }]
					},
					{ featureType: 'poi.medical', stylers: [{ visibility: 'on' }] },
					{
						featureType: 'poi.business',
						stylers: [{ visibility: 'simplified' }]
					}
				]
			}}
		>
			<Marker position={{ lat: 44.43353, lng: 26.093928 }}/>
		</GoogleMap>
	))
)

const useStyles = makeStyles(contactUsStyle)

export default function ContactUsPage () {
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
							md={12}
							sm={12}
							className={classNames(
								classes.mlAuto,
								classes.mrAuto,
								classes.textCenter
							)}
						>
							<h1 className={classes.title}>Contact Us</h1>
							<h4>
								For prayer request, site suggestions, or professional inquiries please use the form
								below.
							</h4>
						</GridItem>
					</GridContainer>
				</div>
			</Parallax>
			<div className={classNames(classes.main, classes.mainRaised)}>
				<div className={classes.contactContent}>
					<div className={classes.container}>
						<SectionNewsletter/>
						<SectionContactForm/>
					</div>
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