

const PopularMenu = ({ item }) => {
    const { name, recipe, image, price } = item;
    // setCategory(category)
    return (
        <div className="flex items-center">
            <img src={image} alt="" className="w-32" style={{ borderRadius: "0px 200px 200px 200px" }} />
            <div className="ml-5">
                <h2 className="text-xl font-medium">{name}---------------</h2>
                <p>{recipe}</p>
            </div>
            <p className="ml-5 text-orange-600 font-bold">${price}</p>            
        </div>
    );
};

export default PopularMenu;