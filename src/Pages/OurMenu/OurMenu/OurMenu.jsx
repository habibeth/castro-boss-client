import CategoryBanner from "../../../components/CategoryBanner";

import offeredBanner from '../../../assets/menu/banner3.jpg'
import saladBanner from '../../../assets/menu/salad-bg.jpg'
import soupBanner from '../../../assets/menu/soup-bg.jpg'
import dessertBanner from '../../../assets/menu/dessert-bg.jpeg'
import pizzaBanner from '../../../assets/menu/pizza-bg.jpg'
import useMenu from "../../../hook/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
import BannerTitle from "../../../components/BannerTitle";


const OurMenu = () => {
    const [items] = useMenu();
    const offered = items?.filter(item=> item.category === "offered");
    const salad = items?.filter(item=> item.category === "salad");
    const soup = items?.filter(item=> item.category === "soup");
    const dessert = items?.filter(item=> item.category === "dessert");
    const pizza = items?.filter(item=> item.category === "pizza");
    return (
        <div>
            <CategoryBanner bannerImg={offeredBanner} heading={"OUR MENU"} subHeading={"WOULD YOU LIKE TO TRY A DISH?"}></CategoryBanner>
            <BannerTitle heading={"Don't miss"} subHeading={"TODAY'S OFFER"}></BannerTitle>
            {/* Offered Items */}
            <MenuCategory items={offered}></MenuCategory>

            {/* Desserts Items  */}
            <MenuCategory heading={"DESSERTS"} subHeading={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} bannerImg={dessertBanner} items={dessert}></MenuCategory>
            {/* Pizza items  */}
            <MenuCategory heading={"PIZZA"} subHeading={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} bannerImg={pizzaBanner} items={pizza}></MenuCategory>
            {/* salad items  */}
            <MenuCategory heading={"SALADS"} subHeading={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} bannerImg={saladBanner} items={salad}></MenuCategory>
            {/* salad items  */}
            <MenuCategory heading={"SOUPS"} subHeading={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} bannerImg={soupBanner} items={soup}></MenuCategory>
        </div>
    );
};

export default OurMenu;