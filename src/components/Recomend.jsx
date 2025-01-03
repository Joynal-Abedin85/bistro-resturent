import React from "react";
import menu from "../assets/menu/pizza-bg.jpg";

const Recomend = () => {
  return (
    <>
    <div className='w-max text-center  mx-auto my-10'>
            <h2 className="text-4xl text-amber-400 pb-2">---should try---</h2>
            <h2 className="uppercase text-5xl  border-y-4 py-3">chef recomenndeds</h2>
        </div>
    <div className="flex  gap-4 ">
      <div className="bg-gray-800  text-center space-y-2">
        <img src={menu} alt="" className="" />
        <h2 className="text-3xl">Career salad</h2>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
          adipisci.
        </p>
        <div className="">
          <button className="btn-outline border-b-4 rounded-xl border-blue-400 px-4 hover:bg-blue-300 py-3">
            Add to cart
          </button>
        </div>
      </div>
      <div className="bg-gray-800  text-center space-y-2">
        <img src={menu} alt="" className="" />
        <h2 className="text-3xl">Career salad</h2>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
          adipisci.
        </p>
        <div className="">
          <button className="btn-outline border-b-4 rounded-xl border-blue-400 px-4 hover:bg-blue-300 py-3">
            Add to cart
          </button>
        </div>
      </div>
      <div className="bg-gray-800  text-center space-y-2">
        <img src={menu} alt="" className="" />
        <h2 className="text-3xl">Career salad</h2>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
          adipisci.
        </p>
        <div className="">
          <button className="btn-outline border-b-4 rounded-xl border-blue-400 px-4 hover:bg-blue-300 py-3">
            Add to cart
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Recomend;
