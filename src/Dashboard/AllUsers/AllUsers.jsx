import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaAdversal, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Pages/Shared/Custom/useAxiosSecure";

function AllUsers() {
  const axiosSecure = useAxiosSecure();
  const { data : users = [] , refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleDeleteItem = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/users/${id}`)
          .then((res) => {
            console.log(res.data);
            Swal.fire("User Deleted Successfully");
            if (res.data.deletedCount > 0) {
              refetch()
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((error) => {
            console.log(error);
            Swal.fire("❌");
          });
      }
    });
  };
  const handleUpdateUser = (id) => {
    console.log(id)
    axiosSecure.patch(`/users/admin/${id}`)
    .then(res => {
      if(res.data.modifiedCount > 0) {
        refetch()
        Swal.fire('user Updated Successfully')
      }
    })
    .catch(err => {
      console.log(err)
    })
  }
  return (
    <div>
      <h1 className="text-4xl font-semibold my-6">
        All Users : {users?.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>User Name</th>
              <th>User Email</th>
              <th>Role </th>
              <th>Action </th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {users?.map((user, index) => (
              <tr>
                <th>{index + 1}</th>

                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>
                  {
                    user?.role === 'admin' ? 'Admin' : <button onClick={()=>handleUpdateUser(user?._id)} className="btn">
                    <FaAdversal className="text-xl"/>
                  </button> 
                  }
                </td>
                <td>
                  <button
                    className="btn btn-md "
                    onClick={() => handleDeleteItem(user?._id)}
                  >
                    <FaTrash className="text-red-600 cursor-pointer"></FaTrash>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllUsers;
