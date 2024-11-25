import { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';

function MainSlider() {

  return (
		<div className="main_slider">
			<Swiper
				autoplay={{
					delay: 5000
				}}
				speed={1200}
				loop={true}
				pagination={{
					type: 'fraction',
			  	}}
			  	navigation={true}
			  	modules={[Autoplay, Pagination]}
			  	className="swiper-container mainSwiper"
			>
				<SwiperSlide className="swiper-slide">
						<div className="text_box">
							<span>Creative SeoulMoksoo</span>
							<p>서울목수는 젊은 목수들로 구성되어있는 팀으로 상업공간과 주거공간 및<br /> 기타공간의 인테리어의 목수파트를 담당하고 있습니다.
							</p>
							<a href="">View More +</a>
						</div>
						<img src="images/background.jpg" alt="image1" />
				</SwiperSlide>
				<SwiperSlide className="swiper-slide">
						<div className="text_box">
							<span>Creative SeoulMoksoo</span>
							<p>서울목수는 젊은 목수들로 구성되어있는 팀으로 상업공간과 주거공간 및<br /> 기타공간의 인테리어의 목수파트를 담당하고 있습니다.
							</p>
							<a href="">View More +</a>
						</div>
						<img src="images/comspace.jpg" alt="image2" />
				</SwiperSlide>
				<SwiperSlide className="swiper-slide">
						<div className="text_box">
							<span>Creative SeoulMoksoo</span>
							<p>서울목수는 젊은 목수들로 구성되어있는 팀으로 상업공간과 주거공간 및<br /> 기타공간의 인테리어의 목수파트를 담당하고 있습니다.
							</p>
							<a href="">View More +</a>
						</div>
						<img src="images/etcspace.jpg" alt="image3" />
				</SwiperSlide>
				<SwiperSlide className="swiper-slide">
						<div className="text_box">
							<span>Creative SeoulMoksoo</span>
							<p>서울목수는 젊은 목수들로 구성되어있는 팀으로 상업공간과 주거공간 및<br /> 기타공간의 인테리어의 목수파트를 담당하고 있습니다.
							</p>
							<a href="">View More +</a>
						</div>
						<img src="images/resspace.jpg" alt="image4" />
				</SwiperSlide>
			</Swiper>
			{/* <div className="account">
				<span className="current"></span> / <span className="total"></span>
			</div> */}
			<div className="icon_scroll">
				<div className="icon_box">
					<img src="images/icon_scroll.png" alt="icon scroll" />
				</div>
			</div>
		</div>
  )
}

export default MainSlider