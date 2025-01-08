import React from "react";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import SectionTitle from "../../Components/SectionTitle";
import useAxiosPublic from "../../Pages/Shared/Custom/useAxiosPublic";
import useAxiosSecure from "../../Pages/Shared/Custom/useAxiosSecure";

const imageBB = import.meta.env.VITE_IMAGEBB;
const image_hosting_key = `https://api.imgbb.com/1/upload?key=${imageBB}`;
function UpdateItem() {
  const updateItem = useLoaderData();
  console.log(updateItem);
  const { _id, name, category, recipe, price } = updateItem;

  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log("data from on submit", data);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_key, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    console.log("its from image file", res);
    if (res.data.success) {
      const itemInfo = {
        name: data.name,
        category: data.category,
        price: data.price,
        recipe: data.recipe,
        image: res.data.data.display_url,
      };

      console.log("its from itemInfo", itemInfo);
      const responseItem = await axiosSecure.patch(
        `/updateItem/${_id}`,
        itemInfo
      );
      if (responseItem.data.modifiedCount > 0) {
        // reset();
        Swal.fire("Updated successfully");
      }
    }
  };

  return (
    <div>
      <SectionTitle title={`Update Item Now `} />
      <h4 className="text-center text-xl font-semibold text-gray-400 my-5">
        {" "}
        Update Item Name : {updateItem?.name}
      </h4>

      <form
        className="border p-10 rounded-xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text text-white">Recipe Name</span>
          </div>
          <input
            type="text"
            {...register("name", { required: true })}
            name="name"
            defaultValue={name}
            placeholder="Recipe Name "
            className="input input-bordered w-full "
            required
          />
        </label>

        <div className="flex gap-x-5 items-center">
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text text-white">Category</span>
            </div>
            <select
              defaultValue={category}
              name="category"
              {...register("category", { required: true })}
              className="input input-bordered w-full "
              id=""
            >
              <option disabled value="default">
                Select{" "}
              </option>
              <option value="salad">Salad</option>
              <option value="pizza">Pizza</option>
              <option value="soup">Soup</option>
              <option value="desserts">Desserts</option>
              <option value="drinks">Drinks</option>
            </select>
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text text-white">Price</span>
            </div>
            <input
              type="number"
              name="price"
              defaultValue={price}
              {...register("price", { required: true })}
              placeholder="$ Price"
              className="input input-bordered w-full "
              required
            />
          </label>
        </div>

        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text text-white">Recipe Details</span>
          </div>
          <textarea
            type="text"
            defaultValue={recipe}
            {...register("recipe", { required: true })}
            name="recipe"
            placeholder="Recipe Details "
            className="input input-bordered w-full h-44"
            required
          />
        </label>
        <input
          type="file"
          {...register("image", { required: true })}
          name="image"
          className="file-input  w-full block mt-5"
        />
        <button className="btn  my-7 bg-purple-600 text-white font-bold flex items-center gap-x-2">
          Update Items <FaUtensils />
        </button>
      </form>
    </div>
  );
}

export default UpdateItem;
