import React from "react";
import SectionTitle from "./../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import { FaUtensilSpoon } from "react-icons/fa";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const IMAGE_HOSTING_KEY = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${IMAGE_HOSTING_KEY}`

const AddItems = () => {

    const axiosPublic = useAxiosPublic()
  const { register, handleSubmit } = useForm();
  const onSubmit = async(data) => {
    console.log(data);
const imageFile = {image: data.image[0]}
const res = await axiosPublic.post(image_hosting_api,imageFile,{
    headers: {
        'content-type': 'multipart/form-data'
    }
})
console.log(res.data)
if(res.data.display_url){
    const menuItem = {
         name: data.name,
         category: data.category,
         price: data.price,
         recipe: data.recipe,
         image: res.data?.data?.display_url
    }
}
  };



  return (
    <div className="py-8">
      <SectionTitle heading={"Add an item"} subHeading={"whats new?"} />
      <div>
      <form onSubmit={handleSubmit(onSubmit)}>
<div className="form-control w-full px-2">
          <label className="label">
            <span className="label-text">Recipe Name</span>
          </label>
          <input
            type="text" required
            {...register("name")}
            placeholder="Recipe Name"
            className="input input-bordered w-full"
          />
</div>
<br />

<div className="w-full flex px-2 gap-4 md:flex-nowrap flex-wrap">
<div className="w-full">
<label className="label">
            <span className="label-text">Category</span>
          </label>
          <select required defaultValue={'default'}
            {...register("category")}
            className="select select-bordered w-full"
          >
            <option disabled value={'default'}>
              Select a Category
            </option>
            <option value="Salad">Salad</option>
            <option value="Pizza">Pizza</option>
            <option value="Soup">Soup</option>
            <option value="Dessert">Dessert</option>
            <option value="Drinks">Drinks</option>
          </select>
</div>

<div className="w-full">
<label className="label">
            <span className="label-text">Price</span>
          </label> 
          <input type="number" required
            {...register("price")}
            className="select select-bordered w-full"
         />
</div>
</div>
{/* Recipy Details */}
<div className="form-control px-2">
    <label className="label">
        <span className="label-text">
            Recipe Details
        </span>
    </label>
    <textarea className="textarea 
    textarea-bordered"
    {...register("recipe")} required placeholder="Recipe Details"></textarea>
</div>

<div className="form-control w-full my-6 ps-1">
<input
  type="file"
  className="file-input w-full max-w-xs"
  required
  {...register("image", { required: true })}
/>

</div>
<button type="submit" className="btn bg-gradient-to-r from-yellow-900 to-yellow-700"><FaUtensilSpoon /> Add Item 
</button>  
</form>
      </div>
    </div>
  );
};

export default AddItems;
