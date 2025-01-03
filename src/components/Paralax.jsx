import React from "react";
import slide5 from '../assets/home/slide5.jpg'


const Paralax = () => {
  return (
    <div
      className={` w-full bg-[url('./assets/home/chef-service.jpg')] bg-cover bg-center bg-black bg-opacity-60  bg-blend-overlay flex items-center flex-col my-10`}
    >
      <div className="w-max text-center  mx-auto my-10">
        <h2 className="text-4xl text-amber-400 pb-2">---check it out---</h2>
        <h2 className="uppercase text-5xl  border-y-4 py-3">from our menu</h2>
      </div>
      <div className="flex gap-8 justify-center items-center w-5/6 mx-auto pb-10">
        <div className="w-full border ">
            <img src={slide5} className="w-full h-[400px]" alt="" />
        </div>
        <div className="w-full">
            <h2 className="text-3xl text-gray-200">MEARCH 20 |24</h2>
            <h2 className="text-3xl text-gray-200">WHERE CAN I GET SOME</h2>
            <p className="text-gray-300 my-4 text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum eveniet architecto eum pariatur delectus dicta, quo sequi veritatis repellat perferendis.</p>
            <button className="btn-outline border-b-4 rounded-xl  text-gray-200 border-blue-400 px-4 hover:bg-blue-300 py-3">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Paralax;
