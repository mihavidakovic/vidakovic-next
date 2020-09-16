import Head from 'next/head'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { withRouter } from 'next/router'
import { Link } from 'next/link'
import _ from 'lodash';

import Slider from '../../components/Slider/Slider';

export async function getServerSideProps(context) {
	return {
		props: {}, // will be passed to the page component as props
	};
}

function Project({router}) {

	const [ProjectData, setProjectData] = useState();

	useEffect(() => {
		fetch("/projects.json")
			.then( response => {
				if (!response.ok) { throw response }
				return response.json()  //we only get here if there is no error
			})
			.then( json => {
				setProjectData(_.filter(json, {"slug": router.query.slug}))
			})
			.catch( err => {
				console.log(err)
			});
	}, [])

	if (ProjectData) {
		let data = ProjectData[0];

		return (
			<div className="">
				<Head>
					<title>{data.name} - Vidakovic.si</title>
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
				<header className="pageHeader">
					<div className="container">
						<Link to="/">
							<img src="/img/logo-bw.svg" className="logo" alt="logo" />
						</Link>
						<div className="social">
							<div className="linkedin">
								<a href="https://www.linkedin.com/in/mihavidakovic" target="_blank" rel="noopener noreferrer">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM183 384h-55V213h55v171zm-25.6-197h-.4c-17.6 0-29-13.1-29-29.5 0-16.7 11.7-29.5 29.7-29.5s29 12.7 29.4 29.5c0 16.4-11.4 29.5-29.7 29.5zM384 384h-55v-93.5c0-22.4-8-37.7-27.9-37.7-15.2 0-24.2 10.3-28.2 20.3-1.5 3.6-1.9 8.5-1.9 13.5V384h-55V213h55v23.8c8-11.4 20.5-27.8 49.6-27.8 36.1 0 63.4 23.8 63.4 75.1V384z"/></svg>
								</a>
							</div>
							<div className="twitter">
								<a href="https://twitter.com/mihavidakovic" target="_blank" rel="noopener noreferrer">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M492 109.5c-17.4 7.7-36 12.9-55.6 15.3 20-12 35.4-31 42.6-53.6-18.7 11.1-39.4 19.2-61.5 23.5C399.8 75.8 374.6 64 346.8 64c-53.5 0-96.8 43.4-96.8 96.9 0 7.6.8 15 2.5 22.1-80.5-4-151.9-42.6-199.6-101.3-8.3 14.3-13.1 31-13.1 48.7 0 33.6 17.2 63.3 43.2 80.7-16-.4-31-4.8-44-12.1v1.2c0 47 33.4 86.1 77.7 95-8.1 2.2-16.7 3.4-25.5 3.4-6.2 0-12.3-.6-18.2-1.8 12.3 38.5 48.1 66.5 90.5 67.3-33.1 26-74.9 41.5-120.3 41.5-7.8 0-15.5-.5-23.1-1.4C62.8 432 113.7 448 168.3 448 346.6 448 444 300.3 444 172.2c0-4.2-.1-8.4-.3-12.5C462.6 146 479 129 492 109.5z"/></svg>
								</a>
							</div>
							<div className="mail">
								<a href="mailto:miha@vidakovic.si" target="_blank" rel="noopener noreferrer">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M460.6 147.3L353 256.9c-.8.8-.8 2 0 2.8l75.3 80.2c5.1 5.1 5.1 13.3 0 18.4-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8l-75-79.9c-.8-.8-2.1-.8-2.9 0L313.7 297c-15.3 15.5-35.6 24.1-57.4 24.2-22.1.1-43.1-9.2-58.6-24.9l-17.6-17.9c-.8-.8-2.1-.8-2.9 0l-75 79.9c-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8c-5.1-5.1-5.1-13.3 0-18.4l75.3-80.2c.7-.8.7-2 0-2.8L51.4 147.3c-1.3-1.3-3.4-.4-3.4 1.4V368c0 17.6 14.4 32 32 32h352c17.6 0 32-14.4 32-32V148.7c0-1.8-2.2-2.6-3.4-1.4z"/><path d="M256 295.1c14.8 0 28.7-5.8 39.1-16.4L452 119c-5.5-4.4-12.3-7-19.8-7H79.9c-7.5 0-14.4 2.6-19.8 7L217 278.7c10.3 10.5 24.2 16.4 39 16.4z"/></svg>
								</a>
							</div>
							<div className="dribbble">
								<a href="https://dribbble.com/mihavidakovic" target="_blank" rel="noopener noreferrer">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 64C150 64 64 150 64 256c0 106.1 86 192 192 192s192-85.9 192-192c0-106-86-192-192-192zm121.9 88.5c21.6 25.4 35.3 57.6 37.7 92.9-34.6-1.8-76-1.8-109.2 1.3-4.2-10.6-8.5-21-13.2-31 38.3-16.6 67.8-38.4 84.7-63.2zM256 96c38.8 0 74.4 13.8 102.1 36.8-17.4 22-44.7 41.1-78.7 55.6-18.6-34.4-40-64-62.8-87.3 12.7-3.2 25.8-5.1 39.4-5.1zm-72.4 17.5c23.1 23 44.8 52.3 63.8 86.6-36.1 11-77.5 17.3-121.7 17.3-8.4 0-16.6-.3-24.7-.8 11.5-45.1 42-82.5 82.6-103.1zM96.3 248.4c9.1.4 18.3.6 27.6.5 50.4-.6 97.3-8.5 137.6-21.4 3.8 7.9 7.4 16 10.8 24.3-5.5 1.3-10.4 2.7-14.3 4.3-55.1 23.1-98.5 60.4-122 105.5-24.8-28.2-40-65.1-40-105.6 0-2.6.1-5.1.3-7.6zM256 416c-37 0-71-12.6-98.1-33.7 21.3-42.2 59.3-77.1 107.2-98.8 4.5-2.1 10.5-3.8 17.4-5.3 5.7 15.8 10.8 32.2 15.3 49.2 6.9 26.5 11.8 52.7 14.8 78.1C295 412.2 276 416 256 416zm86.5-25.5c-3-25.7-7.9-52.1-14.9-78.9-3.4-13-7.3-25.6-11.5-37.9 31.4-2.6 69-2.2 98.9 0-5.4 49.1-33 91.3-72.5 116.8z"/></svg>
								</a>
							</div>
						</div>
					</div>
				</header>
				<section className="page project">
					<div className="container">
				 		<div className="page__back" onClick={() => router.back()}>
				 			<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-left" class="svg-inline--fa fa-arrow-left fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path></svg>
				 			<span>Back</span>
				 		</div>
				 		<div className="project__info">
				 			<h2 className="project__info--name">{data.name}</h2>
				 			<span className="project__info--description">{data.description}</span>
				 			<div className="project__info--tags">
				 				<span>Technologies used:</span>
				 				{data.tags.map((tag, index) => {
				 					return(
						 				<div className="tag" key={index}>
						 					{tag}
						 				</div>
				 					)
				 				})}
				 			</div>
				 			<Slider images={data.images} />
				 		</div>
					 </div>
				</section>
			</div>
		)
	} else {
		return (
			<>
				<header className="pageHeader">
					<div className="container">
						<img src="/img/logo-bw.svg" className="logo" alt="logo" />
						<div className="social">
							<div className="linkedin">
								<a href="https://www.linkedin.com/in/mihavidakovic" target="_blank" rel="noopener noreferrer">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM183 384h-55V213h55v171zm-25.6-197h-.4c-17.6 0-29-13.1-29-29.5 0-16.7 11.7-29.5 29.7-29.5s29 12.7 29.4 29.5c0 16.4-11.4 29.5-29.7 29.5zM384 384h-55v-93.5c0-22.4-8-37.7-27.9-37.7-15.2 0-24.2 10.3-28.2 20.3-1.5 3.6-1.9 8.5-1.9 13.5V384h-55V213h55v23.8c8-11.4 20.5-27.8 49.6-27.8 36.1 0 63.4 23.8 63.4 75.1V384z"/></svg>
								</a>
							</div>
							<div className="twitter">
								<a href="https://twitter.com/mihavidakovic" target="_blank" rel="noopener noreferrer">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M492 109.5c-17.4 7.7-36 12.9-55.6 15.3 20-12 35.4-31 42.6-53.6-18.7 11.1-39.4 19.2-61.5 23.5C399.8 75.8 374.6 64 346.8 64c-53.5 0-96.8 43.4-96.8 96.9 0 7.6.8 15 2.5 22.1-80.5-4-151.9-42.6-199.6-101.3-8.3 14.3-13.1 31-13.1 48.7 0 33.6 17.2 63.3 43.2 80.7-16-.4-31-4.8-44-12.1v1.2c0 47 33.4 86.1 77.7 95-8.1 2.2-16.7 3.4-25.5 3.4-6.2 0-12.3-.6-18.2-1.8 12.3 38.5 48.1 66.5 90.5 67.3-33.1 26-74.9 41.5-120.3 41.5-7.8 0-15.5-.5-23.1-1.4C62.8 432 113.7 448 168.3 448 346.6 448 444 300.3 444 172.2c0-4.2-.1-8.4-.3-12.5C462.6 146 479 129 492 109.5z"/></svg>
								</a>
							</div>
							<div className="mail">
								<a href="mailto:miha@vidakovic.si" target="_blank" rel="noopener noreferrer">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M460.6 147.3L353 256.9c-.8.8-.8 2 0 2.8l75.3 80.2c5.1 5.1 5.1 13.3 0 18.4-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8l-75-79.9c-.8-.8-2.1-.8-2.9 0L313.7 297c-15.3 15.5-35.6 24.1-57.4 24.2-22.1.1-43.1-9.2-58.6-24.9l-17.6-17.9c-.8-.8-2.1-.8-2.9 0l-75 79.9c-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8c-5.1-5.1-5.1-13.3 0-18.4l75.3-80.2c.7-.8.7-2 0-2.8L51.4 147.3c-1.3-1.3-3.4-.4-3.4 1.4V368c0 17.6 14.4 32 32 32h352c17.6 0 32-14.4 32-32V148.7c0-1.8-2.2-2.6-3.4-1.4z"/><path d="M256 295.1c14.8 0 28.7-5.8 39.1-16.4L452 119c-5.5-4.4-12.3-7-19.8-7H79.9c-7.5 0-14.4 2.6-19.8 7L217 278.7c10.3 10.5 24.2 16.4 39 16.4z"/></svg>
								</a>
							</div>
							<div className="dribbble">
								<a href="https://dribbble.com/mihavidakovic" target="_blank" rel="noopener noreferrer">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 64C150 64 64 150 64 256c0 106.1 86 192 192 192s192-85.9 192-192c0-106-86-192-192-192zm121.9 88.5c21.6 25.4 35.3 57.6 37.7 92.9-34.6-1.8-76-1.8-109.2 1.3-4.2-10.6-8.5-21-13.2-31 38.3-16.6 67.8-38.4 84.7-63.2zM256 96c38.8 0 74.4 13.8 102.1 36.8-17.4 22-44.7 41.1-78.7 55.6-18.6-34.4-40-64-62.8-87.3 12.7-3.2 25.8-5.1 39.4-5.1zm-72.4 17.5c23.1 23 44.8 52.3 63.8 86.6-36.1 11-77.5 17.3-121.7 17.3-8.4 0-16.6-.3-24.7-.8 11.5-45.1 42-82.5 82.6-103.1zM96.3 248.4c9.1.4 18.3.6 27.6.5 50.4-.6 97.3-8.5 137.6-21.4 3.8 7.9 7.4 16 10.8 24.3-5.5 1.3-10.4 2.7-14.3 4.3-55.1 23.1-98.5 60.4-122 105.5-24.8-28.2-40-65.1-40-105.6 0-2.6.1-5.1.3-7.6zM256 416c-37 0-71-12.6-98.1-33.7 21.3-42.2 59.3-77.1 107.2-98.8 4.5-2.1 10.5-3.8 17.4-5.3 5.7 15.8 10.8 32.2 15.3 49.2 6.9 26.5 11.8 52.7 14.8 78.1C295 412.2 276 416 256 416zm86.5-25.5c-3-25.7-7.9-52.1-14.9-78.9-3.4-13-7.3-25.6-11.5-37.9 31.4-2.6 69-2.2 98.9 0-5.4 49.1-33 91.3-72.5 116.8z"/></svg>
								</a>
							</div>
						</div>
					</div>
				</header>
				<section className="page page__loading">
					<div className="container">
						<span className="loading">Loading project...</span>
					</div>
				</section>
			</>
		)
	}
}

export default withRouter(Project)