import BannerTitle from "../../../components/BannerTitle";
import useMenu from "../../../hook/useMenu";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import CartItem from '../../../Shared/CartItem/CartItem'

const PopularProducts = () => {
    const [menu] = useMenu();
    const popularItems = menu?.filter(item => item.category === "popular");
    
    return (
        <div className="max-w-6xl mx-auto my-10">
            <BannerTitle heading={"CHEF RECOMMENDS"} subHeading={"Should Try"}></BannerTitle>
            <div className="">
                <Swiper
                    slidesPerView={3}
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

                    {
                        popularItems?.map(item => <SwiperSlide key={item._id}>
                            <CartItem item={item}></CartItem>
                        </SwiperSlide>)
                    }

                </Swiper>

            </div>
        </div>
    );
};

export default PopularProducts;