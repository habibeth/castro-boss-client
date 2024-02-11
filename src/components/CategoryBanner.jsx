import { Parallax } from 'react-parallax';


const CategoryBanner = ({ bannerImg, heading, subHeading }) => {
    return (
        <Parallax blur={{ min: -15, max: 15 }} bgImage={bannerImg} bgImageAlt="Banner for Category ">
            <div className="hero h-[600px]">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="px-60 py-20 bg-black bg-opacity-30 text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold uppercase">{heading}</h1>
                            <p className="mb-5">{subHeading}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default CategoryBanner;