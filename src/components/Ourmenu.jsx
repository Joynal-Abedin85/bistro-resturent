import React from "react";

import menu from '../assets/menu/pizza-bg.jpg'


const Ourmenu = () => {
  return (
    <div>
      <div className="w-max text-center  mx-auto my-10">
        <h2 className="text-4xl text-amber-400 pb-2">---check it out---</h2>
        <h2 className="uppercase text-5xl  border-y-4 py-3">From Our Menu</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  ">
        <div className="flex gap-4 ">
            <div className="">
                <img className="h-28  bg-cover rounded-[100px] rounded-tl-none" src={menu} alt="" />
            </div>
            <div className="">
                <h2 className="text-2xl">roast duck brest ---------</h2>
                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, nobis laborum. Praesentium esse sint facere.</p>
            </div>
            <div className="">
                <h2 className="text-amber-400 text-3xl">$14.5</h2>
            </div>
        </div>
        <div className="flex gap-4 ">
            <div className="">
                <img className="h-28  bg-cover rounded-[100px] rounded-tl-none" src={menu} alt="" />
            </div>
            <div className="">
                <h2 className="text-2xl">roast duck brest ---------</h2>
                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, nobis laborum. Praesentium esse sint facere.</p>
            </div>
            <div className="">
                <h2 className="text-amber-400 text-3xl">$14.5</h2>
            </div>
        </div>
        <div className="flex gap-4 ">
            <div className="">
                <img className="h-28  bg-cover rounded-[100px] rounded-tl-none" src={menu} alt="" />
            </div>
            <div className="">
                <h2 className="text-2xl">roast duck brest ---------</h2>
                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, nobis laborum. Praesentium esse sint facere.</p>
            </div>
            <div className="">
                <h2 className="text-amber-400 text-3xl">$14.5</h2>
            </div>
        </div>
        <div className="flex gap-4 ">
            <div className="">
                <img className="h-28  bg-cover rounded-[100px] rounded-tl-none" src={menu} alt="" />
            </div>
            <div className="">
                <h2 className="text-2xl">roast duck brest ---------</h2>
                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, nobis laborum. Praesentium esse sint facere.</p>
            </div>
            <div className="">
                <h2 className="text-amber-400 text-3xl">$14.5</h2>
            </div>
        </div>
        <div className="flex gap-4 ">
            <div className="">
                <img className="h-28  bg-cover rounded-[100px] rounded-tl-none" src={menu} alt="" />
            </div>
            <div className="">
                <h2 className="text-2xl">roast duck brest ---------</h2>
                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, nobis laborum. Praesentium esse sint facere.</p>
            </div>
            <div className="">
                <h2 className="text-amber-400 text-3xl">$14.5</h2>
            </div>
        </div>
        <div className="flex gap-4 ">
            <div className="">
                <img className="h-28  bg-cover rounded-[100px] rounded-tl-none" src={menu} alt="" />
            </div>
            <div className="">
                <h2 className="text-2xl">roast duck brest ---------</h2>
                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, nobis laborum. Praesentium esse sint facere.</p>
            </div>
            <div className="">
                <h2 className="text-amber-400 text-3xl">$14.5</h2>
            </div>
        </div>
      </div>
      <div className="text-center my-4">
        <button className="btn-outline border-b-4 rounded-xl border-blue-400 px-4 hover:bg-blue-300 py-3">View Full Menu</button>
      </div>
    </div>
  );
};

export default Ourmenu;
