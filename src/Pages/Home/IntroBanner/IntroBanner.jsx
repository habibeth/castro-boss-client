import CategoryBanner from '../../../components/CategoryBanner'
import introImg from '../../../assets/home/chef-service.jpg'
const IntroBanner = () => {
    return (
        <div className='max-w-6xl mx-auto my-10'>
            <CategoryBanner bannerImg={introImg} heading={"Bistro Boss"} subHeading={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."}></CategoryBanner>
        </div>
    );
};

export default IntroBanner;