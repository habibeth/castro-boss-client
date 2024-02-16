import { FaTrashAlt } from "react-icons/fa";
import BannerTitle from "../../../components/BannerTitle";
import useMenu from "../../../hook/useMenu";
import { SlNote } from "react-icons/sl";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import Swal from "sweetalert2";


const ManageItems = () => {
    const [menu, refetch] = useMenu();
    const axiosSecure = useAxiosSecure()

    const handleDeleteCart = async(item) => {
        console.log(item)
        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to delete this Food!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async(result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`);
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: `You have deleted ${item.name} Successfully.`,
                        icon: "success"
                    });

                    //refetch item
                    refetch()
                }
            }
        });
        

    }
    return (
        <div>
            <div className="bg-base-200 min-h-screen pb-20">
                <BannerTitle heading={"Hurry Up!"} subHeading={"MANAGE ALL ITEMS"}></BannerTitle>
                <div className="mt-5 mx-20 bg-white">
                    <div className="px-10 py-10">
                        <h2 className="uppercase text-3xl font-bold">Total Items: {menu.length}</h2>
                    </div>
                    <div className="overflow-x-auto px-10">
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
                                    <th>Modify</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    menu?.map((item, i) => <tr key={item._id}>
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
                                            <Link to={`/dashboard/updateItem/${item._id}`}>
                                                <button className="btn text-xl text-white bg-[#D1A054]">
                                                    <SlNote />
                                                </button>
                                            </Link>
                                        </th>
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
        </div>
    );
};

export default ManageItems;