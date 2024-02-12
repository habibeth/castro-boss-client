import PopularMenu from "../../../Shared/PopularMenu/PopularMenu";
import CategoryBanner from "../../../components/CategoryBanner";



const MenuCategory = ({heading, subHeading, items, bannerImg}) => {
    console.log(items)
    return (
        <div className="max-w-6xl mx-auto my-10">
            <div className="">
                {heading && <CategoryBanner heading={heading} subHeading={subHeading} bannerImg={bannerImg}></CategoryBanner>}
            </div>
            <div className="grid md:grid-cols-2 gap-5 my-16">
                {
                    items?.map(item=> <PopularMenu key={item._id} item={item}></PopularMenu>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;