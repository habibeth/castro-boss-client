import { FaTrashAlt } from "react-icons/fa";
import BannerTitle from "../../../components/BannerTitle";
import useCart from "../../../hook/useCart";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import Swal from "sweetalert2";


const MyCart = () => {
    const [cart, refetch] = useCart();
    const axiosSecure = useAxiosSecure();
    const handleDeleteCart = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to delete this Food!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/cart/${item._id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                              Swal.fire({
                                title: "Deleted!",
                                text: `You have deleted ${item.name} Successfully.`,
                                icon: "success"
                              });

                              refetch()
                        }                        
                    })
            }
        });

    }
    return (
        <div className="bg-base-200 min-h-screen pb-20">
            <BannerTitle heading={"My Cart"} subHeading={"WANNA ADD MORE?"}></BannerTitle>
            <div className="mt-5 mx-20 bg-white">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-[#D1A054] text-white rounded-t-full">
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart?.map((item, i) => <tr key={item._id}>
                                    <th>
                                        {i + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask w-24 h-24">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>{item.price}</td>
                                    <th>
                                        <button onClick={() => handleDeleteCart(item)} className="btn text-white bg-red-800 hover:bg-red-600">
                                            <FaTrashAlt />
                                        </button>
                                    </th>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyCart;