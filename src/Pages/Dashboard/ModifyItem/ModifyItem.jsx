import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import BannerTitle from "../../../components/BannerTitle";
import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import Swal from "sweetalert2";

const image_api_key = 'c604f57892d6f56456902ea3cc0ed7a4';
const upload_url = `https://api.imgbb.com/1/upload?key=${image_api_key}`
const ModifyItem = () => {
    const menuItem = useLoaderData();
    // console.log(menuItem)
    const { name, category, price, recipe, _id } = menuItem;
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit } = useForm()
    const onSubmit = async (data) => {
        const imageFile = { image: data.image[0] }
        // console.log(data)
        const res = await axiosPublic.post(upload_url, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
        })
        // console.log(res.data);
        if (res.data.success) {
            const menuItem = {
                name: data.name,
                recipe: data.recipe,
                category: data.category,
                price: data.price,
                image: res.data.data.display_url
            }
            const menuResult = await axiosSecure.patch(`/menu/${_id}`, menuItem);
            console.log(menuResult.data)
            if (menuResult.data.modifiedCount) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `Your modified ${data.name} Successfully`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    }
    return (
        <div>
            <BannerTitle heading={"UPDATE ITEM"} subHeading={"What's new?"}></BannerTitle>
            <div className="mx-32 bg-base-200 rounded-xl mb-10">
                <form onSubmit={handleSubmit(onSubmit)} className="px-20 py-10">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Recipe name*</span>
                        </label>
                        <input type="text" defaultValue={name} placeholder="Recipe name" {...register("name")} className="input input-bordered" required />
                    </div>
                    <div className="grid md:grid-cols-2 gap-5 my-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Category*</span>
                            </label>
                            <select defaultValue={category} className="select select-bordered w-full" {...register("category")}>
                                <option disabled value="default">Select a Category?</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soups</option>
                                <option value="dessert">Dessert</option>
                                <option value="drink">Drink</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Price*</span>
                            </label>
                            <input defaultValue={price} type="text" placeholder="Price" {...register("price")} className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control mb-5">
                        <label className="label">
                            <span className="label-text font-bold">Recipe Details*</span>
                        </label>
                        <textarea defaultValue={recipe} {...register("recipe")} className="textarea textarea-bordered" placeholder="Recipe Details" cols="30" rows="10"></textarea>
                    </div>
                    <div className="form-control">
                        <input type="file" {...register("image")} className="file-input file-input-bordered w-full max-w-xs" />
                    </div>
                    <div className="my-7">
                        <button className="btn bg-[#D1A054] text-white">
                            Update Items <FaUtensils></FaUtensils>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModifyItem;