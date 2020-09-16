import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ProjectBox(props) {
	if (props.data.temp) {
		return (
			<div className="project project__temp">
				<div className="card">
					<span>TBA</span>
				</div>
			</div>
		)
	} else {
		return (
			<Link href={{
                  pathname: "/project/" + `${props.data.slug}`,
                  query: { slug: `${props.data.slug}` },
                }} as={`/project/${props.data.slug}`}>
				<div className="project">
						<div className="card" style={{"backgroundImage": "url(" + props.data.image + ")"}}>
						</div>
						<div className="project__info">
							<h3 className="project__info--title">{props.data.name}</h3>
							<span className="project__info--type">{props.data.type}</span>
						</div>
				</div>
			</Link>
		)
	}
}
