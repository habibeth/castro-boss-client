import BannerTitle from "../../../components/BannerTitle";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import '@smastrom/react-rating/style.css'
import { Rating } from "@smastrom/react-rating";

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    // console.log(reviews)
    return (
        <div className="max-w-6xl mx-auto mb-24">
            <BannerTitle heading={"What Our Clients Say"} subHeading={"TESTIMONIALS"}></BannerTitle>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >

                {
                    reviews?.map(review => <SwiperSlide key={review._id}>
                        <div className="">
                        <div className="flex flex-col items-center mx-24 my-16">
                            <Rating
                                className='py-12'
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <FaQuoteLeft className="text-8xl" />
                            <p className='pt-12'>{review.details}</p>
                            <h2 className='text-3xl text-orange-600 mt-1'>{review.name}</h2>
                        </div>
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

export default Reviews;