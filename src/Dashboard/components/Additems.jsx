import React from "react";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
// import { data } from 'react-router-dom';
import { register } from "swiper/element";
import useaxiospublic from "../../hook/useaxiospublic";
import useaxios from "../../hook/useaxios";
import Swal from "sweetalert2";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY

const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const Additems = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiospublic = useaxiospublic()
  const axiossecure = useaxios()
  const onSumit = async (data) => {
    const imagefile = {image: data.image[0]}
    const res = await axiospublic.post(image_hosting_api, imagefile, {
        headers: {
            'content-type': 'multipart/form-data'
        }
    })
    if(res.data.success){
        const menuitem = {
            name: data.name,
            category: data.category,
            price: parseFloat(data.price),
            recipe: data.recipe,
            image: res.data.data.display_url
        }
        const menures = await axiossecure.post('/menu', menuitem)
        console.log(menures.data)
        if(menures.data.insertedId){
            reset()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
        }
    }
    console.log(res.data)
  };
  return (
    <div>
      <div className="w-max text-center  mx-auto my-10">
        <h2 className="text-4xl text-amber-400 pb-2">---what's new---</h2>
        <h2 className="uppercase text-5xl  border-y-4 py-3">Add item</h2>
      </div>
      {/* <form onSubmit={handleSubmit(onSumit)}>
        <input {...register("name")} />
        <select {...register("category")} className="select select-bordered">
          <option disabled selected>
            select a category
          </option>
          <option value="salad">salad</option>
          <option value="pizza">pizza</option>
          <option value="soup">soup</option>
          <option value="dessert">dessert</option>
          <option value="drinks">drinks</option>
        </select>
        <input type="submit" />
      </form> */}
      <form onSubmit={handleSubmit(onSumit)} className="max-w-lg mx-auto bg-gray-100 p-6 rounded-md shadow-md">
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="recipeName">
          Recipe Name*
        </label>
        <input
          id="recipeName"
          {...register('name')}
          type="text"
          className="w-full p-2 border rounded"
          placeholder="Recipe name"
          required
        />
      </div>

      <div className="flex gap-4 mb-4">
        <div className="w-1/2">
          <label className="block text-sm font-bold mb-2" htmlFor="category">
            Category*
          </label>
          {/* <input {...register("name")} /> */}
        <select defaultValue='default' {...register("category")} className="select w-full ">
          <option disabled value='default'>
            select a category
          </option>
          <option value="salad">salad</option>
          <option value="pizza">pizza</option>
          <option value="soup">soup</option>
          <option value="dessert">dessert</option>
          <option value="drinks">drinks</option>
        </select>
        </div>

        <div className="w-1/2">
          <label className="block text-sm font-bold mb-2" htmlFor="price">
            Price*
          </label>
          <input
            id="price"
            type="number"
            {...register('price')}
            className="w-full p-2 border rounded"
            placeholder="Price"
            required
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="details">
          Recipe Details*
        </label>
        <textarea
        {...register('recipe')}
          id="details"
          className="w-full p-2 border rounded"
          rows="4"
          placeholder="Recipe details"
          required
        ></textarea>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="file">
          Upload File
        </label>
        <input
        {...register('image')}
          id="file"
          type="file"
          className="block w-full text-sm"
          onChange={(e) => setFile(e.target.files[0])}
        />
      </div>

      <button
        type="submit"
        className="bg-transparent text-black  btn py-2 px-4 rounded hover:bg-yellow-600"
      >
        Add Item <FaUtensils></FaUtensils>
      </button>
    </form>
    </div>
  );
};

export default Additems;
