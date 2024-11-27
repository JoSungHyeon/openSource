import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination'
import 'swiper/css'

function Container(props) {
	let data = props.propsValue;

	return (
		<div className="container">
			<Swiper
				className="viewer"
				pagination={{
					clickable: true,
					renderBullet: (index, className) => {
						return `<span class="${className}">${index + 1}</span>`;
					}
				}}

				modules={[Pagination]}
			>
				{
					data.map((d, i) => 
						<SwiperSlide key={i+1}><img src={"/images/" + d.image} alt={"slide" + (i+1)} /></SwiperSlide>
					)
				}
			</Swiper>
		</div>
	);
}

export default Container;