import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import IntroBanner from "../IntroBanner/IntroBanner";
import PopularItems from "../PopularItems/PopularItems";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <IntroBanner></IntroBanner>
            <PopularItems></PopularItems>
        </div>
    );
};

export default Home;