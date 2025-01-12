import React, { useContext } from "react";
import { Authcontext } from "../auth/Authprovider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useaxios from "../hook/useaxios";


const Foodcard = ({item}) => {
    const {name,image,price,recipe,_id} = item
    const {user} = useContext(Authcontext)
    const location = useLocation()
    const axiossecure = useaxios()
    const navigate = useNavigate()
    const handleaddcart = food => {
        if (user && user.email) {
          console.log(user.email)
          const cartitem = {
            menuId: _id,
            email: user.email,
            name,
            image,
            price
          }
          axiossecure.post('/carts', cartitem)
          .then(res => {
            console.log(res.data)
            if(res.data.insertedId){
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${name}- added your cart`,
                showConfirmButton: false,
                timer: 1500
              });
            }
          })

        } else {
          Swal.fire({
            title: "YOU are not logged",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, LOGIN"
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/login', {state: {from: location}})
            }
          });
        }
    }
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
          <button onClick={()=> handleaddcart(item)} className="btn-outline border-b-4 rounded-xl border-blue-400 px-4 hover:bg-blue-300 py-3">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Foodcard;
