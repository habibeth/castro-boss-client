import BannerTitle from "../../../components/BannerTitle";
import useMenu from "../../../hook/useMenu";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import CartButton from "../../../components/CartButton";


const PopularProducts = () => {
    const [items] = useMenu();
    const popularItems = items?.filter(item => item.category === "popular")
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
                            <div className=" bg-gray-100">
                                <figure><img src={item.image} alt="item image" /></figure>
                                <div className="card-body">
                                    <h2 className="text-center text-2xl font-bold">{item.name}</h2>
                                    <p className="text-center my-2">{item.recipe}</p>
                                    <CartButton buttonText={"add to cart"}></CartButton>                                    
                                </div>
                            </div>
                        </SwiperSlide>)
                    }
                    
                </Swiper>

            </div>
        </div>
    );
};

export default PopularProducts;