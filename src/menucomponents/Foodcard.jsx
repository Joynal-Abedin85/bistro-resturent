import React from "react";


const Foodcard = ({item}) => {
    const {name,image,price,recipe} = item
  return (
    <div className="card shadow-cyan-800  card-compact bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}!</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button className="btn-outline border-b-4 rounded-xl border-blue-400 px-4 hover:bg-blue-300 py-3">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Foodcard;
