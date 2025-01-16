import React, { useContext } from "react";
import { Authcontext } from "../../auth/Authprovider";
import useaxios from "../../hook/useaxios";
import { useQuery } from "@tanstack/react-query";

const Paymenthistory = () => {
  const { user } = useContext(Authcontext);
  const axiossecure = useaxios();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiossecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });
  return (
    <div>
      <h2 className="text-center text-amber-400 text-2xl my-4">payment History ={payments.length}</h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>price</th>
              <th>transction id</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((item , index) => <tr>
              <th>{index +1 }</th>
              <td>{item.price}</td>
              <td>{item.transc}</td>
              <td>{item.status}</td>
            </tr>)}
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Paymenthistory;
