import React from "react";
import usecart from "../hook/usecart";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useaxios from "../hook/useaxios";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart,refetch] = usecart();
  const totalprice = cart.reduce((a, b) => a + b.price, 0);
  const axiossecure = useaxios()
  const  handledelete = id  => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
        
            axiossecure.delete(`/cart/${id}`)
            .then(res => {
                if(res.data.deletedCount > 0){
                    refetch()
                    Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                }
            })

        }
      });
  }
  return (
    <div>
      <div className="flex justify-evenly mt-10">
        <h2 className="text-3xl ">total items: {cart.length}</h2>
        <h2 className="text-3xl ">total price: {totalprice}$</h2>
        {cart.length ? <Link to='/dashboard/payment' className="btn btn-primary">pay</Link> : <button className="btn disabled"> pay </button>}
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
            <th>id</th>
              <th>Name</th>
              <th>price</th>
              <th>action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
                cart.map((item , index)=> <tr>
                    <th>
                      {index +1}
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={item.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{item.name}</div>
                          
                        </div>
                      </div>
                    </td>
                    
                    <td>{item.price}$</td>
                    <th>
                      <button 
                      onClick={()=>handledelete (item._id)} className="btn btn-ghost btn-lg">
                        <FaTrash className="text-red-500"></FaTrash>
                      </button>
                    </th>
                  </tr>)
            }
            
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
