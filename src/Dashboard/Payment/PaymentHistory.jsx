import { useQuery } from "@tanstack/react-query";
import React from "react";
import SectionTitle from "../../Components/SectionTitle";
import useAuth from "../../Firebase/useAuth";
import useAxiosSecure from "../../Pages/Shared/Custom/useAxiosSecure";
import useCart from "../../Pages/Shared/Custom/useCart";

function PaymentHistory() {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();





const {refetch , data : history  = []} = useQuery({
    queryKey : ['history' , user?.email],
    queryFn : async () => {
        const res = await axiosSecure.get(`/payments/${user.email}`)
        return res.data
    }
})

console.log(history)
  return (
    <div>
      <SectionTitle title={`Payment History`} />
      <div>
        <h1 className="text-3xl font-semibold ">Total Transactions :  {history?.length}</h1>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Transaction Id</th>
        <th>Total Price</th>
        <th>Payment Date</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        history?.map((his  , index)=>  <tr key={his} className="bg-base-200">
            <th>{index + 1}</th>
            <td>{his?.email}</td>
            <td>{his?.transaction}</td>
            <td>{his?.price}</td>
            <td>{his?.date}</td>
         
            
          </tr>)
     }
     
    </tbody>
  </table>
</div>
      </div>
    </div>
  );
}

export default PaymentHistory;
