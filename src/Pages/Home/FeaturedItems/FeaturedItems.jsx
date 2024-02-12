import BannerTitle from "../../../components/BannerTitle";
import featureBg from "../../../assets/home/featured.jpg"

const FeaturedItems = () => {
    return (
        <div className="my-20" style={{ backgroundImage: `url(${featureBg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
            <div className="bg-gray-900 bg-opacity-50">
                <div className="py-14 text-white">
                    <BannerTitle heading={"FROM OUR MENU"} subHeading={"Check it out"}></BannerTitle>
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-5 items-center">
                            <img src={featureBg} alt="" className="h-[300px] w-full" />
                            <div className="">
                                <h2 className="text-xl">March 20, 2023 <br />
                                    WHERE CAN I GET SOME?</h2>
                                <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                                <button className="text-white border-b-4 border-white px-7 py-3 rounded-lg">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedItems;