import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion } from "framer-motion";

export default function ProjectBox(props) {
	const router = useRouter();

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
			<motion.a onClick={() => router.push("/project/" + `${props.data.slug}`)} className="project">
				<motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} className="card" style={{"backgroundImage": "url(" + props.data.image + ")"}}>
				</motion.div>
				<div className="project__info">
					<h3 className="project__info--title">{props.data.name}</h3>
					<span className="project__info--type">{props.data.type}</span>
				</div>
			</motion.a>
		)
	}
}
