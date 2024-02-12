import CategoryBanner from "../../components/CategoryBanner";

import offeredBanner from '../../assets/menu/banner3.jpg'
import saladBanner from '../../assets/menu/salad-bg.jpg'
import soupBanner from '../../assets/menu/soup-bg.jpg'
import dessertBanner from '../../assets/menu/dessert-bg.jpeg'
import pizzaBanner from '../../assets/menu/pizza-bg.jpg'
import useMenu from "../../hook/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";


const OurMenu = () => {
    const [items] = useMenu();
    const offered = items?.map(item=> item.category === "offered");
    const salad = items?.map(item=> item.category === "salad");
    const soup = items?.map(item=> item.category === "soup");
    const dessert = items?.map(item=> item.category === "dessert");
    const pizza = items?.map(item=> item.category === "pizza");
    return (
        <div>
            <CategoryBanner bannerImg={offeredBanner} heading={"OUR MENU"} subHeading={"WOULD YOU LIKE TO TRY A DISH?"}></CategoryBanner>
            <MenuCategory item={offered}></MenuCategory>
        </div>
    );
};

export default OurMenu;