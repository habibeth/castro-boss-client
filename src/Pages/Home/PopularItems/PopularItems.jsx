import PopularMenu from "../../../Shared/PopularMenu/PopularMenu";
import BannerTitle from "../../../components/BannerTitle";
import useMenu from "../../../hook/useMenu";


const PopularItems = () => {
    const [items] = useMenu();
    const popularItems = items?.filter(item=> item.category === "popular")
    console.log(popularItems)
    return (
        <div className="max-w-6xl mx-auto my-10">
            <BannerTitle heading={"FROM OUR MENU"} subHeading={"Check it out"}></BannerTitle>
            <div className="grid md:grid-cols-2 gap-8">
                {
                    popularItems?.map(item=> <PopularMenu key={item._id} item={item}></PopularMenu>)
                }
            </div>
        </div>
    );
};

export default PopularItems;