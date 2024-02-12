import BannerTitle from "../../components/BannerTitle";


const MenuCategory = ({heading, subHeading, item}) => {
    return (
        <div>
            {
                heading && <BannerTitle heading={"Don't miss"} subHeading={"TODAY'S OFFER"}></BannerTitle>
            }
        </div>
    );
};

export default MenuCategory;