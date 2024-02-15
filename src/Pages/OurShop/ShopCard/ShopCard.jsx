import CartItem from "../../../Shared/CartItem/CartItem";

const ShopCard = ({items}) => {
    return (
        <div className="grid md:grid-cols-3 gap-5 my-10">
            {
                items?.map(item=> <CartItem key={item._id} item={item}></CartItem>)
            }
        </div>
    );
};

export default ShopCard;