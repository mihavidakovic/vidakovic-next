import Head from 'next/head'
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import useScrollPosition from '@react-hook/window-scroll'
import { motion } from 'framer-motion';
var soccerStreams = require('soccer-streams-scraper')

import Projects from '../components/Projects/Projects';

// Animations
const logo = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			delay: 0.5,
			duration: 0.8
		}
	}
};

const title = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			delay: 0.8,
			duration: 0.8
		}
	}
};

const socialIconsDiv = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			delay: 1,
			duration: 0.8
		}
	}
}

const socialIcons = {
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8
    },
  }),
  hidden: { y: 30, opacity: 0 },
}

const cta = {
  visible: {
  	y: 0,
  	opacity: 1,
  	transition: {
  		delay: 3,
  		duration: 2
  	}
  },
  hidden: { y: 50, opacity: 0 },
}

export default function Home() {
	const scrollY = 1 - (useScrollPosition(60)/400)

soccerStreams.getMatches().then(res => {
  console.log(res)
})

	let social = [
			{
				"name": "linkedin",
				"link": "https://www.linkedin.com/in/mihavidakovic",
				"icon": {
					"d": 'M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z',
					"size": "0 0 448 512"
				}
			},
			{
				"name": "twitter",
				"link": "https://twitter.com/mihavidakovic",
				"icon": {
					"d": 'M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z',
					"size": "0 0 512 512"
				}
			},
			{
				"name": "mail",
				"link": "mailto:miha@vidakovic.si",
				"icon": {
					"d": 'M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z',
					"size": "0 0 512 512"
				}
			},
			{
				"name": "dribbble",
				"link": "https://dribbble.com/mihavidakovic",
				"icon": {
					"d": 'M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z',
					"size": "0 0 512 512"
				}
			}
		];

	return (
		<div className="">
			<Head>
				<title>Vidakovic.si</title>
				<link rel="icon" href="/img/favicon.ico" />
				<meta name="description" content="Web, UI/UX and Front-end developer" />
				<meta name="keywords" content="HTML, CSS, JavaScript, Web Design, Miha Vidakovič, Miha, Vidakovič" />
				<meta name="author" content="Miha Vidakovič" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<script
					async
					src="https://www.googletagmanager.com/gtag/js?id=UA-133841417-1"
				/>

				<script
					dangerouslySetInnerHTML={{
						__html: `
									window.dataLayer = window.dataLayer || [];
									function gtag(){dataLayer.push(arguments);}
									gtag('js', new Date());
									gtag('config', 'UA-133841417-1');
							`,
					}}
				/>
			</Head>
			<section id="home">
				<div className="container">
					<div className="homeIntro">
						<motion.img src="/img/logo-bw.svg" className="logo" alt="logo" initial="hidden" animate="visible" variants={logo} />
						<motion.p initial="hidden" animate="visible" variants={title}>Hi, I’m Miha – I’m a Web, UI/UX and Front-end developer living in Kranj, Slovenia. I love working on awesome projects with inspiring people.</motion.p>
						<motion.div 
							className="social"
							initial="hidden" 
							animate="visible"
							variants={socialIconsDiv}>
							{
								social.map((item, i) => {
									return(
										<motion.div 
											className={item.name} 
											key={i} 
											custom={i}
											initial="hidden" 
											animate="visible"
											variants={socialIcons}
											whileHover={{ scale: 1.07 }} 
											whileTap={{ scale: 0.99 }}>
											<a href={item.link} target="_blank" rel="noopener noreferrer">
												<svg aria-hidden="true" focusable="false" data-prefix="fas" role="img" xmlns="http://www.w3.org/2000/svg" viewBox={item.icon.size}><path fill="currentColor" d={item.icon.d}></path></svg>
											</a>
										</motion.div>
									)
								})
							}
						</motion.div>
					 </div>
			 </div>
				 <Link to="projects" spy={true} smooth={true} style={{"opacity": scrollY}}>
				 	<motion.div 
				 		className="cta"
				 		initial="hidden" 
						animate="visible"
				 		variants={cta}>
						 <p>Scroll down to see my projects</p>
						 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"/></svg>
					 </motion.div>
				 </Link>
			</section>

			<section id="projects" className="projects">
				<div className="container">
					<h2>Latests projects</h2>
					<Projects />
				</div>
			</section>
		</div>
	)
}
