import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import SectionTitle from "../../Components/SectionTitle";
import useAxiosSecure from "../../Pages/Shared/Custom/useAxiosSecure";
import useMenu from "../../Pages/Shared/Custom/useMenu";

function ManageItem() {

  const axiosSecure = useAxiosSecure();
  const [menu ,  , refetch] = useMenu()


  const handleDeleteItem =  (id) => {
    console.log("delete items", id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async(result) => {

       if (result.isConfirmed) {
      const res =await axiosSecure.delete(`/menu/${id}`)
      console.log(res.data)
      if (res.data.deletedCount > 0) {
      
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
           refetch()
    }
      }
    });
  };

  const handleUpdateItem = (id) => {
    console.log("update item", id);
  };
  return (
    <div>
      <SectionTitle heading={`Hurry Up`} title={`Manage All Items`} />
      <h1>{menu?.length}</h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Item Name</th>
              <th>Category </th>
              <th>Price </th>
              <th>Update </th>
              <th>Action </th>
            </tr>
          </thead>

         
            <tbody>
              {menu?.map((item, index) => (
                <tr key={item?._id}>
                  <th>{index + 1}</th>

                  <td>
                    <img className="h-14 rounded-" src={item?.image} alt="" />
                  </td>
                  <td>{item?.name}</td>
                  <td>{item?.category}</td>
                  <td>{item?.price}</td>
                  <td>
                    <Link
                      to={`/dashboard/updateItem/${item?._id}`}
                      className="btn"
                    >
                      <FaEdit className="text-lg" />
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-md "
                      onClick={() => handleDeleteItem(item?._id)}
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

export default ManageItem;
