import CartButton from "../../components/CartButton";


const CartItem = ({ items }) => {
    // const { name, image, recipe } = items;
    // console.log(items)
    return (
        <div className="grid md:grid-cols-3 gap-5 my-10">
            {
                items?.map(item => <div key={item._id} className=" bg-gray-100">
                    <figure><img src={item.image} alt="item image" /></figure>
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold">{item.name}</h2>
                        <p className="text-center my-2">{item.recipe}</p>
                        <CartButton buttonText={"add to cart"}></CartButton>
                    </div>
                </div>)
            }
        </div>

    );
};

export default CartItem;