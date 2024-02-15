import Swal from 'sweetalert2';
import useAuth from '../../hook/useAuth'
import useAxiosPublic from '../../hook/useAxiosPublic';
import useAxiosSecure from '../../hook/useAxiosSecure';


const CartItem = ({ item }) => {
    const {user} = useAuth();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const { name, image, recipe, price, _id } = item;
    const handleAddToCart = () => {
        console.log("button is clicked")
        if (user && user.email) {
            // console.log(user)
            // console.log(user.email, food)
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }

            axiosSecure.post('/cart', cartItem)
                .then(res => {
                    console.log(res.data)
                    // if (res.data.insertedId) {
                    //     Swal.fire({
                    //         icon: "success",
                    //         title: `${name} Successfully Added`,
                    //         showConfirmButton: false,
                    //         timer: 1500
                    //     });
                    // }

                })

        }
        

    }
    return (
        <div className="relative">
            <div className=" bg-gray-100">
                <figure><img src={image} alt="item image" /></figure>
                <p className='text-white px-5 py-2 bg-[#111827] absolute top-5 right-5'>{price}</p>
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">{name}</h2>
                    <p className="text-center my-2">{recipe}</p>
                    <div className="flex justify-center pb-10">
                        <button onClick={() => handleAddToCart()} className="btn btn-outline mt-5 border-0 border-b-4 uppercase text-yellow-600 bg-slate-100">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CartItem;