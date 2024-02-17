import BannerTitle from "../../../components/BannerTitle";
import { FaTrashAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import Swal from "sweetalert2";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    const handleMakeAdmin = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Do you want Make Admin This Users!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Admin User!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.patch(`/users/admin/${user._id}`);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Make Admin!",
                        text: `You have Make Admin ${user.name} Successfully.`,
                        icon: "success"
                    });

                    //refetch item
                    refetch()
                }
            }
        });
    }
    const handleDeleteCart = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to delete this Food!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/users/${user._id}`);
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: `You have deleted ${user.name} Successfully.`,
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
                <BannerTitle subHeading={"Hurry Up!"} heading={"MANAGE ALL Users"}></BannerTitle>
                <div className="mt-5 mx-20 bg-white">
                    <div className="px-10 py-10">
                        <h2 className="uppercase text-3xl font-bold">Total Users: {users.length}</h2>
                    </div>
                    <div className="overflow-x-auto px-10">
                        <table className="table">
                            {/* head */}
                            <thead className="bg-[#D1A054] text-white rounded-t-full">
                                <tr>
                                    <th>
                                        #
                                    </th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users?.map((user, i) => <tr key={user._id}>
                                        <th>
                                            {i + 1}
                                        </th>
                                        <td>
                                            {user.name}
                                        </td>
                                        <td>{user.email}</td>
                                        <th>
                                            {
                                                user.role === "admin" ? "Admin" : <button onClick={() => handleMakeAdmin(user)} className="btn text-white bg-[#D1A054] hover:bg-red-600">
                                                <FaUsers />
                                            </button>
                                            }
                                        </th>
                                        <th>
                                            <button onClick={() => handleDeleteCart(user)} className="btn text-white bg-red-800 hover:bg-red-600">
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

export default AllUsers;