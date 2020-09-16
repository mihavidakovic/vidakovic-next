import Head from 'next/head'
import { useState, useEffect } from 'react';
import _ from 'lodash';
import SliderSlick from "react-slick";

function Slider(props) {
	const [images, setImages] = useState();

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		lazyLoad: false,
		autoplay: true,
		autoplaySpeed: 6001,
		cssEase: "ease-in-out"
	};

	const slider = (
		<SliderSlick className="content-slider" {...settings}>
			{props.images.map((image, key) => {
				return(
					<div className="slide-block" key={key}>
						<div className="slide-block__content">
							{image.description === "" ? (
								<>
								</>
							) : (
								<div className="content__description">
									<span>{image.description}</span>
								</div>
							)}
							<img src={image.image} />
						</div>
					</div>
				)
			})
			}
		</SliderSlick>
	);

	return (
		<>
			{slider}
		</>
	)

}

export default Slider