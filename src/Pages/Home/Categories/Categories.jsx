import BannerTitle from "../../../components/BannerTitle";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';



import categoryImg1 from '../../../assets/home/slide1.jpg'
import categoryImg2 from '../../../assets/home/slide2.jpg'
import categoryImg3 from '../../../assets/home/slide3.jpg'
import categoryImg4 from '../../../assets/home/slide4.jpg'

const Categories = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <BannerTitle heading={"ORDER ONLINE"} subHeading={"From 11:00am to 10:00pm"}></BannerTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={categoryImg1} alt="" className="w-full" />
                    <h2 className="uppercase text-3xl text-center font-medium absolute bottom-5 left-[30%] text-white">Salads</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={categoryImg2} alt="" className="w-full" />
                    <h2 className="uppercase text-3xl text-center font-medium absolute bottom-5 left-[30%] text-white">soups</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={categoryImg3} alt="" className="w-full" />
                    <h2 className="uppercase text-3xl text-center font-medium absolute bottom-5 left-[30%] text-white">Pizzas</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={categoryImg4} alt="" className="w-full" />
                    <h2 className="uppercase text-3xl text-center font-medium absolute bottom-5 left-[30%] text-white">Desserts</h2>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Categories;