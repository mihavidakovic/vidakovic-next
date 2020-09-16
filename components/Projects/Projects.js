import { useState, useEffect, useRef } from 'react';
import useOnScreen from '../../hooks/useOnScreen';

import ProjectBox from '../Project/ProjectBox';

export default function Projects() {
	const ref = useRef();
	const onScreen = useOnScreen(ref, '-100px');
	const [data, setData] = useState();

	useEffect(() => {
		fetch("/projects.json")
			.then( response => {
				if (!response.ok) { throw response }
				return response.json()  //we only get here if there is no error
			})
			.then( json => {
				setData(json)
			})
			.catch( err => {
				console.log(err)
			});
	}, [setData])


	if (data) {
		return (
			<div className={onScreen ? "projects fadeIn" : "projects"} ref={ref}>
				{data.map((project, index) => {
					return (
							<>
								<ProjectBox data={project} key={index} />
							</>
						)
				}) }
			</div>
		)
	} else {
		return (
			<div className={onScreen ? "projects fadeIn" : "projects"} ref={ref}>
				<p>loading</p>
			</div>

		)
	}
}
