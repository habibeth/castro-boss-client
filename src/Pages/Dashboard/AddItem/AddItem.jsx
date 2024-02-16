import { FaUtensils } from "react-icons/fa";
import BannerTitle from "../../../components/BannerTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import Swal from "sweetalert2";

const image_api_keys = '4b32087b0cbc9f08bbafec69dc782639';
const uploadURL = `https://api.imgbb.com/1/upload?key=${image_api_keys}`
const AddItem = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async(data) => { 
        // console.log(data);
        const imageFile = {image: data.image[0]}
        const res = await axiosPublic.post(uploadURL, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
        })
        if(res.data.success){
            const menuItem = {
                name: data.name,
                recipe: data.recipe,
                category: data.category,
                price: parseFloat(data.price),
                image: res.data.data.display_url
            }
            const result = await axiosSecure.post('/menu', menuItem);
            if(result.data.insertedId){
                reset();
                Swal.fire({
                    icon: "success",
                    title: `Your Have Successfully Added ${data.name}`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        // console.log(res.data.success)
    }
    return (
        <div>
            <BannerTitle heading={"What's new?"} subHeading={"ADD AN ITEM"}></BannerTitle>
            <div className="mx-32 bg-base-200 rounded-xl mb-10">
                <form onSubmit={handleSubmit(onSubmit)} className="px-20 py-10">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Recipe name*</span>
                        </label>
                        <input type="text" placeholder="Recipe name" {...register("name")} className="input input-bordered" required />
                    </div>
                    <div className="grid md:grid-cols-2 gap-5 my-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Category*</span>
                            </label>
                            <select defaultValue="default" className="select select-bordered w-full" {...register("category")}>
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
                            <input type="text" placeholder="Price" {...register("price")} className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control mb-5">
                        <label className="label">
                            <span className="label-text font-bold">Recipe Details*</span>
                        </label>
                        <textarea {...register("recipe")} className="textarea textarea-bordered" placeholder="Recipe Details" cols="30" rows="10"></textarea>
                    </div>
                    <div className="form-control">
                        <input type="file" {...register("image")} className="file-input file-input-bordered w-full max-w-xs" />
                    </div>
                    <div className="my-7">
                        <button className="btn bg-[#D1A054] text-white">
                            Add Items <FaUtensils></FaUtensils>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItem;