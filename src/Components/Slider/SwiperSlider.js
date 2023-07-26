
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import './SwiperSlider.css'

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import Slides from './Slides';

export default function SwiperSlides() {
    return (
        <>
            
            <Swiper

                slidesPerView="1"
                mousewheel={true}
                modules={[Pagination, Autoplay]}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
            >
                <SwiperSlide><Slides backgroundImage="/Images/slide1.jpg"/></SwiperSlide>
                <SwiperSlide><Slides backgroundImage='Images/slide2.jpg' /></SwiperSlide>
                <SwiperSlide><Slides backgroundImage='Images/slide3.jpg' /></SwiperSlide>
                <SwiperSlide><Slides backgroundImage='Images/slide4.jpg' /></SwiperSlide>
            </Swiper>
        </>
    );
}
