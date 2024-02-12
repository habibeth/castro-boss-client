import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import ContactBanner from "../ContactBanner/ContactBanner";
import FeaturedItems from "../FeaturedItems/FeaturedItems";
import IntroBanner from "../IntroBanner/IntroBanner";
import PopularItems from "../PopularItems/PopularItems";
import PopularProducts from "../PopularProducts/PopularProducts";
import Reviews from "../Reviews/Reviews";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <IntroBanner></IntroBanner>
            <PopularItems></PopularItems>
            <ContactBanner></ContactBanner>
            <PopularProducts></PopularProducts>
            <FeaturedItems></FeaturedItems>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;