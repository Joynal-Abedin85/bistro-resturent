import React from "react";
import { NavLink } from "react-router-dom";

const Menucate = ({ items ,title}) => {
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-10">
        {items.map((item) => (
          <div className="flex gap-4 ">
            <div className="w-[150px] ">
              <img
                className="h-28      rounded-[100px] rounded-tl-none"
                src={item.image}
                alt=""
              />
            </div>
            <div className="">
              <h2 className="text-2xl">{item.name} ---------</h2>
              <p className="">{item.recipe}</p>
            </div>
            <div className="">
              <h2 className="text-amber-400 text-3xl">${item.price}</h2>
            </div>
          </div>
        ))}
      </div>
      <NavLink to={`/food/${title}`}>
      <div className="text-center my-4">
        <button className="btn-outline text-white border-b-4 rounded-xl border-blue-400 px-4 hover:bg-blue-300 py-3">
          Order your favorite food
        </button>
      </div>
      </NavLink>
    </div>
  );
};

export default Menucate;
