import SectionTitle from './../../../Components/SectionTitle/SectionTitle';
import { useLoaderData } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import swal from 'sweetalert';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';



const Update = () => {
  const item = useLoaderData()
  const indItem = item?.data;
  const {name, category, recipe,price, _id, } = indItem;
  console.log(indItem)
  const { register, handleSubmit } = useForm();
  const axiosSecure = useAxiosSecure()
  const axiosPublic = useAxiosPublic()

  const IMAGE_HOSTING_KEY = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const imageHostingApi = `https://api.imgbb.com/1/upload?key=${IMAGE_HOSTING_KEY}`;



  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(imageHostingApi, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (res.data?.success) {
      const updatedMenuItem = {
        name: data.name,
        category: data.category,
        price: data.price,
        recipe: data.recipe,
        image: res.data?.data?.display_url,
      };


      const menuRes = await axiosSecure.patch(`/menu/${_id}`, updatedMenuItem);

      if (menuRes?.data?.modifiedCount > 0) {
        swal({
          title: "Good job!",
          text: `Item is Updated Successfully!`,
          icon: "success",
          button: "Aww yiss!",
        });
      }
    }
  };


  
  return (
    <div>
      <SectionTitle heading={'Update An Item'} subHeading={'Refresh info'} />

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Recipe Name */}
          <div className="form-control w-full px-2">
            <label className="label">
              <span className="label-text">Recipe Name</span>
            </label>
            <input
              type="text"
              required
              defaultValue={name}
              {...register("name")}
              placeholder="Recipe Name"
              className="input input-bordered w-full"
            />
          </div>
          <br />

          {/* Category and Price */}
          <div className="w-full flex px-2 gap-4 md:flex-nowrap flex-wrap">
            <div className="w-full">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select
                required
                defaultValue={category}
                {...register("category")}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select a Category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
                <option value="offered">Offered</option>
              </select>
            </div>

            <div className="w-full">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                required
                defaultValue={price}
                {...register("price")}
                className="select select-bordered w-full"
              />
            </div>
          </div>

          {/* Recipe Details */}
          <div className="form-control px-2">
            <label className="label">
              <span className="label-text">Recipe Details</span>
            </label>
            <textarea
            defaultValue={recipe}
              className="textarea textarea-bordered"
              {...register("recipe")}
              required
              placeholder="Recipe Details"
            ></textarea>
          </div>

          {/* Image Upload */}
          <div className="form-control w-full my-6 ps-1">
            <input
              type="file"
              className="file-input w-full max-w-xs"
              required

              {...register("image", { required: true })}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn bg-gradient-to-r from-yellow-900 to-yellow-700 ms-1"
          >
            Update Item
          </button>
        </form>
      </div>

    </div>
  )
}

export default Update
