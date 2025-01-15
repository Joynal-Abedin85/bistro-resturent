import React from "react";
import useMenu from "../../menucomponents/useMenu";
import { FaEdit, FaTrash } from "react-icons/fa";
import useaxios from "../../hook/useaxios";
import Swal from "sweetalert2";
import usecart from "../../hook/usecart";

const Manageitem = () => {
  const [menu, ,refetch] = useMenu();
//   const [refetch] = usecart();

  const axiossecure = useaxios();

  const handledeleteitem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      console.log(result);
      if (result.isConfirmed) {
        axiossecure.delete(`/menu/${item._id}`).then((res) => {
            console.log(res.data)
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <div className="w-max text-center  mx-auto my-10">
        <h2 className="text-4xl text-amber-400 pb-2">---hurry up---</h2>
        <h2 className="uppercase text-4xl  border-y-4 py-3">
          Manage all items
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>image</th>
              <th>item name</th>
              <th>price</th>
              <th>update</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
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
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.price}-$</td>
                <th>
                  <button className="btn btn-ghost btn-lg">
                    <FaEdit className="text-amber-500"></FaEdit>
                  </button>
                </th>
                <th>
                  <button
                    onClick={() => handledeleteitem(item)}
                    className="btn btn-ghost btn-lg"
                  >
                    <FaTrash className="text-red-500"></FaTrash>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Manageitem;
